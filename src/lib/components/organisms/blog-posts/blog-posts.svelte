<script>
  import CardBlogDetalhado from "$lib/components/molecules/card-blog/--detalhado/card-blog--detalhado.svelte";
  import AvisoErroCarregamento from "$lib/components/atoms/aviso-erro-carregamento/aviso-erro-carregamento.svelte";
  import PlaceholderCardBlogDetalhado from "$lib/components/molecules/card-blog/--placeholder-detalhado/card-blog--placeholder-detalhado.svelte";
  import { fetchPostsApiWordpress } from "$lib/core/models/fetch";

  // Implementação de GraphQL com paginação por cursor e bloco await na marcação
  let variables = $state(`{
        "first": 6,
        "after": null,
        "last": null,
        "before": null
    }`);
  //   const res = await fetchPostsApiWordpress(variables, query, endpointApi);
  //   return res
  // };

  function homePage() {
    document.getElementById("posts").scrollIntoView();
    variables = `{
            "first": 6,
            "after": null,
            "last": null,
            "before": null
        }`;
  }
  function previousPage(startCursor) {
    document.getElementById("posts").scrollIntoView();
    variables = `{
            "first": null,
            "after": null,
            "last": 6,
            "before": "${startCursor}"
        }`;
  }
  function nextPage(endCursor) {
    document.getElementById("posts").scrollIntoView();
    variables = `{
            "first": 6,
            "after": "${endCursor}",
            "last": null,
            "before": null
        }`;
  }
</script>

{#await fetchPostsApiWordpress(variables)}
  <div
    class="flex flex-wrap max-2xl:justify-around 2xl:justify-center items-start gap-10"
  >
    <PlaceholderCardBlogDetalhado />
    <PlaceholderCardBlogDetalhado />
    <PlaceholderCardBlogDetalhado />
    <PlaceholderCardBlogDetalhado />
    <PlaceholderCardBlogDetalhado />
    <PlaceholderCardBlogDetalhado />
  </div>
{:then res}
  <div
    class="flex flex-wrap max-2xl:justify-around 2xl:justify-center items-start max-xl:gap-10 xl:gap-x-20 xl:gap-y-10"
  >
    {#each res.data.posts.nodes as post, i}
      <CardBlogDetalhado
        data={post.date}
        imgDestaque={post.featuredImage && post.featuredImage.node.hasOwnProperty("guid")
          ? post.featuredImage.node.guid
          : ""}
        etiqueta={post.terms.nodes.length > 0 ? post.terms.nodes[0].name : ""}
        titulo={post.title}
        conteudo={post.excerpt}
        href="/blog/{post.slug}"
      />
    {/each}
  </div>
  <div class="w-full flex flex-col gap-3 items-center justify-center">
    <div class="w-full flex max-md:flex-wrap gap-1 justify-around">
      {#if !res.data.posts.pageInfo.hasPreviousPage}
        <button
          class="nlf-botao-compacto text-branco bg-principal-primeira/20"
          >{"<<"}</button
        >
      {/if}
      {#if res.data.posts.pageInfo.hasPreviousPage}
        <button
          onclick={() => previousPage(res.data.posts.pageInfo.startCursor)}
          class="nlf-botao-compacto nlf-botao--azul"
          >{"<<"}</button
        >
      {/if}
      {#if !res.data.posts.pageInfo.hasNextPage}
        <button
          class="nlf-botao-compacto text-branco bg-principal-primeira/20"
          >{">>"}</button
        >
      {/if}
      {#if res.data.posts.pageInfo.hasNextPage}
        <button
          onclick={() => nextPage(res.data.posts.pageInfo.endCursor)}
          class="nlf-botao-compacto nlf-botao--azul"
          >{">>"}</button
        >
      {/if}
    </div>
    {#if res.data.posts.pageInfo.hasPreviousPage}
      <button
        onclick={() => homePage()}
        class="nlf-botao md:nlf-botao nlf-botao--azul"
      >
        Início
      </button>
    {/if}
  </div>
{:catch}
  <AvisoErroCarregamento />
{/await}
