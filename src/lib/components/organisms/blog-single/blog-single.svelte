<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import FormSolicitaContatoSimples from "$lib/components/molecules/form-solicita-contato/--simples/form-solicita-contato--simples.svelte";
  import {
    fetchPostSingleBlogApiWordpress,
    fetchMetatagsPagePrivacidadeApiWordpress,
  } from "$lib/core/models/fetch";
  import BlogSinglePlaceholder from "./--placeholder/blog-single--placeholder.svelte";
  import SliderImg from "$lib/components/molecules/slider-img/slider-img.svelte";

  let {
    titulo = "",
    resumo = "",
    slug = "",
    conteudo = "",
    foto = "",
    form = false,
    autor = "",
    data = "",
    funcaoFetch = "",
    classesContainer = "",
    classesTitulo = "",
    classesSubtitulo = "",
    blog = true,
  } = $props();
</script>

<article
  id="single"
  class="flex w-full max-w-240 flex-col gap-10 dark:text-branco {classesContainer}"
>
  {#if blog}
    {#await fetchPostSingleBlogApiWordpress(slug)}
      <BlogSinglePlaceholder />
    {:then res}
      <Heading
        {blog}
        {titulo}
        subtitulo={resumo}
        {classesTitulo}
        {classesSubtitulo}
        section={false}
        foto={res.data.postBy.author.node.avatar.url ??
          res.data.postBy.author.node.avatar.url}
        autor={res.data.postBy.author.node.name ??
          res.data.postBy.author.node.name}
        data={res.data.postBy.date ?? res.data.postBy.date}
      />
      <section
        id="conteudo"
        class="prose prose-img:rounded-md prose-img:bg-branco max-w-none dark:prose-invert prose-stone"
      >
        {@html res.data.postBy.content}
        {#if res.data.postBy.galeria.nodes.length != 0}
          <SliderImg
            slideClasses=""
            containerClasses="w-full"
            breakpoints={{
              0: {
                slidesPerView: 1,
                enabled: true,
                navigation: {
                  enabled: true,
                },
              },
              768: {
                slidesPerView: 2,
                enabled: true,
                navigation: {
                  enabled: true,
                },
              },
              960: {
                slidesPerView: 3,
                enabled: true,
                navigation: {
                  enabled: true,
                },
              },
            }}
            pauseOnMouseEnter={true}
            delay={2500}
            tipoImagens="array"
            banners={res.data.postBy.galeria.nodes}
          />
        {/if}
      </section>
    {/await}
  {:else}
    {#await funcaoFetch()}
      <BlogSinglePlaceholder />
    {:then res}
      <Heading
        {blog}
        {titulo}
        subtitulo={resumo}
        {classesTitulo}
        {classesSubtitulo}
        section={false}
      />
      <section
        id="conteudo"
        class="prose prose-img:rounded-md prose-img:bg-branco max-w-none dark:prose-invert prose-stone"
      >
        {@html res.data.pageBy.content}
      </section>
    {/await}
  {/if}
</article>

{#if form}
  <div class="flex w-full max-w-240">
    <FormSolicitaContatoSimples
      title="Quer atendimento personalizado?"
      desc="Informe seu número abaixo que em breve um de nossos consultores irá entrar em contato."
      aviso={false}
      assunto="LEAD Artigo do Blog - Interessado - New Life Fibra"
    />
  </div>
{/if}
