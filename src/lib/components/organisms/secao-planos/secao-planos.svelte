<script>
  import BotaoLink from "$lib/components/atoms/botao/--link/botao--link.svelte";
  import CardProdutoImpactante from "$lib/components/molecules/card-produto/--impactante/card-produto--impactante.svelte";
  import { page } from "$app/state";
  import { fetchPlanosMensais } from "$lib/core/models/fetch";
  import CardProdutoPlaceholderImpactante from "$lib/components/molecules/card-produto/--placeholder-impactante/card-produto--placeholder-impactante.svelte";

  const googleAds = $derived.by(
    () => page.url.searchParams.get("utm_source") || null
  );

  const planos = [
    {
      eDestaque: true,
      titulo: "2000 MEGA!",
      descricao: "Ideal para jogos online e uso pesado!",
      valor: "300,00",
    },
    {
      eDestaque: false,
      titulo: "200 MEGA!",
      descricao: "Ideal para streaming e para grandes famílias!",
    valor: "150,00"
    },
    {
      eDestaque: false,
      titulo: "300 MEGA!",
      descricao: "Ideal para home office!",
      valor: "125,00"
    },
  ]
</script>

<div
  class="flex w-full max-w-[80rem] border-preto/60 border-2 flex-col items-center gap-[100px] pt-[90px] pb-[60px] max-lg:px-5 lg:px-[60px] bg-branco bg-cover bg-center bg-no-repeat shadow-container rounded-[10px]"
>
    <div
      class="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[80px]"
    >
      {#each planos as plano}
        <CardProdutoImpactante
            {googleAds}
            {...plano}
        />
      {/each}
    </div>
  <BotaoLink
    eDestaque={true}
    novaGuia={true}
    href="/planos"
    titulo="Planos e promoções"
  />
</div>
