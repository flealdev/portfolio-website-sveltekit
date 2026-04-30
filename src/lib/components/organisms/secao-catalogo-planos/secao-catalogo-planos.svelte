<script>
  import IndicadorScroll from "$lib/components/atoms/indicador-scroll/indicador-scroll.svelte";
  import CardProdutoDetalhado from "$lib/components/molecules/card-produto/--detalhado/card-produto--detalhado.svelte";
  import PlaceholderCardPlanoDetalhado from "$lib/components/molecules/card-produto/--placeholder-detalhado/card-produto--placeholder-detalhado.svelte";
  import AvisoErroCarregamento from "$lib/components/atoms/aviso-erro-carregamento/aviso-erro-carregamento.svelte";
  import { fetchPlanosMensais } from "$lib/core/models/fetch";

  const { formData = {}, precoMedianteConsulta = false } = $props();
</script>

{#await fetchPlanosMensais()}
  <div
    class="flex flex-wrap gap-10 justify-center items-center max-2xl:px-5 pb-5 pt-5"
  >
    <PlaceholderCardPlanoDetalhado />
    <PlaceholderCardPlanoDetalhado />
    <PlaceholderCardPlanoDetalhado />
  </div>
{:then res}
  <div
    class="flex flex-wrap gap-10 justify-center items-center max-2xl:px-5 pb-5 pt-5"
  >
    {#each res as plano}
      <CardProdutoDetalhado
        plano={`${plano.velocidade} MEGA!`}
        icones={plano.icones}
        velocidade={plano.velocidade}
        beneficios={plano.beneficios}
        descricao={plano.descricao}
        preco={plano.preco}
        destaque={plano.destaque}
        {formData}
      />
    {/each}
  </div>
{:catch}
  <AvisoErroCarregamento />
{/await}
