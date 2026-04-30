<script>
  import Layout from "$lib/components/organisms/layout/layout.svelte";

  let { children } = $props();
</script>

<Layout>
  {@render children?.()}
</Layout>
