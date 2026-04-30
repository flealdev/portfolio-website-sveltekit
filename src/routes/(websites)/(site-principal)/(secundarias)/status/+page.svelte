<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import AccordionStatusDetalhadoApi from "$lib/components/molecules/accordion-status/--detalhado-api/accordion-status--detalhado-api.svelte";
  import AccordionStatus from "$lib/components/molecules/accordion-status/accordion-status.svelte";
  import FormNotificaIncidente from "$lib/components/molecules/form-notifica-incidente/form-notifica-incidente.svelte";
  import tema from "$lib/stores/tema.svelte.js";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
  import { fetchIncidentesApiWordpress } from "$lib/core/models/fetch.js";
  import { separaDataIncidente } from "$lib/core/utils";
  import AccordionStatusPlaceholderDetalhado from "$lib/components/molecules/accordion-status/--placeholder-detalhado/accordion-status--placeholder-detalhado.svelte";
  import { fetchNotifParada } from "$lib/core/models/fetch.js";
  import { onMount } from "svelte";
  // import AlternaLuz from "$lib/components/atoms/alterna-luz/alterna-luz.svelte";

  const { data } = $props();
</script>

<Heading
  titulo="Estado dos serviços e sistemas"
  subtitulo="Acompanhe os incidentes em andamento"
/>
<section class="w-full flex flex-col items-center gap-5">
  {#await fetchNotifParada()}
    <AccordionStatusPlaceholderDetalhado />
  {:then res}
    {#if res.length > 0 && !res[0].erro}
      <h2
        class="nlf-titulo-h2 w-full text-center text-vermelho dark:text-branco flex flex-col"
      >
        <span>&#9888;&#65039;</span>Incidentes em curso
      </h2>
      <div
        class="flex flex-col max-w-240 justify-center gap-5 items-center w-full"
      >
        <div class="flex flex-col gap-3 dark:gap-5 w-full">
          {#each res as inc}
            <AccordionStatusDetalhadoApi
              dataInicio={separaDataIncidente(inc.data_inicio)}
              titulo={inc.descricao}
              descricao={inc.obs}
            />
          {/each}
        </div>
      </div>
    {:else if res.length == 0}
      <p
        class="w-full p-5 bg-principal-terceira rounded-md nlf-enfase text-branco max-w-240"
      >
        Todos os sistemas e serviços operacionais.
      </p>
    {:else}
      <p class="w-full text-center p-5 rounded-md max-w-240">
        {@html res[0].erro}
      </p>
    {/if}
  {/await}
</section>
<hr class="bg-auxiliar-terceira/15 h-2 w-full border-0 rounded-full" />
<ContainerBranco classes="lg:w-[80%]">
  <section
    class="max-md:gap-5 w-full flex flex-wrap items-center md:justify-around md:gap-10 dark:text-branco"
  >
    <div class="flex flex-col gap-3 w-full max-w-120">
      <div class="flex flex-col gap-1">
        <h3 class="nlf-titulo-h3">Notifique um possível incidente</h3>
        <p class="nlf-subtitulo--h3">Preencha o formulário</p>
      </div>
      <p class="nlf-paragrafo">
        Caso sua conexão esteja instável e soube de outras pessoas na mesma
        situação ou visualizou algo que possa afetar a conexão (como fios caídos
        ou trocas de postes), notifique-nos que iremos avaliar a situação!
      </p>
    </div>
    <FormNotificaIncidente />
  </section>
</ContainerBranco>
