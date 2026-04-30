import { fetchTokenWsMk } from "$lib/core/models/fetch.js";
import { json } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";

async function fetchContrato(event, token, cd_cliente) {
  const res = await event.fetch(
    `https://sac.newlifefibra.com.br/mk/WSMKContratosPorClienteV2.rule?sys=MK0&token=${token}&cd_cliente=${cd_cliente}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  return data;
}

async function fetchConexoes(event, token, cd_cliente) {
  const res = await event.fetch(
    `https://sac.newlifefibra.com.br/mk/WSMKConexoesPorCliente.rule?sys=MK0&token=${token}&cd_cliente=${cd_cliente}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  return data;
}

export async function GET(event) {
  // const token = event.url.searchParams.get('token')
  const doc = event.url.searchParams.get("doc");
  const key = event.url.searchParams.get("key");

  const docTratado = doc.replace(/\s|\t|\n|\r|\.|\-/g, "");

  // const fetchTokenWsMk = async () => {
  // 	const res = await event.fetch(`https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=39307853c053664&cd_servico=9999`, {
  // 		method: "GET"
  // 	});

  // 	const data = await res.json();

  // 	return data.Token;
  // }

  const token = await fetchTokenWsMk(event);

  /*
	OBJETO FINAL

	{
      tipo: "",
      cadastros: [
        {
          codCliente: "",
          nome: "",
          endereco: "",
        },
        {
          codCliente: "",
          nome: "",
          endereco: "",
        },
        {
          codCliente: "",
          nome: "",
          endereco: "",
        },
      ],
    },
 
  */

  let cadastros = [
      {
        tipo: "Lead",
        cadastros: [],
      },
    ],
    placeholder = [
      {
        codCliente: "",
        nome: "",
        endereco: "",
      },
      {
        codCliente: "",
        nome: "",
        endereco: "",
      },
      {
        codCliente: "",
        nome: "",
        endereco: "",
      },
    ];

  if (!key) throw error(401, "Consulta não autorizada");
  if (key != "dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0")
    throw error(401, "Consulta não autorizada, parâmetro key incorreto!");

  const fetchCadastro = async () => {
    const res = await event.fetch(
      `https://sac.newlifefibra.com.br/mk/WSMKConsultaDoc.rule?sys=MK0&token=${token}&doc=${docTratado}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  };

  const dadosCadastros = await fetchCadastro();

  if (dadosCadastros.status === "OK") {
    if (dadosCadastros.Situacao === "Ativo") {
      const conexoes = await fetchConexoes(
        event,
        token,
        dadosCadastros.CodigoPessoa
      );
      if (conexoes.status === "OK") {
        if (conexoes.Conexoes.length > 0) {
          cadastros[0].tipo = "Cliente";
          cadastros[0].cadastros.push({
            codCliente: dadosCadastros.CodigoPessoa,
            endereco: dadosCadastros.Endereco,
            nome: dadosCadastros.Nome,
          });
        }
      }
    }

    if (dadosCadastros.Outros.length > 0) {
      for (let [index, cadastro] of dadosCadastros.Outros.entries()) {
        const conexoes = await fetchConexoes(
          event,
          token,
          cadastro.CodigoPessoa
        );

        if (conexoes.status === "OK") {
          if (conexoes.Conexoes.length > 0) {
            cadastros[0].tipo = "Cliente";
            cadastros[0].cadastros.push({
              codCliente: cadastro.CodigoPessoa,
              endereco: cadastro.Endereco,
              nome: cadastro.Nome,
            });
          }
        }
        if (cadastros[0].cadastros.length == 3 || index == 10) {
          break;
        }
      }
    }
  } else if (dadosCadastros.status != "ERRO")
    throw error(401, "Consulta não autorizada");
  // o else considera que se for erro, é pq documento não existe, caso contrário, throw erro pra quebrar o fluxo e encaminhar para equipe no octa

  let concatenaCadastros = cadastros[0].cadastros.concat(placeholder);
  cadastros[0].cadastros = concatenaCadastros;

  return json(cadastros[0]);
}
