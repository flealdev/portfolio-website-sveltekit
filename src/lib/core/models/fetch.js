async function fetchTokenWsMk(event) {
  const res = await event.fetch(
    `https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=39307853c053664&cd_servico=9999`,
    {
      method: "GET",
    },
  );

  const data = await res.json();

  return data.Token;
}

async function fetchPostsApiWordpress(variables) {
  const endpoint = "https://cms.newlifefibra.com.br/graphql";
  const query = `
                query Ultimos4Posts($after: String = "", $before: String = "", $first: Int = 10, $last: Int = 10) {
                    posts(after: $after, before: $before, first: $first, last: $last) {
                    nodes {
                        date
                        content(format: RENDERED)
                        excerpt(format: RENDERED)
                        featuredImage {
                        node {
                            guid
                        }
                        }
                        terms {
                        nodes {
                            ... on Category {
                            name
                            }
                        }
                        }
                        title(format: RENDERED)
                        slug
                        tags {
                        edges {
                            node {
                            name
                            }
                        }
                        }
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                        hasPreviousPage
                        startCursor
                    }
                    }
                }
            `;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await res.json();

  return data;
}
async function fetchUltimos3PostsApiWordpress() {
  const res = await fetch(
    `https://cms.newlifefibra.com.br/graphql?queryId=28bdd8bba1b7753d4f774c7f698f83bb69864bfadfc7ff539c26031b1c6a533a`,
    {
      method: "GET",
    },
  );

  const data = await res.json();

  return data;
}
async function fetchPlanosSimplificadosApiWordpress() {
  const res = await fetch(
    `https://cms.newlifefibra.com.br/graphql?queryId=e31ab2d88e7c74247febbe2deb4ebfc90ab0468fc62d17d7a326a514d754360c`,
    {
      method: "GET",
    },
  );

  const data = await res.json();

  return data;
}
async function fetchCatalogoPlanosApiWordpress() {
  const res = await fetch(
    `https://cms.newlifefibra.com.br/graphql?queryId=75f24df5ca38bf71a4787980efeeefb5f2e5a5950abefe4c9f7023b4a9512740`,
    {
      method: "GET",
    },
  );

  const data = await res.json();

  return data;
}
async function fetchPlanosMensais() {
  const res = await fetch(
    `https://cms.newlifefibra.com.br/graphql?queryId=planos-mensais`,
    {
      method: "GET",
    },
  );

  const data = await res.json();

  const planos = [
    {
      velocidade: data.data.planosmensais.nodes[0].velocidade,
      descricao: data.data.planosmensais.nodes[0].descricao,
      beneficios: data.data.planosmensais.nodes[0].beneficios,
      preco: data.data.planosmensais.nodes[0].preco,
      icones: data.data.planosmensais.nodes[0].icones?.nodes,
      destaque: data.data.planosmensais.nodes[0].destaque,
    },
    {
      velocidade: data.data.planosmensais.nodes[0].velocidadep2,
      descricao: data.data.planosmensais.nodes[0].descricaop2,
      beneficios: data.data.planosmensais.nodes[0].beneficiosp2,
      preco: data.data.planosmensais.nodes[0].precop2,
      icones: data.data.planosmensais.nodes[0].iconesp2?.nodes,
      destaque: data.data.planosmensais.nodes[0].destaquep2,
    },
    {
      velocidade: data.data.planosmensais.nodes[0].velocidadep3,
      descricao: data.data.planosmensais.nodes[0].descricaop3,
      beneficios: data.data.planosmensais.nodes[0].beneficiosp3,
      preco: data.data.planosmensais.nodes[0].precop3,
      icones: data.data.planosmensais.nodes[0].iconesp3?.nodes,
      destaque: data.data.planosmensais.nodes[0].destaquep3,
    },
  ];

  return planos;
}
async function fetchNotifParada() {
  try {
    const res = await fetch(
      "https://sac.newlifefibra.com.br/mk/WSAutenticacao.rule?sys=MK0&token=004e1e43eeabb77526992637db07635a&password=39307853c053664&cd_servico=9999",
    );

    const getToken = await res.json();

    const token = getToken.Token;

    const resFetchNotifParada = await fetch(
      `https://sac.newlifefibra.com.br/core-api/notificacoes/status?token=${token}&status=A`,
    );

    const data = await resFetchNotifParada.json();

    let notificacoes;
    if (data.length == 0) {
      return data;
    } else {
      notificacoes = data.filter(
        (el, i) => data.findIndex((item) => item.cod === el.cod) === i,
      );
      const notificacoesOrdenadas = notificacoes.sort((a, b) => {
        const dataInicioA = new Date(a.data_inicio);
        const dataInicioB = new Date(b.data_inicio);

        // ordem decrescente (mais novo primeiro)
        if (dataInicioA < dataInicioB) {
          return 1;
        } else if (dataInicioA > dataInicioB) {
          return -1;
        }

        // datas iguais
        return 0;
      });
      return notificacoesOrdenadas;
    }
  } catch (error) {
    return [
      {
        erro: "<b style='color:red'>Erro ao consultar os dados do sistema</b><br>Tente novamente mais tarde!",
      },
    ];
  }
}
async function fetchBannersDoMes() {
  const res = await fetch(
    `https://cms.newlifefibra.com.br/graphql?queryId=banners-do-mes`,
    {
      method: "GET",
    },
  );

  const data = await res.json();

  return data;
}
async function fetchPostSingleBlogApiWordpress(slug) {
  const query = `
          query ($slug: String = "") {
              postBy(slug: $slug) {
              date
              author {
                  node {
                  avatar {
                      url
                      size
                  }
                  name
                  }
              }
              content(format: RENDERED)
              tags {
                edges {
                  node {
                    name
                  }
                }
              }
              galeria(first: 100) {
                nodes {
                  guid
                  sourceUrl(size: MEDIUM)
                }
              }
            }
          }
      `;

  const res = await fetch(`https://cms.newlifefibra.com.br/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        slug: `${slug}`,
      },
    }),
  });

  return await res.json();
}
async function fetchMetatagsSingleBlogApiWordpress(event) {
  const query = `
          query ($slug: String = "") {
              postBy(slug: $slug) {
              excerpt(format: RENDERED)
              title(format: RENDERED)
              ogImagePaisagem {
                node {
                  guid
                }
              }
              ogImageQuadrado {
                node {
                  guid
                }
              }
              
              }
          }
      `;

  const res = await event.fetch(`https://cms.newlifefibra.com.br/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        slug: `${event.params.slug}`,
      },
    }),
  });

  return await res.json();
}
async function fetchMetatagsPagePrivacidadeApiWordpress() {
  const query = `
          query ($pageId: Int = 10) {
                pageBy(pageId: $pageId) {
                    content(format: RENDERED)
                }
            }
      `;

  const res = await fetch(`https://cms.newlifefibra.com.br/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        pageId: 4572,
      },
    }),
  });

  return await res.json();
}
async function fetchPagePrivacidadeApiWordpress(event) {
  const query = `
          query ($pageId: Int = 10) {
                pageBy(pageId: $pageId) {
                    title(format: RENDERED)
                    content(format: RENDERED)
                    excerpt(format: RENDERED)
                }
            }
      `;

  const res = await event.fetch(`https://cms.newlifefibra.com.br/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        pageId: 4572,
      },
    }),
  });

  return await res.json();
}
async function fetchIncidentesApiWordpress() {
  const query = `
        query{
          incidentes(where: {status: PUBLISH}, first: 5) {
              nodes {
                  descricao(format: RENDERED)
                  href(format: RENDERED)
                  title(format: RENDERED)
                  cidade(format: RENDERED)
                  date
                  previsao(format: RENDERED)
                  situacao(format: RENDERED)
                  sintomas(format: RENDERED)
              }
          }
      }
    `;

  const res = await fetch(`https://cms.newlifefibra.com.br/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const data = await res.json();

  // const incidentesValidos =

  return data.data.incidentes.nodes.filter(
    (incidente) => incidente.situacao != "Solucionado",
  );
}

export {
  fetchPostsApiWordpress,
  fetchUltimos3PostsApiWordpress,
  fetchPlanosSimplificadosApiWordpress,
  fetchCatalogoPlanosApiWordpress,
  fetchIncidentesApiWordpress,
  fetchPostSingleBlogApiWordpress,
  fetchMetatagsSingleBlogApiWordpress,
  fetchPagePrivacidadeApiWordpress,
  fetchMetatagsPagePrivacidadeApiWordpress,
  fetchTokenWsMk,
  fetchBannersDoMes,
  fetchPlanosMensais,
  fetchNotifParada,
};
