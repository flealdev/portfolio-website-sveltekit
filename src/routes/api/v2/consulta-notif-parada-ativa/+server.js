import { fetchTokenWsMk } from '$lib/core/models/fetch.js';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
export async function GET(event) {

	// const token = event.url.searchParams.get('token')
	const key = event.url.searchParams.get('key');

	// const fetchTokenWsMk = async () => {
	// 	const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=39307853c053664&cd_servico=9999`, {
	// 		method: "GET"
	// 	});

	// 	const data = await res.json();

	// 	return data.Token;
	// }

	const token = await fetchTokenWsMk(event);

	// tratamento de erros caso a chave de acesso esteja errado ou em branco
	if (!key) throw error(401, 'Consulta não autorizada');
	if (key != "dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0") throw error(401, 'Consulta não autorizada, parâmetro key incorreto!');

	//itera se cpf consulta cadastro e pega situação das conexoes

	// consulta faturas pendentes
	const fetchNotifParada = async () => {
		const res = await event.fetch(`https://sac.newlifefibra.com.br/core-api/notificacoes/status?token=${token}&status=A`, {
			method: "GET"
		});

		const data = await res.json();

		return data;
	}
	const dadosNotifParadaAtivas = await fetchNotifParada()
	if(dadosNotifParadaAtivas.length > 0){
		return json({status: "Incidente ativo"})
	}

	return json({status: "OK"});
}