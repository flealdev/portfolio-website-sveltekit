<script>
  import PlaceholderItemInformativo from "$lib/components/atoms/placeholder-item-informativo/placeholder-item-informativo.svelte";
  import ResultadoPesquisa from "./__resultado/pesquisa__resultado.svelte";

  const {
    classes = "",
    classesLabel = "",
    classesInput = "",
    classesResultados = "",
  } = $props();

  // Implementação de GraphQL com paginação por cursor e bloco await na marcação
  let termos = $state(""),
    categoria = $state("");
  // variáveis para pesquisa de POSTS
  let postVariables = `
            "first": 3,
            "after": null,
            "last": null,
            "before": null
        `;

  const pesquisa = async (termos, categoria, variables) => {
    const query = `
            query Pesquisa($after: String = "", $before: String = "", $first: Int = 10, $last: Int = 10, $search: String = "", $categoria: String = "") {
                posts(
                    where: {search: $search, categoryName: $categoria}
                    after: $after
                    before: $before
                    first: $first
                    last: $last
                ) {
                    nodes {
                        excerpt(format: RENDERED)
                        title(format: RENDERED)
                        slug
                    }
                    pageInfo {
                        hasNextPage
                        hasPreviousPage
                        startCursor
                        endCursor
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
        variables: `{
                    "search": "${termos}",
                    "categoria": "${categoria}",
                    ${variables}
                }`,
      }),
    });

    const data = await res.json();

    return data;
  };

  // Paginação de posts
  function homePagePost() {
    postVariables = `
            "first": 3,
            "after": null,
            "last": null,
            "before": null
        `;
  }
  function previousPagePost(startCursor) {
    postVariables = `
            "first": null,
            "after": null,
            "last": 3,
            "before": "${startCursor}"
        `;
  }
  function nextPagePost(endCursor) {
    postVariables = `
            "first": 3,
            "after": "${endCursor}",
            "last": null,
            "before": null
        `;
  }

  function focaPainel() {
    const painel = document.getElementById("painel");

    painel.checked = true;
  }

  function fechaPainel() {
    const painel = document.getElementById("painel");

    painel.checked = false;
  }

  function limpaTermos() {
    termos = "";
    fechaPainel();
  }
  function limpaCategoria() {
    categoria = "";
    fechaPainel();
  }
  function avisoFiltro() {
    if (categoria != "") {
      alert(
        "Limpe o filtro de categoria antes de realizar uma busca por termos!"
      );
    }
  }

  $effect(() => {
    if (categoria != "") {
      termos = "";
    } else if (termos != "") {
      categoria = "";
    }
  });
  let getPosts = $derived(pesquisa(termos, categoria, postVariables));
</script>

<div
  class="relative w-full 2xl:max-w-[80%] flex flex-wrap justify-center gap-5 mt-5 {classes}"
>
  <input
    type="checkbox"
    name="painel"
    id="painel"
    class="peer hidden order-2"
  />
  <button
    for="painel"
    class="cursor-pointer hidden peer-checked:flex p-2 order-4 rounded-lg border-2 border-vermelho dark:border-principal-segunda text-vermelho nlf-paragrafo dark:text-principal-segunda"
    onclick={fechaPainel}
  >
    Fechar painel
  </button>

  <!-- campos -->
  <fieldset
    id="camposPesquisa"
    class="flex flex-wrap w-full justify-center items-end max-md:gap-3 md:gap-5 order-3 nlf-paragrafo"
  >
    <label class="flex flex-col gap-1 max-md:w-full md:w-[40%]">
      <span
        class="text-principal-primeira dark:text-branco flex justify-between {classesLabel}"
      >
        Pesquise
        <span>
          {#if termos != ""}
            <button
              onclick={limpaTermos}
              class="nlf-nota-rodape rounded-md text-vermelho dark:text-principal-segunda w-max"
              >limpar</button
            >
          {/if}
        </span>
      </span>
      <input
        id="pesquisa"
        type="text"
        placeholder="Digite qualquer termo"
        name="pesquisa"
        class="w-full nlf-paragrafo peer rounded-md border-2 border-principal-primeira dark:border-principal-terceira text-preto focus:ring-0 {classesInput}"
        bind:value={termos}
        onkeypress={avisoFiltro}
        onfocus={focaPainel}
      />
    </label>
    <!-- <p class="nlf-enfase text-principal-primeira dark:text-branco">OU</p> -->
    <label class="flex flex-col gap-1 max-md:w-full md:w-[40%]">
      <span
        class="text-principal-primeira dark:text-branco flex justify-between"
      >
        Ou filtre por categoria
        <span>
          {#if categoria != ""}
            <button
              onclick={limpaCategoria}
              class="nlf-nota-rodape rounded-md text-vermelho dark:text-principal-segunda w-max"
              >limpar</button
            >
          {/if}
        </span>
      </span>
      <select
        class="flex w-full gap-5 nlf-paragrafo rounded-md border-principal-primeira dark:border-principal-terceira border-2 text-preto"
        bind:value={categoria}
        onfocus={focaPainel}
      >
        <option value="" disabled>Selecione</option>
        <option>New Tech</option>
        <option>Ações Sociais</option>
        <option>Colaboradores</option>
        <option>Empresa</option>
        <option>Equipe</option>
        <option>Eventos</option>
        <option>Reconhecimento Profissional</option>
        <option>Treinamentos</option>
        <option>Vagas</option>
      </select>
    </label>
  </fieldset>
  <!-- painel -->
  <div
    class="absolute z-1000 w-full left-0 flex h-0 top-full flex-col items-center gap-5 overflow-auto rounded-lg border-principal-primeira dark:border-principal-terceira px-5 bg-branco dark:bg-dark transition-all duration-500 peer-checked:h-max peer-checked:border-b-[0.5rem] border-r border-l peer-checked:py-10 shadow-[0_20px_10px_rgba(22,57,203,0.1)] nlf-paragrafo {classesResultados}"
  >
    <div
      class="flex flex-col gap-5 md:p-10 md:border-principal-segunda dark:md:border-principal-terceira md:rounded-xl md:border-2 items-center justify-center max-w-160 w-full"
    >
      {#if termos === "" && categoria === ""}
        <p class="dark:text-branco">
          Digite algum termo ou selecione uma categoria na lista acima.
        </p>
      {:else}
        {#await getPosts}
          <div class="flex flex-col gap-2">
            <PlaceholderItemInformativo />
            <PlaceholderItemInformativo />
            <PlaceholderItemInformativo />
          </div>
        {:then res}
          {#if res.data.posts.nodes.length > 0}
            <div class="flex flex-col gap-2">
              {#each res.data.posts.nodes as post}
                <ResultadoPesquisa
                  titulo={post.title}
                  descricao={post.excerpt}
                  url={"/blog/" + post.slug}
                />
              {/each}
            </div>

            <div
              class="nlf-container nlf-container-filho flex max-md:flex-col max-md:gap-3 md:justify-between"
            >
              {#if !res.data.posts.pageInfo.hasPreviousPage}
                <button
                  class="nlf-botao-paginacao nlf-botao-paginacao__desabilitado"
                  >{"<<"}</button
                >
              {/if}
              {#if res.data.posts.pageInfo.hasPreviousPage}
                <button
                  onclick={previousPagePost(
                    res.data.posts.pageInfo.startCursor
                  )}
                  class="nlf-botao-paginacao nlf-botao-paginacao__habilitado"
                  >{"<<"}</button
                >
                <button
                  onclick={homePagePost}
                  class="nlf-botao-paginacao nlf-botao-paginacao__habilitado"
                >
                  Início
                </button>
              {/if}
              {#if !res.data.posts.pageInfo.hasNextPage}
                <button
                  class="nlf-botao-paginacao nlf-botao-paginacao__desabilitado"
                  >{">>"}
                </button>
              {/if}
              {#if res.data.posts.pageInfo.hasNextPage}
                <button
                  onclick={nextPagePost(res.data.posts.pageInfo.endCursor)}
                  class="nlf-botao-paginacao nlf-botao-paginacao__habilitado"
                  >{">>"}</button
                >
              {/if}
            </div>
          {:else}
            <p class="text-branco">
              <span
                class="font-bold text-vermelho dark:text-principal-segunda text-center"
                >Não encontramos resultados para a sua busca.</span
              ><br />Utilize outros termos ou busque por categoria.
            </p>
          {/if}
        {/await}
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  /* webchat insere mb de forma global, isso corrige */
  #camposPesquisa input[type="text"] {
    @apply mb-0;
  }
</style>
