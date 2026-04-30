<script>
  import CardArtigoBlog from "$lib/components/molecules/card-artigo-blog/card-artigo-blog.svelte";
  import AvisoErroCarregamento from "$lib/components/atoms/aviso-erro-carregamento/aviso-erro-carregamento.svelte";
  import CardArtigoBlogPlaceholder from "$lib/components/molecules/card-artigo-blog/--placeholder/card-artigo-blog--placeholder.svelte";
  import { fetchUltimos3PostsApiWordpress } from "$lib/core/models/fetch";
  import he from "he";
</script>

{#await fetchUltimos3PostsApiWordpress()}
  <div class="flex flex-col max-md:gap-5 md:gap-10 justify-center items-center">
    <CardArtigoBlogPlaceholder />
    <CardArtigoBlogPlaceholder />
    <CardArtigoBlogPlaceholder />
  </div>
{:then res}
  <div class="flex flex-col gap-[15px]">
    {#each res.data.posts.nodes as post, i}
      <CardArtigoBlog
        href="/blog/{post.slug}"
        titulo={he.decode(post.title.substr(0, 40))}
        descricao={he.decode(
          post.excerpt.replace(/(<([^>]+)>)/gi, "").substr(0, 40)
        )}
      />
    {/each}
  </div>
{:catch}
  <AvisoErroCarregamento />
{/await}
