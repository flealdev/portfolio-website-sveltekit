<script>
  const { titulo, href = "", onclick } = $props();
</script>

{#if href != ""}
  <a
    {href}
    target="_blank"
    class="flex nlf-grow flex-col gap-[25px] p-[10px] border border-t-10 bg-branco dark:bg-opacity-0 border-auxiliar-terceira max-lg:w-25 lg:w-max rounded-[5px]"
  >
    <p class="paragrafo font-bold text-auxiliar-primeira dark:text-branco">
      {titulo}
    </p>
  </a>
{:else}
  <button
    {onclick}
    class="flex nlf-grow flex-col gap-[25px] p-[10px] border border-t-10 bg-branco dark:bg-opacity-0 border-auxiliar-terceira max-lg:w-25 lg:w-max rounded-[5px]"
  >
    <p class="paragrafo font-bold text-auxiliar-primeira dark:text-branco">
      {titulo}
    </p>
  </button>
{/if}
