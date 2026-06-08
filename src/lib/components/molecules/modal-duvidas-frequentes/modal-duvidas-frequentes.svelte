<script>
  import AccordionDuvidas from "../accordion-duvidas/accordion-duvidas.svelte";
  import LayoutModal from "../layout-modal/layout-modal.svelte";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let { id, titulo, descricao, duvidas = [], fullscreen, border, overflowY } = $props();

  let aberto = null;

  onMount(() => {
    if (browser) {
      // Fetch all the details element.
      let detailsList = document.querySelectorAll(`details`);
      // When a details is open, close all other details.
      function handleDetailToggle(event) {
        // We are only interested in details being opened.
        // Also, without the guard below, we'd run into an infinite loop.
        if (!event.target.open) return;
        for (let details of detailsList) {
          details.open = details === event.target;
        }
      }

      // Add toggle listeners.
      for (let details of detailsList) {
        details.addEventListener("toggle", handleDetailToggle);
      }
      // link: https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai
    }
  });
</script>

<LayoutModal {id} {fullscreen} {border} {overflowY}>
  <div class="flex flex-col h-full w-full gap-5 max-w-240">
    <div class="flex flex-col gap-2">
      <h2 class="titulo-h2 text-principal-primeira dark:text-branco">
        {titulo}
      </h2>
      <p class="paragrafo">{descricao}</p>
    </div>
    <div
      class="flex w-full flex-col gap-[10px]"
    >
      {#each duvidas as duvida, i}
        <AccordionDuvidas
          pergunta={duvida.questao}
          resposta={duvida.resposta}
          {aberto}
          indice={i}
        />
      {/each}
    </div>
  </div>
</LayoutModal>
