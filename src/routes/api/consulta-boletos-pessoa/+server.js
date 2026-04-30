import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


export async function GET(event) {

	const token = event.url.searchParams.get('token')
	const cd_cliente = event.url.searchParams.get('cd_cliente')
	const key = event.url.searchParams.get('key');
	let faturas = []

	// tratamento de erros caso a chave de acesso esteja errado ou em branco
	if (!key) throw error(401, 'Consulta não autorizada');
	if (key != "dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0") throw error(401, 'Consulta não autorizada, parâmetro key incorreto!');

	// consulta faturas pendentes
	const fetchFaturas = async () => {
		const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSMKFaturasPendentes.rule?sys=MK0&token=${token}&cd_cliente=${cd_cliente}`, {
			method: "GET"
		});

		const data = await res.json();

		return data;
	}

	const faturasPendentes = await fetchFaturas();

	// 	tratamento de erros caso tenha problema com o retorno da api, como token de autenticação inválido
	if (faturasPendentes.status === "OK") {
		// iteração em todas as faturas pendentes
		for (const el of faturasPendentes.FaturasPendentes) {
			const hoje = new Date()
			const mesPassado = new Date()
			const anoPassado = new Date()

			if (hoje.getMonth() > 0 && hoje.getMonth() <= 11) {
				mesPassado.setMonth(hoje.getMonth() - 1)
			} else mesPassado.setMonth(11)
			anoPassado.setYear(hoje.getFullYear() - 1)

			const dataSeparada = el.data_vencimento.split("/")
			const dataISO = `${dataSeparada[2]}/${dataSeparada[1]}/${dataSeparada[0]}`
			const dataConvertida = new Date(dataISO)

			// pega todas as faturas pendentes até o mes atual
			if ((dataConvertida.getFullYear() === anoPassado.getFullYear()) || (dataConvertida.getMonth() <= hoje.getMonth() && dataConvertida.getFullYear() === hoje.getFullYear())) {
				// percorre todo o array de faturas e a cada iteração consulta a segunda via da fatura, pegando o link do boleto, valor e vencimento
				const fetchSegundaViaBoleto = async () => {
					const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSMKSegundaViaCobranca.rule?sys=MK0&token=${token}&cd_fatura=${el.codfatura}`, {
						method: "GET"
					});

					const data = await res.json();

					return data;
				}

				const fetchCodigoPix = async () => {
					const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSMKRetornarCopieColaPix.rule?sys=MK0&token=${token}&CodigoFatura=${el.codfatura}`, {
						method: "GET"
					});

					const data = await res.json();

					return data;
				}



				const { PathDownload, Valor, Vcto } = await fetchSegundaViaBoleto();
				const { texto_qrcode } = await fetchCodigoPix();

				// adiciona as faturas filtradas no array faturas já com todos os dados
				faturas.push({
					descricao: el.descricao,
					linkDownload: PathDownload,
					pixCopiaeCola: texto_qrcode,
					valor: Valor,
					vencimento: Vcto
				})

			}
		}
	} else throw error(401, 'Consulta não autorizada');

	return json(faturas);
}