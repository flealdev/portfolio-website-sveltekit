<script>
  import BotaoWpp from "$lib/components/atoms/botao/--wpp/botao--wpp.svelte";

  let { promo = [{ imgSrc: "", mensagem: ""}]} = $props();
</script>

<div class="w-full flex flex-col gap-5">
  <div class="flex flex-col gap-[5px] px-5 w-full">
    <h2 class="nlf-titulo-h2 text-azul-3">Promoções</h2>
    <p class="nlf-paragrafo">De bairro em bairro ou campanhas relâmpago: fique por dentro para garantir o melhor preço!</p>
  </div>
  <div class="flex items-center gap-[10px] overflow-scroll pb-5 px-5 w-full">
    {#each promo as el}
    <div class="flex flex-col gap-[10px] items-center w-full min-w-[300px]">
        <img src={el.imgSrc} alt="" class="rounded-[5px] w-full max-w-[500px]">
        <BotaoWpp bg="bg-vermelho-4-principal" maxWidth="max-md:max-w-[150px]" mensagem={encodeURI(el.mensagem)} titulo="Quero"/>
    </div>
    {/each}
  </div>
</div>
