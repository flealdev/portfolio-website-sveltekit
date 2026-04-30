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

// validação com zod
// const validaNotificaIncidente = z.object({
//     telefone: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g,{
//       message: "Número inválido! Inclua o DDD, com ou sem parênteses."
//     }),

//     endereco: z.string().max(160, {
//         message: "Endereço muito longo! Insira no máximo 160 caracteres."
//     }),
//     incidente: z.string().min(1),
//     outroTipoIncidente: z.string().max(160, {
//         message: "Descrição muito longa! Insira no máximo 160 caracteres."
//     }).optional(),
//     pagina: z.string(),
//     "cf-turnstile-response": z.any()
// })

// export const actions = {
//   formIncidente: async (event) => {
//     const form = await superValidate(event, validaNotificaIncidente)

//     if(form.valid){
//       // campos
//       const telefone = form.data.telefone;
//       const endereco = form.data.endereco;
//       const outroTipoIncidente = form.data.outroTipoIncidente;
//       const incidente = form.data.incidente != "Outros" ? form.data.incidente : outroTipoIncidente;
//       const pagina = form.data.pagina;
//       const token = form.data['cf-turnstile-response']

//       const {success, error} = await validateToken(token, import.meta.env.VITE_TURNSTILE_SECRET)
//       const enviaEmail = async () => {
//        event.fetch('https://api.sendgrid.com/v3/mail/send', {
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
//                   },
//                 ],
//                 'dynamic_template_data': {
//                   "titulo": "Possível incidente relatado",
//                   "nome": incidente,
//                   'fields': [
//                     {
//                       'label': "Telefone da pessoa que informou",
//                       'value': telefone
//                     },
//                     {
//                       'label': "Endereço",
//                       'value': endereco
//                     }
//                   ],
//                   'url': `${import.meta.env.VITE_URL_SITE}${pagina}`,
//                   'formulario': "Notificação de Incidentes",
//                   'assunto': `ALERTA - Possível Incidente - ${import.meta.env.VITE_NOME_SITE}`
//                 }
//               }
//             ],
//             'template_id': 'd-a244f38ba09b4b12b77fe795a5ee7892'
//           })
//         })
//       }

//       if(success){
//         enviaEmail()
//         return message(form, 'Sua notificação foi enviada!');
//       }else{
//         return message(form, `${error === "missing-input-response" ? "Realize a verificação abaixo." : "Formulário já enviado!"}`, {
//           status: 400
//       });
//       }

//     }else{
//       return fail(400,{
//         form
//       })
//     }
//   }
// }

export async function load(event) {

  return {
    // form:{notificaIncidente},
    titulo: "Status dos serviços e sistemas",
    descricao:
      "Confira na página de Status a situação dos serviços e sistemas New Life Fibra. Em caso de instabilidade, consulte aqui se há algo que possa estar afetando a sua conexão.",
  };
}
