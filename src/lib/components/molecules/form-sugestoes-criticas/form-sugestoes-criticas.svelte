<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { page } from "$app/state";
  import { superForm } from "sveltekit-superforms/client";
  import { Turnstile } from "svelte-turnstile";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";

  let { assunto = "" } = $props();

  const { form, errors, enhance, message } = superForm({
    taintedMessage:
      "Tem certeza que deseja sair? Você ainda não enviou o seu relato no formulário de sugestões e críticas. :(",
  });
</script>

<form
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="POST"
  class="flex flex-col gap-5 w-full lg:max-w-200"
>
  <fieldset class="flex flex-wrap gap-3 justify-between w-full">
    <label class="flex flex-col gap-1 w-full">
      <span
        class="font-bold nlf-paragrafo text-auxiliar-primeira dark:text-branco"
        >Nome <span class="text-vermelho">*</span></span
      >
      <input
        type="text"
        name="nome"
        placeholder="Digite seu nome"
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
    <label class="flex flex-col gap-1 max-xl:w-full xl:w-[45%]">
      <span
        class="font-bold nlf-paragrafo text-auxiliar-primeira dark:text-branco"
        >Telefone <span class="text-vermelho">*</span></span
      >
      <input
        type="tel"
        name="telefone"
        placeholder="Digite seu número com DDD"
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
    <label class="flex flex-col gap-1 max-xl:w-full xl:w-[50%]">
      <span
        class="font-bold nlf-paragrafo text-auxiliar-primeira dark:text-branco"
        >E-mail</span
      >
      <input
        type="email"
        name="email"
        placeholder="Digite seu melhor e-mail"
        class="nlf-input nlf-input--foco"
        bind:value={$form.email}
      />
      <!-- {#if $errors.email}
                <ErroValidacao
                    erro={$errors.email}
                />
            {/if} -->
    </label>
    <label class="flex flex-col gap-1 w-full">
      <span
        class="font-bold nlf-paragrafo text-auxiliar-primeira dark:text-branco"
        >Relato <span class="text-vermelho">*</span></span
      >
      <textarea
        name="relato"
        id=""
        rows="10"
        class="nlf-input-textarea"
        placeholder="Digite o seu relato"
        maxlength="1000"
        bind:value={$form.relato}
        required
      />
      <!-- <span
                class="font-bold text-right text-auxiliar-primeira dark:text-branco"
                ><span style="color: {$form.relato.length === 1000 ? 'red' : '#617EF6'}"
                    >{$form.relato.length}</span
                >/1000</span
            > -->
      <!-- {#if $errors.relato}
            <ErroValidacao
            erro={$errors.relato}
        />
            {/if} -->
    </label>
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
  <input type="hidden" name="_subject" value={assunto} />
  <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" />
  <div class="flex flex-col gap-3">
    <button type="submit" class="nlf-botao nlf-botao--submit">Enviar</button>
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
