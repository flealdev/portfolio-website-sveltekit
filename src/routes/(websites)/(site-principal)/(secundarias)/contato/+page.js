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
// }

// const validaFormContato = z.object({
//     nome: z.string().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{1,}$/g, {
//         message: "Nome inválido! Insira somente letras."
//     }),
//     telefone: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g, {
//         message: "Número inválido! Inclua o DDD, com ou sem parênteses."
//     }),
//     cidade: z.string().trim().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{2,30}$/g, {
//         message: "Nome da cidade inválido! Não insira números ou caracteres especiais. Máximo de 30 caracteres."
//     }).optional(),
//     motivo: z.string().min(1),
//     pagina: z.any(),
//     "cf-turnstile-response": z.any()
// })
// const validaFormFeedback = z.object({
//     nome: z.string().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{1,}$/g, {
//         message: "Nome inválido! Insira somente letras."
//     }),
//     telefone: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g, {
//         message: "Número inválido! Inclua o DDD, com ou sem parênteses."
//     }),
//     email: z.string().email({
//         message: "E-mail inválido! Certifique-se de ter o inserido corretamente."
//     }).optional(),
//     relato: z.string().min(1).max(1000, {
//         message: "Relato muito longo! Máximo de 1000 caracteres."
//     }),
//     pagina: z.any(),
//     "cf-turnstile-response": z.any()
// })

// export const actions = {
//     contato: async (event) => {

//         const form = await superValidate(event, validaFormContato)

//         if (form.valid) {
//             // campos
//             const nome = form.data.nome;
//             const telefone = form.data.telefone;
//             const motivo = form.data.motivo;
//             const pagina = form.data.pagina
//             const cidade = form.data.cidade ? form.data.cidade : "Não informada"
//             const token = form.data['cf-turnstile-response']

//             const { success, error } = await validateToken(token, import.meta.env.VITE_TURNSTILE_SECRET)
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
//                                     "titulo": "Chegou uma nova solicitação de contato!",
//                                     "nome": nome,
//                                     'fields': [
//                                         {
//                                             'label': "Cidade",
//                                             'value': cidade
//                                         },
//                                         {
//                                             'label': "Telefone",
//                                             'value': telefone
//                                         },
//                                         {
//                                             'label': "Motivo",
//                                             'value': motivo
//                                         }
//                                     ],
//                                     'url': `${import.meta.env.VITE_URL_SITE}${pagina}`,
//                                     'formulario': "Contato",
//                                     'assunto': `CONTATO - Solicitação - ${import.meta.env.VITE_NOME_SITE}`
//                                 }
//                             }
//                         ],
//                         'template_id': 'd-9bfbb92ac02846839786a15eb28e8d71'
//                     })
//                 })
//             }

//             if (success) {
//                 enviaEmail()

//                 return message(form, 'Muito obrigado!');
//             } else {
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
//     feedback: async (event) => {
//         const form = await superValidate(event, validaFormFeedback)

//         if (form.valid) {
//             const nome = form.data.nome;
//             const telefone = form.data.telefone;
//             const email = form.data.email ? form.data.email : "Não informado";
//             const relato = form.data.relato;
//             const pagina = form.data.pagina
//             const token = form.data['cf-turnstile-response']

//             const { success, error } = await validateToken(token, import.meta.env.VITE_TURNSTILE_SECRET)
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
//                                     "titulo": "Chegou um novo feedback!",
//                                     "nome": nome,
//                                     'fields': [
//                                         {
//                                             'label': "Telefone",
//                                             'value': telefone
//                                         },
//                                         {
//                                             'label': "E-mail",
//                                             'value': email
//                                         },
//                                         {
//                                             'label': "Relato",
//                                             'value': relato
//                                         }
//                                     ],
//                                     'url': `${import.meta.env.VITE_URL_SITE}${pagina}`,
//                                     'formulario': "Feedback",
//                                     'assunto': `CONTATO - Feedback - ${import.meta.env.VITE_NOME_SITE}`
//                                 }
//                             }
//                         ],
//                         'template_id': 'd-9bfbb92ac02846839786a15eb28e8d71'
//                     })
//                 })
//             }

//             if (success) {

//                 enviaEmail()
//                 return message(form, 'Muito obrigado!');

//             } else {
//                 return message(form, `${error === "missing-input-response" ? "Realize a verificação abaixo." : "Formulário já enviado!"}`, {
//                     status: 400
//                 });
//             }
//         } else {
//             return fail(400, { form })
//         }
//     }
// };

export async function load(event) {
  // const formContato = await superValidate(event, validaFormContato)
  // const formFeedback = await superValidate(event, validaFormFeedback)

  return {
    // forms: {
    //     formContato, formFeedback
    // },
    titulo: "Telefone e atendimento",
    descricao:
      "Canais de atendimento New Life Fibra. Telefone, e-mail, whatsapp e webchat da New Life Fibra para você entrar em contato com o provedor de internet líder da região.",
  };
}
