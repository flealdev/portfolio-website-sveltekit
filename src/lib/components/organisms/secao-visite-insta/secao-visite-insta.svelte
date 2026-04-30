<script>
      import BotaoLink from "$lib/components/atoms/botao/--link/botao--link.svelte";

</script>

<div class="flex max-md:flex-col md:flex-wrap max-md:items-center md:justify-center md:items-center gap-5 w-full">
    <div class="flex flex-col gap-[5px] sm:max-lg:max-w-[15rem] lg:max-w-[18rem]">
      <h2 class="font-black max-sm:text-2xl max-lg:text-[40px] lg:text-[50px] max-sm:text-center leading-sm text-azul-3">Visite nosso instagram</h2>
      <p class="nlf-paragrafo max-sm:text-center">Fique por dentro das novidades, promoções e sorteios.</p>
    </div>
    <div class="flex flex-col items-center">
      <img src="/assets/25anos/insta-eduarda.webp" alt="" class="max-lg:max-w-[250px] lg:max-w-[400px]">
      <BotaoLink novaGuia={true} titulo="Clique aqui" corFundo="bg-vermelho-4-principal" classes="w-full" href="https://instagram.com.br/newlifefibra"/>
    </div>
  </div>