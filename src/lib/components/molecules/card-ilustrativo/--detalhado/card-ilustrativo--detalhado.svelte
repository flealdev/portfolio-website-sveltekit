<script>
  let {
    titulo = "",
    subtitulo = "",
    imagem = "",
    altImagem = "",
    descricao = "",
  } = $props();
</script>

<div
  class="flex flex-col max-md:gap-3 md:gap-5 w-76 p-7.5 bg-principal-primeira/5 dark:bg-principal-primeira dark:text-branco rounded-lg shadow-md"
>
  <div class="flex flex-col gap-2">
    {#if imagem}
      <img src={imagem} alt={altImagem} class="rounded-lg shadow-xs" />
    {/if}
    <div class="flex flex-col gap-1">
      <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
        {titulo}
      </h2>
      <p class="nlf-subtitulo--h2">{subtitulo}</p>
    </div>
  </div>
  <p class="nlf-paragrafo">
    {descricao}
  </p>
</div>
