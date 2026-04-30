<script>
  const {
    icon = "",
    imagem = "",
    altImagem = "",
    titulo = "",
    descricao = "",
    invertido = "",
    id = "",
    classes = "",
    
  } = $props();
</script>

<svelte:head>
  <style>
    strong {
      color: #1639cb;
    }
  </style>
</svelte:head>

<div
  {id}
  class="flex flex-wrap gap-5 max-w-220 border-b-8 text-preto border-auxiliar-primeira/30 shadow-[0px_0px_10px_rgba(97,126,246,0.2)] rounded-t-2xl max-md:py-8 max-md:px-5 md:p-10 items-center max-lg:justify-center lg:justify-between dark:bg-branco {classes}"
>
  {#if invertido === "sim"}
    {#if imagem}
      <img
        src={imagem}
        alt={altImagem}
        class="max-md:w-full md:w-[35%] max-w-75 rounded-xl"
        width="300"
        height="300"
      />
      <div class="flex flex-col gap-3 items-center max-md:w-full md:w-[60%]">
        <img src={icon} alt="Ícone decorativo" class="max-w-12" />
        <div class="flex flex-col w-full gap-1">
          <h2 class="nlf-titulo-h2 text-azul-3">
            {titulo}
          </h2>
          <p class="nlf-paragrafo">{@html descricao}</p>
        </div>
      </div>
    {:else}
      <slot />
      <div class="flex flex-col gap-3 items-center w-full">
        <div class="flex flex-col w-full gap-1">
          <h2 class="nlf-titulo-h2 text-azul-3">
            {titulo}
          </h2>
          <p class="nlf-paragrafo">{@html descricao}</p>
        </div>
      </div>
    {/if}
  {:else if imagem}
    <div class="flex flex-col gap-3 items-center max-md:w-full md:w-[60%]">
      <img src={icon} alt="Ícone decorativo" class="max-w-12" />
      <div class="flex flex-col w-full gap-1">
        <h2 class="nlf-titulo-h2 text-azul-3">
          {titulo}
        </h2>
        <p class="nlf-paragrafo">{@html descricao}</p>
      </div>
    </div>
    <img
      src={imagem}
      alt={altImagem}
      class="max-md:w-full md:w-[35%] max-w-75 rounded-xl"
      width="300"
      height="300"
    />
  {:else}
    <div class="flex flex-col gap-3 items-center w-full">
      <div class="flex flex-col w-full items-center gap-1">
        <h2 class="nlf-titulo-h2 text-azul-3">
          {titulo}
        </h2>
        <p class="nlf-paragrafo">{@html descricao}</p>
      </div>
    </div>
    <slot />
  {/if}
</div>
