import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate, message } from "sveltekit-superforms/server";

// valida com turnstile
// async function validateToken(token, secret) {
//     const response = await fetch(
//         'https://challenges.cloudflare.com/turnstile/v0/siteverify',
//         {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 response: token,
//                 secret: secret,
//             }),
//         },
//     );

//     const data = await response.json();

//     return {
//         // Return the status
//         success: data.success,
//         // Return the first error if it exists
//         error: data['error-codes']?.length ? data['error-codes'][0] : null,
//     };
//   }

// valida campos com zod
// const validaFormPlanos = z.object({
//     nome: z.string().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{1,}$/g, {
//         message: "Nome inválido! Insira somente letras."
//     }),
//     telefone: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g, {
//         message: "Número inválido! Inclua o DDD, com ou sem parênteses."
//     }),
//     cidade: z.string().min(1),
//     outraCidade: z.string().optional(),
//     endereco: z.string().max(160, {
//         message: "Endereço muito longo! Insira no máximo 160 caracteres."
//     }),
//     valorPlano:z.any(),
//     whatsapp: z.any(),
//     plano: z.string(),
//     pagina: z.string(),
//     "cf-turnstile-response": z.any()
// })
// const validaFormViabilidade = z.object({
//     nome: z.string().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{1,}$/g, {
//         message: "Nome inválido! Insira somente letras."
//     }),
//     telefone: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g, {
//         message: "Número inválido! Inclua o DDD, com ou sem parênteses."
//     }),
//     endereco: z.string().min(1).max(160, {
//         message: "Endereço muito longo! Insira no máximo 160 caracteres."
//     }),
//     valorPlano: z.any(),
//     whatsapp: z.any(),
//     pagina: z.any(),
//     "cf-turnstile-response": z.any()
// })

// export const actions = {
//     planos: async (event) => {
//         const form = await superValidate(event, validaFormPlanos)

//         if (form.valid) {
//             // campos
//             const nome = form.data.nome;
//             const telefone = form.data.telefone;
//             const cidade = form.data.cidade === "Outra" ? form.data.outraCidade != "" ? form.data.outraCidade : "Não informada" : form.data.cidade;
//             const endereco = form.data.endereco === "" ? "Não informado" : form.data.endereco;
//             const whatsapp = form.data.whatsapp ? form.data.whatsapp : "Não";
//             const plano = form.data.plano;
//             const pagina = form.data.pagina
//             const token = form.data['cf-turnstile-response']

//             const {success, error} = await validateToken(token, import.meta.env.VITE_TURNSTILE_SECRET)

