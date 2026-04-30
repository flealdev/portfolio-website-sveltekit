import { z } from 'zod'

const schemaFormAvalia = z.object({
    nome: z.string().regex(/^[A-Za-záàâãäéèêëíïóôõöüúçñÁÀÂÃÄÉÈËÍÏÓÔÕÖÚÜÇÑ\s]{0,}$/g, {
        message: "Nome inválido! Insira somente letras."
    }).optional(),
    telefone: z.string().regex(/(?:^\(?[0]?[1-9]{2}\)?[\.\-\s]?|^[0]?[1-9]{2}[\.\-\s]?)[9]?[1-9]\d{3}[\.\-\s]?\d{4}$/g, {
        message: "Número inválido! Inclua o DDD, com ou sem parênteses."
    }).optional(),
    nota: z.number().min(1, {
        message: "Defina uma nota de 1 a 10."
    }).max(10, {
        message: "Nota inválida! Classifique de 1 a 10."
    }),
    relato: z.string().min(1).max(1000, {
        message: "Relato muito longo! Máximo de 1000 caracteres."
    }),
    pagina: z.any(),
    "cf-turnstile-response": z.any()
})

const schemaFormConsultaBase = z.object({
    cpf: z.string().regex(/\d{3}\d{3}\d{3}\d{2}/g, {
        message: "CPF inválido! Insira somente números, sem pontuação."
    }),
    "cf-turnstile-response": z.any()
})

export {
    schemaFormAvalia,
    schemaFormConsultaBase
}