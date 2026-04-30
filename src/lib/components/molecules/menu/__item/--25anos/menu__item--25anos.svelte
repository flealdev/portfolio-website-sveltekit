<script>
  /**
   * @typedef {Object} Props
   * @property {string} [titulo]
   * @property {boolean} [destaque]
   * @property {string} [href]
   */

  /** @type {Props} */
  let {
    titulo = "",
    destaque = false,
    href = "",
    class: classes = "flex",
  } = $props();
</script>

<div
  class="border-b-[5px] min-w-max max-lg:px-1 lg:pb-1 lg:px-3 max-lg:py-2 {destaque
    ? 'border-[gold]'
    : ''}  dark:text-branco max-lg:rounded-md lg:rounded-[5px] nlf-item-menu-principal {classes}"
>
  <a {href}>{titulo}</a>
</div>
