import { fetchTokenWsMk } from '$lib/core/models/fetch.js';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


export async function GET(event) {

	// const token = event.url.searchParams.get('token')
	const cd_conexao = event.url.searchParams.get('cd_conexao')
	const key = event.url.searchParams.get('key');

	// const fetchTokenWsMk = async () => {
	// 	const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=39307853c053664&cd_servico=9999`, {
	// 		method: "GET"
	// 	});

	// 	const data = await res.json();

	// 	return data.Token;
	// }

	const token = await fetchTokenWsMk(event);

	let conexoes = []

	// tratamento de erros caso a chave de acesso esteja errado ou em branco
	if (!key) throw error(401, 'Consulta não autorizada');
	if (key != "dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0") throw error(401, 'Consulta não autorizada, parâmetro key incorreto!');

	//itera se cpf consulta cadastro e pega situação das conexoes

	// consulta faturas pendentes
	const fetchAutodesbloqueio = async () => {
		const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSMKAutoDesbloqueio.rule?sys=MK0&token=${token}&cd_conexao=${cd_conexao}`, {
			method: "GET"
		});

		const data = await res.json();

		console.log(data)

		return data;
	}

	const retornoAutodesbloqueio = await fetchAutodesbloqueio();

	// 	tratamento de erros caso tenha problema com o retorno da api, como token de autenticação inválido
	// if (dadosConexoes.status === "OK") {
	// 	if(dadosConexoes.Conexoes.length > 0){
	// 		for (const el of dadosConexoes.Conexoes) {
	// 			conexoes.push({
	// 				codConexao: el.codconexao,
	// 				endereco: el.endereco,
	// 				bloqueada: el.bloqueada
	// 			})
	// 		}
	// 	}
	// } else throw error(401, 'Consulta não autorizada');

	console.log(retornoAutodesbloqueio)
	return json(retornoAutodesbloqueio);
}