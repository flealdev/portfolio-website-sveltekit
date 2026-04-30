<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { page } from "$app/state";
  import { Turnstile } from "svelte-turnstile";
  import { superForm } from "sveltekit-superforms/client";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import { fade, scale } from "svelte/transition";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";

  // SuperForm
  let {
    turnstile = true,
    aviso = true,
    assunto = "",
    title = "Informe seu telefone <span style='color: red'>*</span>",
    desc = "",
  } = $props();
  const { form, errors, enhance, message } = superForm({
    taintedMessage:
      "Tem certeza que deseja sair? Você ainda não enviou o formulário de solicitação de contato. :(",
  });
</script>

<form
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="POST"
  class="form-leads flex flex-col gap-5 w-full max-w-125"
>
  <fieldset class="flex flex-wrap gap-2 lg:justify-between w-full items-end">
    <label class="flex flex-col gap-2 w-full sm:max-w-[18rem]">
      <div class="flex flex-col gap-1">
        <span
          class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
          >{@html title}</span
        >
        {#if desc != ""}
          <span class="nlf-nota-rodape">{@html desc}</span>
        {/if}
      </div>
      <input
        type="tel"
        name="telefone"
        placeholder="Digite seu número com DDD"
        class="nlf-input"
        bind:value={$form.telefone}
      />
      <!-- {#if $errors.telefone}
                <ErroValidacao
                    erro={$errors.telefone}
                />
            {/if} -->
    </label>
    <input
      type="hidden"
      name="_next"
      value="https://minhanewlife.com.br/obrigado"
    />
    <input type="hidden" name="_subject" value={assunto} />
    <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" />
    <input
      type="hidden"
      name="pagina"
      value={page.url.pathname + page.url.search}
    />
    <button type="submit" class="nlf-botao-compacto nlf-botao--submit"
      >Enviar</button
    >
  </fieldset>
  <!-- {#if $message}
        <ErroFormulario
            message={$message}
            mensagemSucesso="Seus dados foram enviados. <br> Em breve iremos entrar em contato com você!"
            sucesso={page.status === 200}
        />
    {/if}
    {#if turnstile}
    <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY} appearance="interaction-only"/>
    {/if} -->
  {#if aviso}
    <AvisoForm simples={true} />
  {/if}
</form>
