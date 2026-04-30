<script>
  import AvisoErroCarregamento from "$lib/components/atoms/aviso-erro-carregamento/aviso-erro-carregamento.svelte";
  import CardProdutoInformativo from "$lib/components/molecules/card-produto/--informativo/card-produto--informativo.svelte";
  import CardProdutoPlaceholderInformativo from "$lib/components/molecules/card-produto/--placeholder-informativo/card-produto--placeholder-informativo.svelte";
  import { fetchPlanosSimplificadosApiWordpress } from "$lib/core/models/fetch";
</script>

{#await fetchPlanosSimplificadosApiWordpress()}
  <div class="flex flex-wrap justify-center items-center gap-10 w-full">
    <CardProdutoPlaceholderInformativo />
    <CardProdutoPlaceholderInformativo />
    <CardProdutoPlaceholderInformativo />
  </div>
{:then res}
  <div class="flex flex-wrap justify-center items-center w-full gap-10">
    {#each res.data.planos.nodes as plano}
      {#if plano.exibicao.includes("simplificada")}
        <CardProdutoInformativo
          plano={plano.title}
          etiqueta={plano.melhorpara}
          icones={plano.icones.nodes ?? ""}
          destaque={plano.destaque}
        />
      {/if}
    {/each}
  </div>
{:catch}
  <AvisoErroCarregamento />
{/await}
