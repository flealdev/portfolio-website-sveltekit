<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { page } from "$app/state";
  import { superForm } from "sveltekit-superforms/client";
  import { Turnstile } from "svelte-turnstile";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";
  import { browser } from "$app/environment";

  let { valor = 0.0 } = $props();

  const { form, errors, enhance, message } = superForm({
    taintedMessage: null,
  });
</script>

<form
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="post"
  class="form-leads flex flex-col gap-5"
>
  <div class="flex flex-col gap-1">
    <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
      Consulte viabilidade
    </h2>
    <p class="dark:text-branco nlf-paragrafo">
      Preencha os dados abaixo que logo iremos entrar em contato com você!
    </p>
  </div>
  <fieldset class="flex flex-wrap gap-3 max-xl:gap-md xl:justify-between">
    <label class="max-xl:w-full xl:w-[63%] flex flex-col gap-1">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Qual o seu nome? <span class="text-vermelho">*</span></span
      >
      <input
        type="text"
        name="nome"
        placeholder="Digite seu nome completo"
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
        placeholder="Digite o número com DDD"
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
        >Informe o seu endereço e cidade <span class="text-vermelho">*</span
        ></span
      >
      <input
        type="text"
        name="endereco"
        placeholder="Digite seu endereço, incluindo a sua cidade"
        class="nlf-input nlf-input--foco"
        bind:value={$form.endereco}
        required
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
      />
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Aceita whatsapp?</span
      >
    </label>
  </fieldset>
  <input type="hidden" name="pagina" value={page.url.pathname} />
  <input type="hidden" name="valorPlano" value={valor} />
  <input
    type="hidden"
    name="_next"
    value="https://minhanewlife.com.br/obrigado"
  />
  <input
    type="hidden"
    name="_subject"
    value="LEAD - Consulta de viabilidade - New Life Fibra"
  />
  <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" />
  <div class="flex flex-col gap-3">
    <button type="submit" class="nlf-botao nlf-botao--submit"> Enviar </button>
    <!-- {#if $message}
            <ErroFormulario
                message={$message}
                mensagemSucesso="Seus dados foram enviados. <br> Em breve iremos entrar em contato com você!"
                sucesso={page.status === 200}
            />
        {/if}
        <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY}/> -->
    <AvisoForm />
  </div>
</form>