//             const enviaEmail = async () => {
//                 event.fetch('https://api.sendgrid.com/v3/mail/send', {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': `Bearer ${import.meta.env.VITE_SENDGRID_KEY}`,
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         'from': {
//                             'email': 'sistemas@grandmom.com.br'
//                         },
//                         'personalizations': [
//                             {
//                                 'to': [
//                                     {
//                                         'email': 'ceo@newlifefibra.com.br'
//                                     }
//                                 ],
//                                 "cc": [
//                                     {
//                                         'email': 'michel@sisefficere.com.br'
//                                     }
//                                 ],
//                                 'dynamic_template_data': {
//                                     "titulo": "Chegou um novo lead!",
//                                     "nome": nome,
//                                     'fields': [
//                                         {
//                                             'label': "Telefone",
//                                             'value': telefone
//                                         },
//                                         {
//                                             'label': "Cidade",
//                                             'value': cidade
//                                         },
//                                         {
//                                             'label': "Endereço",
//                                             'value': endereco
//                                         },
//                                         {
//                                             'label': "Whatsapp",
//                                             'value': whatsapp
//                                         },
//                                         {
//                                             'label': "Plano",
//                                             'value': plano
//                                         }
//                                     ],
//                                     'url': `${import.meta.env.VITE_URL_SITE}${pagina}`,
//                                     'formulario': "Planos",
//                                     'assunto': `LEAD - Interessado em ${plano} - ${import.meta.env.VITE_NOME_SITE}`
//                                 }
//                             }
//                         ],
//                         'template_id': 'd-9bfbb92ac02846839786a15eb28e8d71'
//                     })
//                 })
//             }

//             if(success){
//                 enviaEmail()
//                 return message(form, 'Muito obrigado!');
//             }else{
//                 return message(form, `${error === "missing-input-response" ? "Realize a verificação abaixo." : "Formulário já enviado!"}`, {
//                     status: 400
//                 });
//             }
//         } else {
//             return fail(400, {
//                 form
//             })
//         }
//     },
//     viabilidade: async (event) => {
//         const form = await superValidate(event, validaFormViabilidade)

//         if (form.valid) {
//             // campos
//             const nome = form.data.nome;
//             const telefone = form.data.telefone;
//             const endereco = form.data.endereco;
//             const whatsapp = form.data.whatsapp ? form.data.whatsapp : "Não";
//             const pagina = form.data.pagina
//             const token = form.data['cf-turnstile-response']

//             const {success, error} = await validateToken(token, import.meta.env.VITE_TURNSTILE_SECRET)
//             const enviaEmail = async () => {
//                 event.fetch('https://api.sendgrid.com/v3/mail/send', {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': `Bearer ${import.meta.env.VITE_SENDGRID_KEY}`,
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         'from': {
//                             'email': 'sistemas@grandmom.com.br'
//                         },
//                         'personalizations': [
//                             {
//                                 'to': [
//                                     {
//                                         'email': 'ceo@newlifefibra.com.br'
//                                     }
//                                 ],
//                                 "cc": [
//                                     {
//                                         'email': 'michel@sisefficere.com.br'
//                                     }
//                                 ],
//                                 'dynamic_template_data': {
//                                     "titulo": "Chegou um novo lead!",
//                                     "nome": nome,
//                                     'fields': [
//                                         {
//                                             'label': "Telefone",
//                                             'value': telefone
//                                         },
//                                         {
//                                             'label': "Endereço",
//                                             'value': endereco
//                                         },
//                                         {
//                                             'label': "Whatsapp",
//                                             'value': whatsapp
//                                         }
//                                     ],
//                                     'url': `${import.meta.env.VITE_URL_SITE}${pagina}`,
//                                     'formulario': "Viabilidade",
//                                     'assunto': `LEAD - Consulta de viabilidade - ${import.meta.env.VITE_NOME_SITE}`
//                                 }
//                             }
//                         ],
//                         'template_id': 'd-9bfbb92ac02846839786a15eb28e8d71'
//                     })
//                 })
//               }

//             if(success){
//                 enviaEmail()
//                 return message(form, 'Muito obrigado!');
//             }else{
//                 return message(form, `${error === "missing-input-response" ? "Realize a verificação abaixo." : "Formulário já enviado!"}`, {
//                     status: 400
//                 });
//             }
//         } else {
//             return fail(400, {
//                 form
//             })
//         }
//     }
// };

export async function load(event) {
  // const formPlanos = await superValidate(event, validaFormPlanos)
  // const formViabilidade = await superValidate(event, validaFormViabilidade)

  // const fetchBannerPromo = async () => {

  //     const query = `
  //             {
  //                 banners(where: {search: "Banner 1"}) {
  //                 nodes {
  //                     desktop {
  //                     node {
  //                         guid
  //                     }
  //                     }
  //                     mobile {
  //                     node {
  //                         guid
  //                     }
  //                     }
  //                     tablet {
  //                     node {
  //                         guid
  //                     }
  //                     }
  //                 }
  //                 }
  //             }
  //         `;

  //     const res = await event.fetch(`${import.meta.env.VITE_ENDPOINT_GRAPHQL}`, {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //             query
  //         }),
  //     });

  //     const data = await res.json();

  //     return data;
  // };

  return {
    // forms: {
    //     formPlanos,
    //     formViabilidade
    // },
    // banner: fetchBannerPromo(),
    titulo: "Planos de internet banda larga acessíveis",
    descricao:
      "Planos de internet acessíveis em São Gabriel, Bagé, Passo Fundo e regiões. Fibra ótica, download e upload iguais. Atendimento humanizado. Provedor de internet New Life Fibra, líder na região.",
  };
}
