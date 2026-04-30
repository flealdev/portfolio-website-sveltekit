import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


export async function POST(event) {


	// endpoint mk: /mk/
	// formato endereço no endpoint do mk: sigla do estado|nome da cidade|nome do bairro|nome da rua|número da residência|complemento opcional|CEP

	const data = await event.request.json()
	const { Name, Phone, Email } = data.Contact
	const { Cidade, Estado, Bairro, Rua, Numero, CEP } = data.Contact.Custom_Fields

	const endereco = `${Estado}|${Cidade}|${Bairro}|${Rua}|${Numero}||${CEP}`

	// console.log(url)

	// const bodyReq = {
	// 	"oportunidades": [
	// 				{
	// 					"titulo": `Lead ${nomeCanalVenda}`,
	// 					"valor": "0",
	// 					"codigo_vendedor": `${usuarioCrm}`,
	// 					"codigo_metodologia": "22139",
	// 					"codigo_canal_venda": `${canalVenda}`,
	// 					"codigo_etapa": "99976",
	// 					"empresa": {
	// 						"nome": `${nome}`
	// 					},
	// 					"contato": {
	// 						"nome": `${nome}`,
	// 						"telefone1": `${telefone}`,
	// 						"personalizados": [
	// 							{
	// 								"titulo": "Cidade",
	// 								"valor": `${cidade}`
	// 							}
	// 						]
	// 					}
	// 				}
	// 			]
	// }



	const fetchTokenMK = async () => {
		const res = await event.fetch("https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=39307853c053664&cd_servico=9999", {
			method: "GET"
		});

			const data = await res.json();

			const {Token} = data


			return Token;
		}
	
	const token = await fetchTokenMK()
	
	const url = encodeURI(`https://sac.newlifefibra.com.br/mk/WSMKInserirLead.rule?nome=${Name}&fone01=${Phone}&email=${Email ?? Email}&endereco_lead=${endereco}&token=${token}&sys=MK0`)

	const fetchCadastraCrm = async () => {
		const res = await event.fetch(url, {
			method: "GET"
		});

			const data = await res.json();


			return data;
		}

	const cadastraCrm = await fetchCadastraCrm()

	return json(cadastraCrm);
}