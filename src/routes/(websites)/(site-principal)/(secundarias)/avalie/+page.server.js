import { schemaFormAvalia } from '$lib/core/models/validation-schemas.js';
import { fail } from '@sveltejs/kit';
import { zod } from "sveltekit-superforms/adapters";
import { superValidate, message } from "sveltekit-superforms"

// valida com turnstile
async function validateToken(token, secret) {
    const response = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                response: token,
                secret: secret,
            }),
        },
    );

    const data = await response.json();

    return {
        // Return the status
        success: data.success,
        // Return the first error if it exists
        error: data['error-codes']?.length ? data['error-codes'][0] : null,
    };
}

export async function load(event) {
    const formAvalia = await superValidate(event, zod(schemaFormAvalia))

    return {
        formAvalia,
        titulo: "Avaliação e ouvidoria",
        descricao: "Avalie a New Life Fibra! O provedor de internet líder da região precisa da sua opinião. Contamos com a sua avaliação dos serviços da New Life Fibra."
    };
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event.request, zod(schemaFormAvalia))

        if (form.valid) {
            const dataCompleta = new Date();
            const dia = dataCompleta.getDate().toString();
            const mesDate = dataCompleta.getMonth() + 1;
            const mesString = mesDate.toString();
            const ano = dataCompleta.getFullYear();
            const dataAtual = `${dia.length < 2 ? '0' + dia : dia}-${mesString.length < 2 ? '0' + mesString : mesString}-${ano}`;
            console.log(form.data)
            const nota = form.data.nota;
            const relato = form.data.relato;
            const nome = form.data.nome ?? "";
            const telefone = form.data.telefone ?? "";
            const pagina = form.data.pagina;
            const tokenTurnstile = form.data['cf-turnstile-response']

            const { success, error } = await validateToken(tokenTurnstile, "0x4AAAAAAAG5H1WQY_DSr13Yaopjf54SK2s")

            if (success) {
                let titulo = ""
                if (nome) {
                    titulo = " por " + nome
                }

                // pega token
                const res = await fetch(`https://cms.newlifefibra.com.br/wp-json/jwt-auth/v1/token?username=michel&password=!C%237BM%26%gAL3Fo%iIZ`, {
                    method: 'POST'
                })
                const data = await res.json()
                const token = data.token
                // https://cms.newlifefibra.com.br/wp-json/wp/v2/avaliacao?title=Teste&nota=2&data=1-1-2023

                // realiza fetch
                const enviaAvaliação = await event.fetch(`https://cms.newlifefibra.com.br/wp-json/wp/v2/avaliacao?title=${'Nota+' + nota + titulo}&${nome ? 'nome=' + nome : ""}&nota=${nota}&relato=${relato}&${telefone ? 'telefone=' + telefone : ""}&data=${dataAtual}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const resultadoEnvio = await enviaAvaliação.json()
                // console.log(resultadoEnvio)
                if (resultadoEnvio.status) {
                    if (resultadoEnvio.status === "draft") {
                        // enviaEmail();
                        return message(form, 'Sua avaliação foi enviada!');
                    } else {
                        return message(form, "Ocorreu um erro no envio da sua avaliação!", {
                            status: 400
                        });
                    }
                } else {
                    return message(form, "Ocorreu um erro no envio da sua avaliação!", {
                        status: 400
                    });
                }


            } else {
                return message(form, `${error === "missing-input-response" ? "Realize a verificação abaixo." : "Avaliação já enviada!"}`, {
                    status: 400
                });
            }

        } else {
            return fail(400, { form })
        }
    }
};