<script>
  import "@fontsource-variable/montserrat";
  import "../app.css";
  import Metatags from "$lib/components/molecules/metatags/metatags.svelte";
  import Layout from "$lib/components/organisms/layout/layout.svelte";

  let { children } = $props();

</script>

<svelte:head>
  <Metatags />
</svelte:head>

<Layout>
  {@render children?.()}
</Layout>

