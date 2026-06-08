<script>
  import CardArtigoBlog from "$lib/components/molecules/card-artigo-blog/card-artigo-blog.svelte";

const posts = [
  {
    href: "/",
    titulo: "Título artigo 1",
    descricao: "Descrição artigo 1"
  },
  {
    href: "/",
    titulo: "Título artigo 2",
    descricao: "Descrição artigo 2"
  },
  {
    href: "/",
    titulo: "Título artigo 3",
    descricao: "Descrição artigo 3"
  }
]
</script>

  <div class="flex flex-col gap-[15px]">
    {#each posts as post}
      <CardArtigoBlog
        href={post.href}
        titulo={post.titulo}
        descricao={post.descricao}
      />
    {/each}
  </div>