import { fetchTokenWsMk } from "$lib/core/models/fetch.js";
import { retornaDataUnix } from "$lib/core/utils.js";
import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

export async function GET(event) {
  const cd_cliente = event.url.searchParams.get("cd_cliente");
  const key = event.url.searchParams.get("key");

  const token = await fetchTokenWsMk(event);

  let faturas = [],
    placeholder = [
      {
        codFatura: "",
        descricao: "",
        linkDownload: "",
        pixCopiaeCola: "",
        valor: "",
        vencimento: "",
      },
      {
        codFatura: "",

        descricao: "",
        linkDownload: "",
        pixCopiaeCola: "",
        valor: "",
        vencimento: "",
      },
      {
        codFatura: "",
        descricao: "",
        linkDownload: "",
        pixCopiaeCola: "",
        valor: "",
        vencimento: "",
      },
    ];

  // tratamento de erros caso a chave de acesso esteja errado ou em branco
  if (!key) throw error(401, "Consulta não autorizada");
  if (key != "dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0")
    throw error(401, "Consulta não autorizada, parâmetro key incorreto!");

  // consulta faturas pendentes
  const fetchFaturas = async () => {
    const res = await event.fetch(
      `https://sac.newlifefibra.com.br/mk/WSMKFaturasPendentes.rule?sys=MK0&token=${token}&cd_cliente=${cd_cliente}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  };

  const faturasPendentes = await fetchFaturas();

  // 	tratamento de erros caso tenha problema com o retorno da api, como token de autenticação inválido
  if (faturasPendentes.status === "OK") {
    const hoje = new Date();
    const mesPassado = new Date();
    const anoPassado = new Date();

    if (hoje.getMonth() > 0 && hoje.getMonth() <= 11) {
      mesPassado.setMonth(hoje.getMonth() - 1);
    } else mesPassado.setMonth(11);
    anoPassado.setYear(hoje.getFullYear() - 1);

    // iteração em todas as faturas pendentes
    for (const el of faturasPendentes.FaturasPendentes) {
      const dataUnix = retornaDataUnix(el.data_vencimento);

      // pega todas as faturas pendentes: do ano passado, desse ano e de meses anteriores e deste ano e mês antes de hoje
      if (
        dataUnix.getFullYear() === anoPassado.getFullYear() ||
        (dataUnix.getMonth() < hoje.getMonth() &&
          dataUnix.getFullYear() === hoje.getFullYear()) ||
        (dataUnix.getMonth() === hoje.getMonth() &&
          dataUnix.getFullYear() === hoje.getFullYear() &&
          dataUnix.getDate() < hoje.getDate())
      ) {
        // percorre todo o array de faturas e a cada iteração consulta a segunda via da fatura, pegando o link do boleto, valor e vencimento
        const fetchSegundaViaBoleto = async () => {
          const res = await event.fetch(
            `https://sac.newlifefibra.com.br/mk/WSMKSegundaViaCobranca.rule?sys=MK0&token=${token}&cd_fatura=${el.codfatura}`,
            {
              method: "GET",
            }
          );

          const data = await res.json();

          return data;
        };


        const fetchCodigoPix = async () => {
          const res = await event.fetch(
            `https://sac.newlifefibra.com.br/mk/WSMKRetornarCopieColaPix.rule?sys=MK0&token=${token}&CodigoFatura=${el.codfatura}`,
            {
              method: "GET",
            }
          );

          const data = await res.json();

          return data;
        };

        const { PathDownload, Valor, Vcto } = await fetchSegundaViaBoleto();
        const { texto_qrcode } = await fetchCodigoPix();

        // adiciona as faturas filtradas no array faturas já com todos os dados
        faturas.push({
          codFatura: el.codfatura,
          descricao: el.descricao,
          linkDownload: PathDownload,
          pixCopiaeCola: texto_qrcode ?? "",
          valor: Valor,
          vencimento: Vcto,
        });
      }
    }

    if (faturas.length === 0) {
      for (const el of faturasPendentes.FaturasPendentes) {
        const dataUnix = retornaDataUnix(el.data_vencimento);

        if (
          dataUnix.getMonth() === hoje.getMonth() &&
          dataUnix.getFullYear() === hoje.getFullYear() &&
          dataUnix.getDate() >= hoje.getDate()
        ) {
          // percorre todo o array de faturas e a cada iteração consulta a segunda via da fatura, pegando o link do boleto, valor e vencimento
          const fetchSegundaViaBoleto = async () => {
            const res = await event.fetch(
              `https://sac.newlifefibra.com.br/mk/WSMKSegundaViaCobranca.rule?sys=MK0&token=${token}&cd_fatura=${el.codfatura}`,
              {
                method: "GET",
              }
            );

            const data = await res.json();

            return data;
          };

          const fetchCodigoPix = async () => {
            const res = await event.fetch(
              `https://sac.newlifefibra.com.br/mk/WSMKRetornarCopieColaPix.rule?sys=MK0&token=${token}&CodigoFatura=${el.codfatura}`,
              {
                method: "GET",
              }
            );

            const data = await res.json();

            return data;
          };

          const { PathDownload, Valor, Vcto } = await fetchSegundaViaBoleto();
          const { texto_qrcode } = await fetchCodigoPix();

          // adiciona as faturas filtradas no array faturas já com todos os dados
          faturas.push({
            codFatura: el.codfatura,
            descricao: el.descricao,
            linkDownload: PathDownload,
            pixCopiaeCola: texto_qrcode ?? "",
            valor: Valor,
            vencimento: Vcto,
          });
        }
      }
    }
  } else throw error(401, "Consulta não autorizada");

  const faturasConcat = faturas.concat(placeholder);

  return json(faturasConcat);
}
