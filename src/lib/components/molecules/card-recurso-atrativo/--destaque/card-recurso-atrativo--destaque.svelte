<script>
  let {
    destaque = false,
    bgUrl = "",
    subtitulo = "",
    titulo = "",
    href = "",
    onclick = "",
    class: classes = "",
    children,
  } = $props();
</script>

{#if href != ""}
  <a
    {href}
    style={`background-image:linear-gradient(rgba(22,57,203,0.8),rgba(22,57,203,0.8)),url("${bgUrl}");`}
    class="nlf-grow flex rounded-lg bg-cover bg-opacity-10 py-5 max-xl:pr-2 xl:pr-[12px] text-right {destaque
      ? 'shadow-[-8px_8px_2px_gold,8px_-8px_2px_gold]'
      : 'shadow-[-8px_-8px_4px_#32CD32,8px_8px_4px_#32CD32] items-end max-xl:pl-2 xl:pl-[12px]'} w-max max-xl:min-w-[150px] xl:min-w-60 max-xl:h-[200px] xl:h-[320px] {classes}"
  >
    <div
      class="flex flex-col gap-2 justify-between h-full w-full {destaque
        ? 'items-end'
        : ''}"
    >
      <p class="text-branco {destaque ? '' : 'order-2'}">
        <span
          class="font-light max-xl:text-md xl:text-[18px] max-xl:leading-[0.9] xl:leading-xs"
          >{subtitulo}<br /></span
        >
        <span
          class="font-black max-xl:text-[22px] xl:text-[25px] max-xl:leading-[0.9] xl:leading-xs"
          >{titulo}</span
        >
      </p>
      <div class={destaque ? "" : "order-1 self-end"}>
        {@render children?.()}
      </div>
    </div>
  </a>
{:else}
  <button
    {onclick}
    style={`background-image:linear-gradient(rgba(22,57,203,0.8),rgba(22,57,203,0.8)),url("${bgUrl}");`}
    class="nlf-grow flex rounded-lg bg-cover bg-opacity-10 py-5 max-xl:pr-2 xl:pr-[12px] text-right {destaque
      ? 'shadow-[-8px_8px_2px_gold,8px_-8px_2px_gold]'
      : 'shadow-[-8px_-8px_4px_#32CD32,8px_8px_4px_#32CD32] items-end max-xl:pl-2 xl:pl-[12px]'} w-max max-xl:min-w-[150px] xl:min-w-60 max-xl:h-[200px] xl:h-[320px] {classes}"
  >
    <div
      class="flex flex-col gap-2 justify-between h-full w-full {destaque
        ? 'items-end'
        : ''}"
    >
      <p class="text-branco {destaque ? '' : 'order-2'}">
        <span
          class="font-light max-xl:text-md xl:text-[18px] max-xl:leading-[0.9] xl:leading-xs"
          >{subtitulo}<br /></span
        >
        <span
          class="font-black max-xl:text-[22px] xl:text-[25px] max-xl:leading-[0.9] xl:leading-xs"
          >{titulo}</span
        >
      </p>
      <div class={destaque ? "" : "order-1 self-end"}>
        {@render children?.()}
      </div>
    </div>
  </button>
{/if}
