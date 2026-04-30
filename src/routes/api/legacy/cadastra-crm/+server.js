import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


export async function POST(event) {


	// endpoint callsys: https://newlife.callsys.com.br/app/api/integra/chat/ticket/{TICKET_ID} - Chat/Ticket - Obter dados/mensagens de Ticket - token (da empresa, pego com o suporte): JJqaZ5Ze2Md0nK78qdq7fcRK50wEJQi95w6p9NGLCPEQ6iusTjPqYXYwtsoXKFjUg
	// endpoint CRM: https://app.funildevendas.com.br/api/Opportunity?IntegrationKey=bfa45601-9ab9-4331-a3a5-03db3b533dce

	const { key, agente, canal, telefone, nome, cidade } = await event.request.json()
	// const key = event.url.searchParams.get('key');
	// const agente = event.url.searchParams.get('agente');
	// const canal = event.url.searchParams.get('canal');
	// const telefone = event.url.searchParams.get('telefone');
	// const nome = event.url.searchParams.get('nome');
	// const cidade = event.url.searchParams.get('cidade');

	// tratamento de erros caso a chave de acesso esteja errado ou em branco
	if (!key) throw error(401, 'Consulta não autorizada');
	if (key != import.meta.env.VITE_TOKEN_API) throw error(401, 'Consulta não autorizada');

	// consulta faturas pendentes
	// const fetchTicket = async () => {
	// 	const res = await event.fetch(`https://newlife.callsys.com.br/app/api/integra/chat/ticket/${ticketId}`, {
	// 		method: "GET",
	// 		headers: {
	// 			"api-token": `${key}`
	// 		}
	// 	});

	// 	const data = await res.json();

	// 	return data;
	// }

	// const statusTicket = await fetchTicket();
	let canalVenda, oportunidade, nomeCanalVenda;
	// IDs dos canais de venda no CRM: 113101 (FACEBOOK PRINCIPAL), 113103 (FACEBOOK FIBRA OTICA RS), 113102 (FACEBOOK FIBRA OTICA PASSO FUNDO RS), 113643 (DIG - CAMPANHAS FACEBOOK ADS), 113859 (DIG - CAMPANHAS GOOGLE ADS), 113870 (DIG - ORG - BOTAO WPP SITE), 116525 (WHATSAPP COMERCIAL BAGE)

	switch (canal) {
		case "7": canalVenda = "113101"; nomeCanalVenda = "Facebook"; break;
		case "8": canalVenda = "113102"; nomeCanalVenda = "Facebook"; break;
		case "9": canalVenda = "113103"; nomeCanalVenda = "Facebook"; break;
		case "10": canalVenda = "113643"; nomeCanalVenda = "Facebook"; break;
		case "11": canalVenda = "113859"; nomeCanalVenda = "Google Ads"; break;
		case "12": canalVenda = "113870"; nomeCanalVenda = "Orgânico Site"; break;
		case "14": canalVenda = "116525"; nomeCanalVenda = "Whatsapp Comercial Bagé"; break;
	}


	let usuarioCrm;

	// IDs dos usuários CRM: 59514 (Sistemas GDM), 65297 (Max), 65288 (Rhayssa), 65307 (Cleberson), 65311 (Ederson), 65314 (Claiton), 65308 (Eduarda), 65309 (Jampierre), 65310 (Danieli).	

	switch (agente) {
		case "52": usuarioCrm = "59514"; break;
		case "21": usuarioCrm = "65297"; break;
		case "38": usuarioCrm = "65297"; break;
		case "3": usuarioCrm = "65288"; break;
		case "60": usuarioCrm = "65307"; break;
		case "82": usuarioCrm = "65307"; break;
		case "10": usuarioCrm = "65311"; break;
		case "77": usuarioCrm = "65311"; break;
		case "7": usuarioCrm = "65314"; break;
		case "74": usuarioCrm = "65308"; break;
		case "73": usuarioCrm = "65309"; break;
		case "8": usuarioCrm = "65310"; break;
	}

	const bodyReq = {
		"oportunidades": [
			{
				"titulo": `Lead ${nomeCanalVenda}`,
				"valor": "0",
				"codigo_vendedor": `${usuarioCrm}`,
				"codigo_metodologia": "22139",
				"codigo_canal_venda": `${canalVenda}`,
				"codigo_etapa": "99976",
				"empresa": {
					"nome": `${nome}`
				},
				"contato": {
					"nome": `${nome}`,
					"telefone1": `${telefone}`,
					"personalizados": [
						{
							"titulo": "Cidade",
							"valor": `${cidade}`
						}
					]
				}
			}
		]
	}

	const fetchCadastraCrm = async () => {
		const res = await event.fetch(`https://app.funildevendas.com.br/api/Opportunity?IntegrationKey=bfa45601-9ab9-4331-a3a5-03db3b533dce`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(bodyReq)
		});

		const data = await res.json();


		return data;
	}

	const cadastraCrm = await fetchCadastraCrm()
	// console.log(cadastraCrm)

	// 	tratamento de erros caso tenha problema com o retorno da api, como token de autenticação inválido
	// if (statusTicket.id != "") {
	// 	

	// 	// const fetchCadastraCrm = async () => {

	// 	// 	const data = await res.json();

	// 	// 	return data;
	// 	// }

	// 	// const statusCadastro = await fetchCadastraCrm();


	// } else throw error(401, 'Consulta não autorizada');

	return json(cadastraCrm);
}