<script>
  const {
    dataInicio,
    href,
    titulo,
    locais,
    previsao,
    sintomas,
    descricao,
    situacao,
  } = $props();

  // dataFormatada, titulo, cidade: array, previsao, sintomas:array
</script>

<details class="group w-full">
  <summary
    class="cursor-pointer group-open:text-branco dark:text-branco border border-vermelho/30 group-open:bg-vermelho group-hover:border-vermelho group-hover:group-open:text-branco dark:bg-branco dark:border-vermelho dark:shadow-[0_0_0.5rem_red] dark:group-open:shadow-none group-hover:text-vermelho rounded-lg group-open:rounded-t-lg group-open:rounded-b-none px-6 py-4.5 flex flex-col max-md:gap-2 md:gap-3"
  >
    <!-- linha titulo -->
    <div class="flex flex-col">
      <div class="flex justify-between items-center">
        <p
          class="nlf-paragrafo font-light text-principal-primeira group-open:text-branco"
        >
          {dataInicio}
        </p>
        {#if href}
          <a {href} class="nlf-grow w-max" target="_blank">
            <svg
              viewBox="0 0 24 24"
              xml:space="preserve"
              class="group-open:fill-branco w-full max-w-[25px]"
              ><path
                d="M19.235,1.75H4.765c-1.662,0-3.015,1.352-3.015,3.015v14.471c0,1.662,1.352,3.015,3.015,3.015h14.471  c1.662,0,3.015-1.352,3.015-3.015V4.765C22.25,3.102,20.898,1.75,19.235,1.75z M21.044,19.235c0,0.997-0.811,1.809-1.809,1.809  H4.765c-0.997,0-1.809-0.811-1.809-1.809v-2.181l4.866-5.407l6.573,5.975l3.635-3.029l3.015,2.512V19.235z M21.044,15.536  l-3.015-2.512l-3.601,3L7.737,9.94l-4.781,5.312V4.765c0-0.997,0.811-1.809,1.809-1.809h14.471c0.997,0,1.809,0.811,1.809,1.809  V15.536z"
              /><path
                d="M16.221,10.794c1.662,0,3.015-1.352,3.015-3.015s-1.352-3.015-3.015-3.015c-1.662,0-3.015,1.352-3.015,3.015  S14.558,10.794,16.221,10.794z M16.221,5.971c0.997,0,1.809,0.811,1.809,1.809s-0.811,1.809-1.809,1.809s-1.809-0.811-1.809-1.809  S15.223,5.971,16.221,5.971z"
              /></svg
            >
          </a>
        {/if}
      </div>
      <h3
        class="nlf-titulo-h3 uppercase leading-md text-principal-primeira group-open:text-branco"
      >
        {titulo}
      </h3>
    </div>
    <!-- linha subtitulo -->
    <div class="flex w-full justify-between flex-wrap max-md:gap-2">
      <div class="flex max-md:gap-1 md:gap-2 items-center">
        <svg
          viewBox="0 0 24 24"
          class="fill-principal-primeira group-open:fill-branco w-full max-md:max-w-4 md:max-w-5"
        >
          <path
            d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z"
          />
          <path
            d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"
          />
        </svg>
        <p class="text-principal-primeira nlf-paragrafo group-open:text-branco">
          {#each locais as cidade, i}
            {#if i === locais.length - 1}
              {cidade}
            {:else}
              {cidade},&nbsp;
            {/if}
          {/each}
        </p>
      </div>
      <div class="flex max-md:gap-1 md:gap-2 items-center">
        <svg
          viewBox="0 0 32 32"
          class="fill-vermelho group-open:fill-branco w-full max-md:max-w-4 md:max-w-5"
        >
          <g data-name="Layer 15" id="Layer_15">
            <path
              class=""
              d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"
            />
            <path
              class=""
              d="M20.24,21.66l-4.95-4.95A1,1,0,0,1,15,16V8h2v7.59l4.66,4.65Z"
            />
          </g>
        </svg>
        <p class="text-vermelho group-open:text-branco nlf-paragrafo">
          {previsao}
        </p>
      </div>
    </div>
  </summary>
  <!-- conteudo accordion -->
  <div
    class="px-6 py-4.5 max-md:gap-3 md:gap-5 flex flex-col text-base border dark:bg-branco border-vermelho rounded-b-lg nlf-paragrafo dark:text-preto"
  >
    <p>
      <span class="font-bold w-full">Sintomas: </span>
      {#each sintomas as sintoma, i}
        {#if i === sintomas.length - 1}
          {sintoma}
        {:else}
          {sintoma},&nbsp;
        {/if}
      {/each}
    </p>
    <p class="flex flex-col w-full gap-2">
      <span>{@html descricao}</span>
      <span class="nlf-nota-rodape"
        >* Se necessário este conteúdo será atualizado durante o decorrer do
        incidente.</span
      >
    </p>
    <p
      class="flex gap-2 items-center border-2 border-principal-terceira nlf-paragrafo rounded-md px-3 py-2"
    >
      <svg
        viewBox="0 0 120 120"
        class="fill-principal-terceira w-full max-w-[0.8rem] animate-twPulse animate-infinite"
      >
        <circle cx="60" cy="60" r="50" />
      </svg>
      <span>
        <span class="text-principal-terceira animate-twPulse animate-infinite"
          >Situação:</span
        >
        {situacao}
      </span>
    </p>
  </div>
</details>

<style lang="postcss">
  summary::marker {
    @apply content-none;
  }
</style>
