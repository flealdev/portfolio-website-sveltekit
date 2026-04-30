<script>
  let { erro = "", classes = "" } = $props();
</script>

<p
  class="bg-branco p-3 rounded-md border border-vermelho text-sm text-vermelho {classes}"
>
  {erro}
</p>
