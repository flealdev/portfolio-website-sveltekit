<script>
  import BotaoLink from "$lib/components/atoms/botao/--link/botao--link.svelte";

  const {class:classes = "", titulo, href, qrHref, qrSrc, imgSrc, widthImg = "max-md:max-w-[225px] md:max-w-[300px]"} = $props()

</script>
<div class="flex flex-col gap-[25px] {classes}">
    <div class="flex flex-col items-center text-center gap-[10px]">
        <h3 class="titulo-h3">{titulo}</h3>
        <img src="{imgSrc}" alt="" class="w-full {widthImg} rounded-[5px]">
    </div>
    <div class="flex max-md:gap-[25px] md:gap-10 w-full justify-center">
        <a href="{qrHref}" target="_blank" class="flex flex-col items-center justify-center text-center gap-[5px] min-w-[100px]">
            <img src="{qrSrc}" alt="" class="w-full max-w-[100px] ">
            <p class="paragrafo max-w-[100px]">Avalie (clique ou leia o QR)</p>
    </a>
        <BotaoLink {href} novaGuia={true} corFundo="bg-verde-4-principal" titulo="Visite" classes="items-center"/>
    </div>
</div>