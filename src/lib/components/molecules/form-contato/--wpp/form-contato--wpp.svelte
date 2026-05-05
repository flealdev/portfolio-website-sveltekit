<script>
    import BotaoWpp from "$lib/components/atoms/botao/--wpp/botao--wpp.svelte";
    import {fade} from "svelte/transition";
    import {page} from "$app/state";

    let {
        class: classes = "",
        descricao = "O atendimento será 100% via whatsapp.",
        titulo = "Entre em contato",
        largura = "min-w-66 lg:max-w-[30rem]",
        textContainerClasses = "",
    } = $props();

    let {assunto = ""} = $state("");
    const googleAds = $derived.by(
        () => page.url.searchParams.get("utm_source") || null
    );
</script>

<div
        class="flex flex-col w-full items-center gap-2 justify-center {largura} {classes}"
>
    <div class="flex flex-col w-full  {textContainerClasses}">
        <h3 class="nlf-titulo-h3">
            {titulo}
        </h3>
        <p class="nlf-paragrafo">{descricao}</p>
    </div>
    <fieldset class="flex flex-col gap-3 items-center justify-center w-full">
        <label class="flex flex-col gap-1 w-full">
        <span class="nlf-paragrafo font-bold "
        >Assunto <span class="text-vermelho">*</span></span
        >
            <select
                    name="assunto"
                    id="assunto"
                    class="nlf-input nlf-input--foco w-full z-[1000]"
                    bind:value={assunto}
                    required
            >
                <option value="" disabled selected>Selecione um assunto</option>
                <option value="atendimento comercial"
                >Atendimento Comercial (planos, velocidades, valores)
                </option
                >
                <option value="atendimento ao cliente"
                >Atendimento ao Cliente (financeiro, suporte, etc)
                </option
                >
            </select>
        </label>
    </fieldset>
    {#if assunto != ""}
        <div class="flex flex-col gap-3 w-full" transition:fade>
            <BotaoWpp
                    mensagem={`Olá! Vim do site e gostaria de ${assunto}. [NÃO EXCLUA]`}
                    titulo="Enviar"
                    classes="z-[1000]"
            />
        </div>
    {/if}
</div>
