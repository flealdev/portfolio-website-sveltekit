<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import BlogPosts from "$lib/components/organisms/blog-posts/blog-posts.svelte";
  import Pesquisa from "$lib/components/molecules/pesquisa/pesquisa.svelte";
</script>

<!-- <section class="flex w-full flex-col md:gap-5 md:items-center"> -->
  <Heading
    section={false}
    titulo="Blog da New Life Fibra"
    subtitulo="Encontre dicas, atualidades, novidades e guias para facilitar o seu dia a dia"
  />
  <!-- <Pesquisa classes="" /> -->
<section id="posts" class="flex flex-col gap-10">
  <BlogPosts />
</section>
