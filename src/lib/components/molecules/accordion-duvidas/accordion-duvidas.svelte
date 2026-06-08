<script>
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
</script>

<details
  {id}
  class="flex flex-col gap-2 group open:border-2 open:border-principal-primeira open:rounded-lg"
>
  <summary
    class="cursor-pointer bg-auxiliar-primeira group-open:bg-principal-primeira enfase p-5 rounded-lg group-open:rounded-none text-branco"
    >{pergunta}</summary
  >
  <div class="p-5 paragrafo">
    {@html resposta}
  </div>
</details>
