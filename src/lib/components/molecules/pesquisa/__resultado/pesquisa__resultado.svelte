<script>
  import he from "he";

  let { titulo, url, descricao } = $props();
</script>

<a
  href={url}
  target="_blank"
  rel="noreferrer"
  class="nlf-paragrafo leading-lg p-2 border rounded-md border-preto/20 dark:border-branco/40 link dark:text-branco"
  ><span class="font-bold text-principal-primeira dark:text-branco"
    >{he.decode(titulo.replace(/<[^>]*>/g, "").substring(0, 60)) +
      " [...]"}</span
  >
  - {he.decode(descricao.replace(/<[^>]*>/g, "").substring(0, 60)) + "[...]"}</a
>
