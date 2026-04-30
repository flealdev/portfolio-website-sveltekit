<script>
  import BotaoPopup from "$lib/components/atoms/botao/--popup/botao--popup.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
  import { manipulaModal } from "$lib/core/utils";

  let { duvidas = [] } = $props();
</script>

<ContainerBranco class="w-full xl:w-[40%]">
  <div class="flex flex-col items-center gap-[30px] w-full">
    <h2
      class="nlf-titulo-h2 text-auxiliar-primeira w-full lg:text-center dark:text-branco"
    >
      Dúvidas frequentes
    </h2>
    <div
      class="flex justify-center flex-wrap w-full max-xl:max-w-[700px] xl:max-w-100 items-center max-md:gap-[10px] md:gap-x-5 max-h-[400px] md:gap-y-[15px]"
    >
      {#each duvidas as duvida}
        <BotaoPopup
          onclick={() => {
            manipulaModal(duvida.id, duvida.componente, undefined, {
              id: duvida.id,
              titulo: duvida.titulo,
              descricao: duvida.descricao,
              duvidas: duvida.duvidas, 
              border: true,
              overflowY: true             
            });
          }}
          titulo={duvida.titulo}
        />
      {/each}
    </div>
  </div>
</ContainerBranco>
