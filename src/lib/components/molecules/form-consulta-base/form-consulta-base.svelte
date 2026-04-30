<script>
  import { Turnstile } from "svelte-turnstile";
  import { superForm } from "sveltekit-superforms/client";
  import { page } from "$app/state";

  /** @type {{formData?: any}} */
  let { formData = {} } = $props();

  const { form, errors, enhance, message } = superForm(formData, {
    taintedMessage:
      "Tem certeza que deseja sair? Você ainda não enviou a sua indicação. :(",
  });
</script>

<form
  method="POST"
  class="flex flex-col gap-10 min-h-163.75 md:min-w-[20rem] w-full md:max-w-lg md:shadow-xl md:shadow-preto/10 md:rounded-3xl md:p-5 sm:p-10 items-center justify-center md:border-t-4 md:border-principal-terceira"
>
  <div class="flex flex-col gap-10 items-center justify-center">
    <a href="/">
      <img
        src="/assets/logo-nlf-solida-azul-w200.webp"
        class="max-w-50"
        alt=""
      />
    </a>
    <div class="leading-snug flex flex-col gap-2">
      <h1
        class="md:prose-inverttext-center nlf-titulo-h1 text-principal-primeira"
      >
        Base de clientes ativos
      </h1>
      <p class="text-justify nlf-paragrafo">
        Consulte nossa base de dados e ofereça descontos aos clientes New Life
        Fibra.
      </p>
    </div>
  </div>
  <div class="flex flex-col md:items-center gap-7 w-full">
    <fieldset class="flex flex-col gap-2">
      <label for="cpf" class="md:text-center nlf-paragrafo font-bold"
        >Informe o CPF (somente números)</label
      >
      <input
        type="text"
        name="cpf"
        placeholder="Digite aqui, somente números."
        class="nlf-input nlf-input--foco w-full {$errors.cpf != undefined
          ? 'nlf-input--invalido'
          : ''}"
        required
        bind:value={$form.cpf}
        maxlength="11"
      />
      {#if $errors.cpf}
        <span class="text-sm text-vermelho">{$errors.cpf}</span>
      {/if}
    </fieldset>
    <button type="submit" class="nlf-botao nlf-botao--submit">Conferir</button>
  </div>
  <div class="flex flex-col items-center gap-5">
    {#if $message}
      {#if page.status === 200}
        <p class="text-principal-terceira text-center">
          <span class="font-bold">{$message}</span> é cliente ativo New Life Fibra!
        </p>
      {:else if $message === "Formulário já enviado!"}
        <div class="flex flex-col items-center">
          <p class="text-center text-vermelho font-bold">
            {$message}
          </p>
          <p>Atualize a página ou tente novamente mais tarde.</p>
        </div>
      {:else}
        <p class="text-center text-vermelho font-bold">
          {$message}
        </p>
      {/if}
    {/if}
    <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY} />
    <p class="text-center">
      Obrigado por fazer parte da nossa história! :{")"}
    </p>
  </div>
</form>
