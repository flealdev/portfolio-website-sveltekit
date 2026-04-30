<script>
  import BlogSingle from "$lib/components/organisms/blog-single/blog-single.svelte";

  let { data } = $props();

  const { post, grupoAnuncio, slug, titulo, descricao } = data;
</script>

<BlogSingle {slug} form={true} {titulo} resumo={descricao} />
<div class="flex w-full flex-col gap-5 lg:max-w-240">
  <a
    href="/blog"
    data-sveltekit-preload-data
    class="flex gap-2 py-2 px-5 nlf-grow items-center border-2 dark:text-branco dark:border-branco border-principal-primeira rounded-xl text-principal-primeira font-extrabold w-max"
  >
    <span>Ir ao blog</span>
  </a>
</div>
