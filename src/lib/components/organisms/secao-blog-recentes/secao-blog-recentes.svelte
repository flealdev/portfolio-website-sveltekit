<script>
  import BlogPostsRecentes from "../blog-posts/--recentes/blog-posts--recentes.svelte";
  import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

<ContainerBranco class="w-full max-w-[31.25rem]">
  <div class="flex flex-col w-full gap-[30px]">
    <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
      Últimos artigos do blog
    </h2>
    <BlogPostsRecentes />
    <BotaoCta titulo="Blog" href="/" />
  </div>
</ContainerBranco>
