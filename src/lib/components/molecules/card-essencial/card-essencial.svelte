<script>
  const {
    children,
    linha1,
    linha2,
    onclick,
    srcBg,
    maxWidth = "max-w-[120px]",
    href="",
    shadowColor = "#FFD700",
    padding = "px-[10px] py-[15px]",
    orderTexto,
  } = $props();
</script>

{#if href != ""}
  <a
    {href}
    target="_blank"
    style="background-image: linear-gradient(180deg,rgb(22, 56, 203, 0.6) 33%,rgb(22, 56, 203, 0.3) 100%), url('{srcBg}'); box-shadow: 6px -6px 0 {shadowColor},-8px 8px 0 {shadowColor}"
    class="nlf-grow flex w-full flex-col {maxWidth} items-end text-end justify-between aspect-[120/160] {padding} bg-linear-60 from-azul-1-claro to-azul rounded-[8px] bg-cover"
  >
    <p class="text-branco leading-[1] {orderTexto}">
      <span class="font-medium max-md:text-sm">{linha1}</span><br /><span
        class="font-black text-[18px]">{linha2}</span
      >
    </p>
    {@render children?.()}
  </a>
{:else}
  <button
    {onclick}
    style="background-image: linear-gradient(180deg,rgb(22, 56, 203, 0.6) 33%,rgb(22, 56, 203, 0.3) 100%), url('{srcBg}'); box-shadow: 6px -6px 0 {shadowColor},-8px 8px 0 {shadowColor}"
    class="nlf-grow flex w-full flex-col {maxWidth} items-end text-end justify-between aspect-[120/160] {padding} bg-linear-60 from-azul-1-claro to-azul rounded-[8px] bg-cover"
  >
    <p class="text-branco leading-[1] {orderTexto}">
      <span class="font-medium max-md:text-sm">{linha1}</span><br /><span
        class="font-black text-[18px]">{linha2}</span
      >
    </p>
    {@render children?.()}
  </button>
{/if}
