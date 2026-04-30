import { fetchTokenWsMk } from '$lib/core/models/fetch.js';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

async function fetchConexoesAfetadas(event,token, codParada) {
	const res = await event.fetch(`https://sac.newlifefibra.com.br/core-api/notificacoes/conexoes-afetadas?token=${token}&codigo_parada=${codParada}`, {
		method: "GET"
	});

	const data = await res.json();

	return data;
}

export async function GET(event) {

	// const token = event.url.searchParams.get('token')
	const cd_conexao = event.url.searchParams.get('cd_conexao')
	const key = event.url.searchParams.get('key');


	const token = await fetchTokenWsMk(event);

	// tratamento de erros caso a chave de acesso esteja errado ou em branco
	if (!key) throw error(401, 'Consulta não autorizada');
	if (key != "dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0") throw error(401, 'Consulta não autorizada, parâmetro key incorreto!');

	//itera se cpf consulta cadastro e pega situação das conexoes

	const fetchNotifParada = async () => {
		const res = await event.fetch(`https://sac.newlifefibra.com.br/core-api/notificacoes/status?token=${token}&status=A`, {
			method: "GET"
		});

		const data = await res.json();

		return data;
	}
	const dadosNotifParadaAtivas = await fetchNotifParada()
	let codigosNotifParada = []
	if(dadosNotifParadaAtivas.length > 0){
		for (const el of dadosNotifParadaAtivas) {
			codigosNotifParada.push({codParada: el.cod})
		}

		if(codigosNotifParada.length > 1){
			for (const el of codigosNotifParada) {
			
				const dadosConexoesAfetadas = await fetchConexoesAfetadas(event, token, el.codParada);
				
				
				if(dadosConexoesAfetadas.length > 0){
					for (const el of dadosConexoesAfetadas) {
						if(el.codconexao == cd_conexao){
							return json({status: "Incidente ativo"})
						}
					}
				}
				
			}
			
		}else{
			const dadosConexoesAfetadas = await fetchConexoesAfetadas(event, token, codigosNotifParada[0].codParada);
	
			if(dadosConexoesAfetadas.length > 0){
				for ( const el of dadosConexoesAfetadas) {
					if(el.codconexao == cd_conexao){
						return json({status: "Incidente ativo"})
					}
				}
			}
		}
	}

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


	return json({status: "OK"});
}