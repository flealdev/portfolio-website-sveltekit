<script>
  import handleAccordion from "$lib/stores/handle-accordion.svelte";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  let { id, pergunta, resposta, indice, aberto } = $props();

  let mounted = false,
    accordion;

  onMount(() => {
    mounted = true;
    if (browser) {
      accordion = document.getElementById(id);
    }
  });

  //   if (mounted) {
  //     if (browser) {
  //       if (handleAccordion.isOpen === false) {
  //         accordion.removeAttribute(open);
  //         console.log(
  //           "se state for falso, open do accordion é: " +
  //             accordion.getAttribute(open)
  //         );
  //       } else {
  //         handleAccordion.isOpen = true;
  //         accordion.setAttribute(open, true);
  //         console.log(
  //           "se state for true, open do accordion é: " +
  //             accordion.getAttribute(open)
  //         );
  //       }
  //     }
  //   }
</script>

<details
  {id}
  class="flex flex-col gap-2 group open:border-2 open:border-principal-primeira open:rounded-lg"
>
  <summary
    class="cursor-pointer bg-auxiliar-primeira group-open:bg-principal-primeira nlf-enfase p-5 rounded-lg group-open:rounded-none text-branco"
    >{pergunta}</summary
  >
  <div class="p-5 nlf-paragrafo">
    {@html resposta}
  </div>
</details>
