<script>
  // lógica
  let {
    delayed = false,
    submitting = false,
    classesBotaoAtivo = "",
    classesBotaoInativo = "",
    spinnerSrc = "",
    classesSpinner = "",
    nomeBotao = "",
  } = $props();
</script>

{#if !delayed && !submitting}
  <button type="submit" class={classesBotaoAtivo}>{nomeBotao}</button>
{:else if !delayed && submitting}
  <button type="submit" class="{classesBotaoAtivo} {classesBotaoInativo}"
    >Enviando</button
  >
{:else if delayed}
  <p class="flex gap-3 items-center">
    <span class="{classesBotaoAtivo} {classesBotaoInativo} justify-center"
      >Enviando</span
    >
    <img src={spinnerSrc} class="animate-spin {classesSpinner}" />
  </p>
{/if}
