<script>
  /**
   * @typedef {Object} Props
   * @property {string} [titulo]
   * @property {string} [href]
   * @property {string} [class]
   * @property {string} [classesTitulo]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    titulo = "",
    href = "",
    class: classes = "",
    textCor="text-preto",
    classesTitulo = "",
    tipografia = "item-com-icone",
    padding = true,
    children,
    target,
    onclick = "",
  } = $props();
</script>

{#if href != ""}
  <a
    {href}
    {onclick}
    {target}
    class="flex max-lg:gap-[5px] nlf-grow lg:gap-[10px] {textCor} {padding
      ? 'px-5 py-3'
      : ''} rounded-md items-center justify-center {classes}"
  >
    {@render children?.()}
    <p class="{tipografia} {classesTitulo}">{titulo}</p>
  </a>
{:else}
  <button
    {onclick}
    class="flex max-lg:gap-[5px] nlf-grow lg:gap-[10px] cursor-pointer {textCor} {padding
      ? 'px-5 py-3'
      : ''} rounded-md items-center justify-center {classes}"
  >
    {@render children?.()}
    <p class="{tipografia} {classesTitulo}">
      {titulo}
    </p>
  </button>
{/if}
