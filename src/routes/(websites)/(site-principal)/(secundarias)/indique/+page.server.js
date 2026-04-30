import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate, message } from "sveltekit-superforms/server";

// valida com turnstile
// async function validateToken(token, secret) {
//   const response = await fetch(
//       'https://challenges.cloudflare.com/turnstile/v0/siteverify',
//       {
//           method: 'POST',
//           headers: {
//               'content-type': 'application/json',
//           },
//           body: JSON.stringify({
//               response: token,
//               secret: secret,
//           }),
//       },
//   );

//   const data = await response.json();

//   return {
//       // Return the status
//       success: data.success,
//       // Return the first error if it exists
//       error: data['error-codes']?.length ? data['error-codes'][0] : null,
//   };
// }

// const validaForm = z.object({
//   nomeCliente: z.string().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{1,}$/g, {
//       message: "Nome inválido! Insira somente letras."
//   }),
//   nomeAmigo: z.string().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{1,}$/g, {
//       message: "Nome inválido! Insira somente letras."
//   }),
//   telefoneCliente: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g, {
//       message: "Número inválido! Inclua o DDD, com ou sem parênteses."
//   }),
//   telefoneAmigo: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g, {
//       message: "Número inválido! Inclua o DDD, com ou sem parênteses."
//   }),
//   instagramAmigo: z.string().max(20, {
//     message: "Nome de usuário muito longo! Insira no máximo 30 caracteres."
// }).optional(),
//   pagina: z.any(),
//   "cf-turnstile-response": z.any()
// })

// export const actions = {
//   default: async (event) => {
//     const form = await superValidate(event, validaForm)

//     if (form.valid) {

//       // campos
//       const cliente = form.data.nomeCliente;
//       const amigo = form.data.nomeAmigo;
//       const telefoneCliente = form.data.telefoneCliente;
//       const telefoneAmigo = form.data.telefoneAmigo;
//       const instagramAmigo = form.data.instagramAmigo ? form.data.instagramAmigo : "Não informado";
//       const pagina = form.data.pagina
//       const token = form.data['cf-turnstile-response']

//       const {success, error} = await validateToken(token, import.meta.env.VITE_TURNSTILE_SECRET)
//       const enviaEmail = async () => {
//         event.fetch('https://api.sendgrid.com/v3/mail/send', {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${import.meta.env.VITE_SENDGRID_KEY}`,
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'from': {
//               'email': 'sistemas@grandmom.com.br'
//             },
//             'personalizations': [
//               {
//                 'to': [
//                   {
//                     'email': 'ceo@newlifefibra.com.br'
//                   }
//                 ],
//                 "cc": [
//                   {
//                     'email': 'michel@sisefficere.com.br'
//                   }
//                 ],
//                 'dynamic_template_data': {
//                   "titulo": "Chegou uma nova indicação!",
//                   'fields': [
//                     {
//                       'label': "Nome do cliente",
//                       'value': cliente
//                     },
//                     {
//                       'label': "Telefone",
//                       'value': telefoneCliente
//                     },
//                     {
//                       'label': "------------------------------"
//                     },
//                     {
//                       'label': "Nome do amigo",
//                       'value': amigo
//                     },
//                     {
//                       'label': "Telefone",
//                       'value': telefoneAmigo
//                     },
//                     {
//                       'label': "Instagram",
//                       'value': instagramAmigo
//                     }
//                   ],
//                   'url': `${import.meta.env.VITE_URL_SITE}${pagina}`,
//                   'formulario': "Indicação",
//                   'assunto': `INDICAÇÃO - Cliente ${cliente} - ${import.meta.env.VITE_NOME_SITE}`
//                 }
//               }
//             ],
//             'template_id': 'd-9bfbb92ac02846839786a15eb28e8d71'
//           })
//         })
//       }

//       if(success){
//         enviaEmail();

//         return message(form, 'Muito obrigado!');

//       }else{
//         return message(form, `${error === "missing-input-response" ? "Realize a verificação abaixo." : "Formulário já enviado!"}`, {
//           status: 400
//       });
//       }

//     }else{
//       return fail(400,{form})
//     }
//   }
// };

export async function load(event) {
  // const form = await superValidate(event, validaForm)

  return {
    // form,
    titulo: "Indicação e descontos",
    descricao:
      "A New Life Fibra oferece descontos para o cliente que indicar um amigo para um plano de internet acessível, veloz e estável. Não há limite de indicações.",
  };
}
