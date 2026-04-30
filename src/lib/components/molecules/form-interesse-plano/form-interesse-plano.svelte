<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { page } from "$app/state";
  import { superForm } from "sveltekit-superforms/client";
  import { Turnstile } from "svelte-turnstile";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";
  import { fade, scale } from "svelte/transition";
  import { browser } from "$app/environment";

  let {
    plano = "",
    id = "",
    valor = 0.0,
    classes = "",
    mensagemSucesso = "Em breve entraremos em contato com você.",
    mensagemFalha = "",
    titulo,
    subtitulo = "Preencha os dados abaixo que logo iremos entrar em contato com você!",
    heading = true,
    captcha = true,
  } = $props();

  const { form, errors, enhance, message } = superForm({
    taintedMessage: null,
  });
</script>

<form
  {id}
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="POST"
  class="form-leads flex flex-col items-center gap-5 max-w-240 {classes}"
>
  {#if heading}
    <div class="flex flex-col gap-1 w-full">
      <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
        {titulo}
      </h2>
      <p class="dark:text-branco nlf-paragrafo">{subtitulo}</p>
    </div>
  {/if}
  <fieldset class="flex flex-wrap gap-3 w-full max-xl:gap-md xl:justify-between">
    <label class="max-xl:w-full xl:w-[63%] flex flex-col gap-1">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Qual o seu nome? <span class="text-vermelho">*</span></span
      >
      <input
        type="text"
        name="nome"
        placeholder="Digite seu nome ..."
        class="nlf-input nlf-input--foco"
        bind:value={$form.nome}
        required
      />
      <!-- {#if $errors.nome}
                <ErroValidacao
                    erro={$errors.nome}
                />
            {/if} -->
    </label>
    <label class="max-xl:w-full xl:w-[35%] flex flex-col gap-1">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Qual o seu telefone? <span class="text-vermelho">*</span></span
      >
      <input
        type="tel"
        name="telefone"
        placeholder="Digite seu telefone com DDD"
        class="nlf-input nlf-input--foco"
        bind:value={$form.telefone}
        required
      />
      <!-- {#if $errors.telefone}
                <ErroValidacao
                    erro={$errors.telefone}
                />
            {/if} -->
    </label>
    <label class="w-full flex flex-col gap-1">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Qual a sua cidade? <span class="text-vermelho">*</span></span
      >
      <select
        name="cidade"
        id="cidade"
        class="nlf-input nlf-input--foco"
        required
        bind:value={$form.cidade}
      >
        <option value="" disabled selected>Selecione</option>
        <option value="São Gabriel">São Gabriel</option>
        <option value="Bagé">Bagé</option>
        <option value="Passo Fundo">Passo Fundo</option>
        <option value="Outra">Outra</option>
      </select>
      <!-- {#if $errors.cidade}
                <ErroValidacao
                    erro={$errors.cidade}
                />
            {/if} -->
    </label>
    {#if $form.cidade === "Outra"}
      <label
        class="flex flex-col gap-1 w-full pl-10 border-l-4 border-auxiliar-primeira/20 rounded-lg"
        in:scale
        out:fade
      >
        <span
          class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
          >Informe abaixo, por gentileza: <span class="text-vermelho">*</span
          ></span
        >
        <input
          type="text"
          name="outraCidade"
          placeholder="Informe a cidade onde você mora"
          class="nlf-input nlf-input--foco"
          required
        />
        <!-- {#if $errors.outraCidade}
                    <ErroValidacao erro={$errors.outraCidade} />
                {/if} -->
      </label>
    {/if}
    <label class="w-full flex flex-col gap-1">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Se possível, informe o seu endereço</span
      >
      <input
        type="text"
        name="endereco"
        placeholder="Digite seu endereço ..."
        bind:value={$form.endereco}
        class="nlf-input nlf-input--foco"
      />
      <!-- {#if $errors.endereco}
                <ErroValidacao
                    erro={$errors.endereco}
                />
            {/if} -->
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        name="whatsapp"
        value="Aceito, pode mandar"
        id="wpp"
        class="rounded-xs"
        bind:checked={$form.whatsapp}
      />
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Aceita whatsapp?</span
      >
    </label>
    {#if plano != ""}
      <input type="text" name="plano" id="plano" class="hidden" value={plano} />
    {/if}
    <input type="hidden" name="valorPlano" id="valorPlano" value={valor} />
  </fieldset>
  <input
    type="hidden"
    name="pagina"
    value={page.url.pathname + page.url.search}
  />
  <input
    type="hidden"
    name="_next"
    value="https://minhanewlife.com.br/obrigado"
  />
  <input
    type="hidden"
    name="_subject"
    value="LEAD - Interessado - New Life Fibra"
  />
  <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" />
  <div class="flex flex-col gap-3 w-full items-center">
    <button type="submit" class="nlf-botao nlf-botao--submit"> Enviar </button>
    <!-- {#if $message}
          <ErroFormulario
              message={$message}
              {mensagemSucesso}
              {mensagemFalha}
              sucesso={page.status === 200}
          />
      {/if}
      {#if captcha}
      <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY}/>
      {/if} -->
    <AvisoForm />
  </div>
</form>
