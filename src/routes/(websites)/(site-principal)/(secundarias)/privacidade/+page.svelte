<script>
  import BlogSingle from "$lib/components/organisms/blog-single/blog-single.svelte";
  import { fetchMetatagsPagePrivacidadeApiWordpress } from "$lib/core/models/fetch";

  const { data } = $props();
</script>

<BlogSingle
  blog={false}
  funcaoFetch={fetchMetatagsPagePrivacidadeApiWordpress}
  titulo={data.titulo}
/>
