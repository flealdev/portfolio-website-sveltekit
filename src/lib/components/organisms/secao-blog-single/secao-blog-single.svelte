<script>
    import Heading from "$lib/components/molecules/heading/heading.svelte";
    // import FormContatoSolicitaContatoSimples from "$lib/components/molecules/form-contato/__solicita-contato-simples/form-contato__solicita-contato-simples.svelte";

    const {titulo = "",
        resumo = "",
        conteudo = "",
        foto = "",
        form = false,
        autor = "",
        data = "",
        classesContainer = "",
        classesTitulo = "",
        classesSubtitulo = "",
        googleAds = false,
        grupoAnuncio = "ORG"} = $props();

    let subtitulo = null;

    // se for post de blog
    let blog = false;
    if (foto != "" || autor != "" || data != "") {
        blog = true;
    }

</script>
<svelte:head>
    {#if googleAds}
    <meta name="robots" content="noindex">
    {/if}
</svelte:head>

<article
    id="single"
    class="flex w-full max-w-240 flex-col gap-10 dark:text-branco {classesContainer}"
>
    <section class="flex flex-col gap-5 w-full">
        <Heading
            {titulo}
            subtitulo={resumo}
            {classesTitulo}
            {classesSubtitulo}
            section={false}
            {blog}
            foto={foto ?? foto}
            autor={autor ?? autor}
            data={data ?? data}
        />
    </section>
    <section
        id="conteudo"
        class="prose prose-img:rounded-md prose-img:bg-branco max-w-none dark:prose-invert prose-stone"
    >
        {@html conteudo}
    </section>
    <!-- <FormContatoSolicitaContatoSimples
        title="Quer atendimento personalizado?"
        desc="Informe seu número abaixo que em breve um de nossos consultores irá entrar em contato."
        aviso={false}
        assunto="LEAD Artigo do Blog - Interessado - New Life Fibra"
    /> -->
    
</article>
