<script>
  import HeadingAutor from "./__autor/heading__autor.svelte";

  const { classes, titulo, subtitulo, blog, foto, autor, data } = $props();
</script>

<section
  class="flex flex-col max-md:gap-1 md:gap-[10px] md:text-center w-full md:items-center dark:text-branco {classes}"
>
  <h1 class="nlf-titulo-h1 text-principal-primeira dark:text-branco">
    {@html titulo}
  </h1>
  {#if subtitulo}
    <p class="nlf-subtitulo--h1 w-full dark:text-branco">{@html subtitulo}</p>
  {/if}
</section>
{#if blog}
  <HeadingAutor {foto} {autor} {data} />
{/if}
