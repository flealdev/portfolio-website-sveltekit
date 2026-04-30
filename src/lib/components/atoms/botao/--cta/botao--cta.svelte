<script>
  /**
   * @typedef {Object} Props
   * @property {string} [titulo]
   * @property {string} [href]
   */

  /** @type {Props} */
  let {
    titulo = "",
    href = "",
    containerClasses = "",
    onclick = function () {},
  } = $props();
</script>

<div class={containerClasses}>
  {#if href != ""}
    <a
      {href}
      target="_blank"
      class="flex nlf-botao nlf-botao--azul gap-[3px] px-[20px] py-[15px] rounded-md justify-center min-w-[200px] items-start"
    >
      <p class="nlf-enfase text-branco">{titulo}</p>
      <svg width="8" height="7" viewBox="0 0 8 7">
        <path
          d="M3.02131 0.434407L6.3206 0.509939C6.51023 0.506725 6.6854 0.585471 6.82522 0.725285C6.96503 0.8651 7.04217 1.03866 7.04056 1.2299L7.12252 4.53563C7.13217 4.92775 6.8204 5.23952 6.42827 5.22988C6.03615 5.22023 5.71152 4.89561 5.70188 4.50349L5.66653 2.91892L2.17921 6.40625C1.906 6.67945 1.45603 6.6698 1.17158 6.38535C0.887128 6.1009 0.877486 5.65093 1.14908 5.37933L4.6364 1.89201L3.05184 1.85666C2.65972 1.84701 2.33509 1.52239 2.32545 1.13026C2.31741 0.736535 2.62758 0.426372 3.02131 0.434407Z"
          fill="white"
        />
      </svg>
    </a>
  {:else}
    <button
      {onclick}
      target="_blank"
      class="flex nlf-botao nlf-botao--azul gap-[3px] px-[20px] py-[15px] min-w-[200px] rounded-md justify-center items-start"
    >
      <p class="nlf-enfase text-branco">{titulo}</p>
    </button>
  {/if}
</div>
