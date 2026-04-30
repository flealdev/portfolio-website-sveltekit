import { fail } from '@sveltejs/kit';
import { z } from "zod";
import { superValidate, message } from "sveltekit-superforms/server"
import { zod } from "sveltekit-superforms/adapters";
import { schemaFormConsultaBase } from '$lib/core/models/validation-schemas.js';

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
    const form = await superValidate(event, zod(schemaFormConsultaBase))

    return {
        form,
        titulo: "Base de clientes"
    }
}


// lida com o formulário e executa o fetch
export const actions = {
    default: async (event) => {
        /*
        
        Recupera o CPF passado pelo input, trata formatos inválidos e armazena na variável.
        
        */
        const form = await superValidate(event, zod(schemaFormConsultaBase))


        if (form.valid) {
            const cpf = form.data.cpf;
            const tokenTurnstile = form.data['cf-turnstile-response']

            const { success, error } = await validateToken(tokenTurnstile, import.meta.env.VITE_TURNSTILE_SECRET)

            if (success) {
                // Gera novo token a cada nova pesquisa e armazena na variável.
                const getToken = async () => {
                    const tokenRes = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=3687777e73e3415&cd_servico=9999`);
                    const tokenData = await tokenRes.json();
                    return tokenData.Token;
                }
                const token = await getToken();

                /*
          
                    Busca código do cliente por CPF, trata exceções e armazena o código na variável
                        // if (!codClientRes.ok || codClientData.status === 'ERRO') //
                        - codClientRes.ok: trata se a busca de dados retornou código 200 (ok) ou maior do de 299 (erro) - erro no caso é no servidor do MK.
                        - codClientData.status: forma como a API exibe o erro.
                        // else if (codClientData.Outros.length > 0) //
                        - caso houver mais de um código para o cliente, navega em cada registro e insere o código no array CodCliente.
                        - caso contrário, insere o código único no array
          
                */
                const codClientRes = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSMKConsultaDoc.rule?sys=MK0&token=${token}&doc=${cpf}`);
                const codClientData = await codClientRes.json();

                let codCliente = [];
                if (!codClientRes.ok || codClientData.status === 'ERRO') {
                    return message(form, `CPF não encontrado em nossa base de dados.`, {
                        status: 400
                    });
                } else if (codClientData.Outros.length > 0) {
                    let ativos = codClientData.Outros.filter((el) =>
                        el.Situacao === "Ativo"
                    )
                    ativos.forEach((el) =>
                        codCliente.push(el.CodigoPessoa)
                    )
                } else {
                    codCliente.push(codClientData.CodigoPessoa);
                }

                /*
          
                    Busca contratos por código do cliente, trata exceções e retorna o primeiro nome do cliente em caixa alta.
                        // for(let i = 0; i < codCliente.length; i++) //
                        - navega em cada registro do array codCliente e verifica se algum código possui contrato válido, caso afirmativo, adiciona o primeiro nome do cliente na variavel dadosCliente e define a variavel ativo como true.
                        // if(ativo) //
                        - Caso o loop tenha encontrado contratos ativos, retorna os dados para o front.
                        - Caso contrário, o valor da variável ativo é false por padrão e retorna um erro de "CPF não encontrado" ao front.
          
                */
                let ativo = false, dadosCliente
                for (let i = 0; i < codCliente.length; i++) {
                    const clientRes = await fetch(`https://sac.newlifefibra.com.br//mk/WSMKContratosPorCliente.rule?sys=MK0&token=${token}&cd_cliente=${codCliente[i]}`);
                    const clientData = await clientRes.json();

                    if (clientData.ContratosAtivos.length > 0) {
                        let fullName = clientData.Nome;
                        let nomes = fullName.split(' ');
                        let nome = nomes[0].toUpperCase();

                        dadosCliente = nome;
                        ativo = true
                    }
                }
                if (ativo) {
                    return message(form, dadosCliente);
                } else {
                    return message(form, `CPF não encontrado em nossa base de dados.`, {
                        status: 400
                    });
                }

            } else {
                return message(form, `${error === "missing-input-response" ? "Realize a verificação abaixo ou aguarde a mensagem de 'Sucesso'." : "Formulário já enviado!"}`, {
                    status: 400
                });
            }


        } else {
            return fail(400, {
                form
            })
        }

    }
}
