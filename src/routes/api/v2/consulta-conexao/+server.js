import { fetchTokenWsMk } from '$lib/core/models/fetch.js';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


export async function GET(event) {

	// const token = event.url.searchParams.get('token')
	const cd_cliente = event.url.searchParams.get('cd_cliente')
	const key = event.url.searchParams.get('key');

	// const fetchTokenWsMk = async () => {
	// 	const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=39307853c053664&cd_servico=9999`, {
	// 		method: "GET"
	// 	});

	// 	const data = await res.json();

	// 	return data.Token;
	// }

	const token = await fetchTokenWsMk(event);

	let conexoes = [], placeholder = [
		{
			codConexao: "",
			endereco: "",
			bloqueada: ""
		},
		{
			codConexao: "",
			endereco: "",
			bloqueada: ""
		},
		{
			codConexao: "",
			endereco: "",
			bloqueada: ""
		}
	]

	// tratamento de erros caso a chave de acesso esteja errado ou em branco
	if (!key) throw error(401, 'Consulta não autorizada');
	if (key != "dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0") throw error(401, 'Consulta não autorizada, parâmetro key incorreto!');

	// consulta faturas pendentes
	const fetchConexoes = async () => {
		const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSMKConexoesPorCliente.rule?sys=MK0&token=${token}&cd_cliente=${cd_cliente}`, {
			method: "GET"
		});

		const data = await res.json();

		return data;
	}

	const dadosConexoes = await fetchConexoes();

	// 	tratamento de erros caso tenha problema com o retorno da api, como token de autenticação inválido
	if (dadosConexoes.status === "OK") {
		if(dadosConexoes.Conexoes.length > 0){
			for (const el of dadosConexoes.Conexoes) {
				conexoes.push({
					codConexao: el.codconexao,
					endereco: el.endereco,
					bloqueada: el.bloqueada
				})
			}
		}
	} else throw error(401, 'Consulta não autorizada');

	const conexoesTotal = conexoes.concat(placeholder)

	return json(conexoesTotal);
}