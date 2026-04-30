<script>
  import BotaoLink from "$lib/components/atoms/botao/--link/botao--link.svelte";

</script>
<div class="flex flex-col rounded-[10px] items-center shadow-container w-full max-w-[30rem]">
    <img src="/assets/25anos/img-claiton-ederson-w600.webp" alt="" class="w-full rounded-t-[10px] aspect-[600/756] max-w-[30rem]">
    <div class="max-xl:-mt-[20%] xl:-mt-[40%] flex flex-col bg-branco gap-[25px] px-5 pt-[40px] pb-[25px] rounded-t-[50px] rounded-b-[10px] border-azul-1-claro border-x border-y-[5px]">
        <div class="flex flex-col gap-[5px]">
            <h2 class="nlf-titulo-h2 text-azul-3">Compartilhe e ganhe!</h2>
            <p class="nlf-paragrafo text-preto">
                Indique amigos e ganhe um <b>SUPER DESCONTO</b> na sua mensalidade!
            </p>
        </div>
        <BotaoLink novaGuia={true} titulo="Indique já" href="/indique"/>
    </div>
</div>