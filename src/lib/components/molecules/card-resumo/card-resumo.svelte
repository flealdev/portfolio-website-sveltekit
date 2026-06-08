<script>
  const {
    children,
    titulo,
    descricao,
    href = "",
    onclick,
    classes = "border-auxiliar-primeira",
    classesTitulo = "text-auxiliar-primeira",
  } = $props();
</script>

{#if href != ""}
  <a
    {href}
    target="_blank"
    class="nlf-grow flex flex-col justify-between gap-[25px] px-[12px] pb-[15px] pt-[25px] border border-t-10 bg-branco dark:bg-opacity-0 w-full max-w-[130px] rounded-[5px] {classes}"
  >
    <div class="flex flex-col gap-[5px] w-full">
      <p class="enfase break-words w-full text-left dark:text-branco {classesTitulo}">
        {titulo}
      </p>
      <p class="item-com-icone text-left">{descricao}</p>
    </div>
    {@render children()}
  </a>
{:else}
  <button
    {onclick}
    class="flex nlf-grow flex-col justify-between gap-[25px] px-[12px] pb-[15px] pt-[25px] border border-t-10 bg-branco dark:bg-opacity-0 w-full max-w-[130px] rounded-[5px] {classes}"
  >
    <div class="flex flex-col gap-[5px] w-full">
      <p class="enfase w-full text-left dark:text-branco {classesTitulo}">
        {titulo}
      </p>
      <p class="item-com-icone text-left">{descricao}</p>
    </div>
    {@render children()}
  </button>
{/if}
