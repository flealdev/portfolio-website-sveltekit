<script>
    import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
    import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
    import CardRelato from "$lib/components/molecules/card-relato/card-relato.svelte";
</script>
<ContainerBranco class="w-full" padding="py-10">
    <div class="flex flex-col items-center w-full gap-10">
        <h2 class="nlf-titulo-h2  dark:text-branco px-5 w-full">
            Relatos de colaboradores
        </h2>
        <div
                class="flex md:flex-wrap overflow-x-auto md:justify-center w-full max-sm:gap-[10px] sm:max-lg:gap-[30px] lg:gap-y-[50px] lg:gap-x-[100px] px-5 pb-2"
        >
            <CardRelato
                    src="/assets/template/foto-colaborador.jpg"
                    alt="Foto do colaborador"
                    subtitulo="Colaborador desde 2000"
                    titulo="Nome do colaborador(a) 1"
                    classes=""
                    descricao="Relato do colaborador(a) para estimular cadastros de vagas e envio de currículos."
            />
            <CardRelato
                    src="/assets/template/foto-colaborador.jpg"
                    alt="Foto do colaborador"
                    subtitulo="Colaborador desde 2001"
                    titulo="Nome do colaborador(a) 2"
                    classes=""
                    descricao="Relato do colaborador(a) para estimular cadastros de vagas e envio de currículos."
            />
            <CardRelato
                    src="/assets/template/foto-colaborador.jpg"
                    alt="Foto do colaborador"
                    subtitulo="Colaborador desde 2002"
                    titulo="Nome do colaborador(a) 3"
                    classes=""
                    descricao="Relato do colaborador(a) para estimular cadastros de vagas e envio de currículos."
            />
        </div>
        <div class="max-md:px-5">
            <BotaoCta titulo="Trabalhe conosco" href="/"  />
        </div>
    </div>
</ContainerBranco>