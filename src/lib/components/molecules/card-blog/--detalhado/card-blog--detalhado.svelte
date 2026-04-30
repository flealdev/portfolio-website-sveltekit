<script>
  const {
    imgDestaque = "",
    titulo = "",
    data = "",
    conteudo = "",
    href = "",
    etiqueta = "",
    conteudoDiv = "",
  } = $props();

  let dataFormatada = null,
    dia = null,
    mes = null;

  if (data) {
    // formata data
    dataFormatada = new Date(data);
    // dia
    dia = dataFormatada.getDate();
    // mes
    mes = new Intl.DateTimeFormat("default", { month: "short" }).format(
      dataFormatada
    );
  }
</script>

<div
  class=" max-sm:w-full sm:max-lg:w-[45%] lg:w-[30%] lg:max-w-92 flex flex-col shadow-[0_0.5rem_0_rgba(12,190,66)] dark:shadow-[0_0.5rem_0_white] border border-[rgba(12,190,66,0.5)] dark:border-branco dark:bg-transparent rounded-2xl"
>
  {#if imgDestaque}
    <div
      style="background-image:url('{imgDestaque}')"
      class="bg-branco bg-cover w-full bg-center max-md:h-80 md:h-92 rounded-t-2xl"
    ></div>
    {:else}
    <div
      class="bg-branco-2 bg-cover w-full bg-center max-md:h-80 md:h-92 rounded-t-2xl"
    ></div>
  {/if}
  <div
    class="flex flex-col items-center gap-5 px-5 max-md:pb-5 md:pb-10 pt-5 w-full bg-branco dark:bg-opacity-0"
  >
    <!-- linha informações -->
    <div class="flex gap-5">
      <!-- coluna data -->
      {#if dia && mes}
        <p
          class="nlf-enfase bg-auxiliar-primeira dark:bg-principal-primeira-dark px-2 py-5 flex flex-col text-branco rounded-xl shadow-xs items-center justify-center"
        >
          <span class="max-md:text-2xl md:text-3xl">{dia}</span>
          <span class="capitalize">{mes}</span>
        </p>
      {/if}
      <!-- coluna titulo -->
      <div class="flex flex-col justify-center gap-2 w-full">
        {#if etiqueta}
          <p
            class="nlf-nota-rodape text-branco rounded-xl bg-principal-terceira px-3 py-1 mb-2 w-max max-w-40 uppercase self-end"
          >
            {etiqueta}
          </p>
        {/if}
        <a {href} data-sveltekit-preload-data>
          <h3 class="nlf-titulo-h3 text-auxiliar-primeira dark:text-branco">
            {@html titulo}
          </h3>
        </a>
      </div>
    </div>
    <!-- linha descricao -->
    <div class="dark:text-branco nlf-paragrafo">
      {#if conteudoDiv}
        {@html conteudoDiv}
      {:else}
        {@html conteudo}
      {/if}
    </div>
    <a
      {href}
      target="_blank"
      class="nlf-enfase rounded-xl text-center w-full md:max-w-75 nlf-grow px-5 py-3 border-2 border-auxiliar-primeira dark:border-branco text-auxiliar-primeira dark:text-branco"
      data-sveltekit-preload-data>Leia mais</a
    >
  </div>
</div>
