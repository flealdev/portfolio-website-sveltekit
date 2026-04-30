<script>
  import BotaoLink from "$lib/components/atoms/botao/--link/botao--link.svelte";
  import CardProdutoImpactante from "$lib/components/molecules/card-produto/--impactante/card-produto--impactante.svelte";
  import { page } from "$app/state";
  import { fetchPlanosMensais } from "$lib/core/models/fetch";
  import CardProdutoPlaceholderImpactante from "$lib/components/molecules/card-produto/--placeholder-impactante/card-produto--placeholder-impactante.svelte";

  const googleAds = $derived.by(
    () => page.url.searchParams.get("utm_source") || null
  );
</script>

<div
  class="flex w-full max-w-[80rem] flex-col items-center gap-[100px] pt-[90px] pb-[60px] max-lg:px-5 lg:px-[60px] bg-[url(/assets/25anos/parabolic-pentagon-w600.webp)] bg-cover bg-center bg-no-repeat shadow-container rounded-[10px]"
>
  {#await fetchPlanosMensais()}
    <div
      class="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[80px]"
    >
      <CardProdutoPlaceholderImpactante/>
      <CardProdutoPlaceholderImpactante/>
      <CardProdutoPlaceholderImpactante/>
    </div>
  {:then res}
    <div
      class="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[80px]"
    >
      {#each res as plano}
        <CardProdutoImpactante
          eDestaque={plano.destaque}
          titulo={`${plano.velocidade} MEGA!`}
          descricao={plano.descricao}
          valor={plano.preco}
          mensagem={`Olá! Vim do ${googleAds ? "Google Ads" : "site"} e gostaria de atendimento comercial, plano de ${plano.velocidade} MEGA. [NÃO EXCLUA]`}
        />
      {/each}
    </div>
  {/await}
  <BotaoLink
    eDestaque={true}
    novaGuia={true}
    href="/planos"
    titulo="Planos e promoções"
  />
</div>
