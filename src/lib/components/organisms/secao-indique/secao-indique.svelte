<script>
  import BotaoLink from "$lib/components/atoms/botao/--link/botao--link.svelte";

</script>
<div class="flex flex-col rounded-[10px] items-center shadow-container w-full max-w-[30rem]">
    <img src="/assets/template/ilustrativa-1.jpg" alt="" class="w-full rounded-t-[10px] aspect-[600/756] max-w-[30rem]">
    <div class="max-xl:-mt-[20%] xl:-mt-[40%] flex flex-col bg-branco gap-[25px] px-5 pt-[40px] pb-[25px] rounded-t-[50px] rounded-b-[10px] border-azul-1-claro border-x border-y-[5px]">
        <div class="flex flex-col gap-[5px]">
            <h2 class="nlf-titulo-h2">Ação promocional</h2>
            <p class="nlf-paragrafo text-preto">
                Estimule seus clientes a realizar uma ação para receber um <b>presente</b> em troca de sua fidelidade!
            </p>
        </div>
        <BotaoLink novaGuia={true} titulo="Clique aqui" href="/"/>
    </div>
</div>