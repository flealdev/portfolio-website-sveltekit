<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { page } from "$app/state";
  import { superForm } from "sveltekit-superforms/client";
  import { Turnstile } from "svelte-turnstile";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import { fade, scale } from "svelte/transition";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";

  /** @type {{assunto?: string}} */
  let { assunto = "" } = $props();

  // SuperForm
  const { form, errors, enhance, message } = superForm({
    taintedMessage:
      "Tem certeza que deseja sair? Você ainda não enviou o formulário de solicitação de contato. :(",
  });

  // {$errors.motivo != undefined ? "nlf-input nlf-input--foco-invalid" : ""}
</script>

<form
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="POST"
  class="flex flex-col gap-5 w-full"
>
  <fieldset class="flex flex-wrap gap-3 justify-between">
    <label class="flex flex-col gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Motivo do contato <span class="text-vermelho">*</span></span
      >
      <select
        name="motivo"
        id="motivo"
        class="nlf-input nlf-input--foco w-full"
        required
        bind:value={$form.motivo}
      >
        <option value="" disabled selected>Informe o motivo do contato</option>
        <option value="Comercial (planos, velocidades, valores)"
          >Comercial (planos, velocidades, valores)</option
        >
        <option value="Ouvidoria (críticas, reclamações, sugestões)"
          >Ouvidoria (críticas, reclamações, sugestões)</option
        >
        <option value="Informações sobre visita técnica"
          >Informações sobre visita técnica</option
        >
        <option value="Informações sobre troca de endereço, titular, etc"
          >Informações sobre troca de endereço, titular, etc</option
        >
        <option value="Torres de telecomunicação"
          >Torres de telecomunicação</option
        >
        <option value="Estruturação de prédio/condomínio"
          >Estruturação de prédio/condomínio</option
        >
        <option value="Assuntos financeiros (renegociação, parcelamento, etc)"
          >Assuntos financeiros (renegociação, parcelamento, etc)</option
        >
        <option value="Atendimento empresarial (B2B, condomínios, etc)"
          >Atendimento empresarial (B2B, condomínios, etc)</option
        >
        <option value="Serviços personalizados (SLA/Atendimento/Suporte)"
          >Serviços personalizados (SLA/Atendimento/Suporte)</option
        >
        <option value="Outros">Outros</option>
      </select>
      {#if $form.motivo === "Ouvidoria (críticas, reclamações, sugestões)"}
        <span class="text-sm" in:scale out:fade
          >Lembre-se: possuímos um <a href="/avalie" class="link-line-solid"
            >canal de avaliacões e ouvidoria</a
          >.</span
        >
      {/if}
      <!-- {#if $errors.motivo}
                <ErroValidacao
                    erro={$errors.motivo}
                />
            {/if} -->
    </label>
    {#if $form.motivo === "Comercial (planos, velocidades, valores)"}
      <label
        class="flex flex-col gap-1 w-full pl-10 border-l-4 border-auxiliar-primeira/20 rounded-lg"
        in:scale
        out:fade
      >
        <span
          class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
          >Cidade <span class="text-vermelho">*</span></span
        >
        <input
          type="text"
          name="cidade"
          placeholder="Informe a cidade onde você mora"
          class="text-sm nlf-input nlf-input--foco"
          required
          bind:value={$form.cidade}
        />
        <!-- {#if $errors.cidade}
                    <ErroValidacao erro={$errors.cidade} />
                {/if} -->
      </label>
    {/if}
    <label class="flex flex-col gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Nome <span class="text-vermelho">*</span></span
      >
      <input
        type="text"
        name="nome"
        placeholder="Digite seu nome"
        class="nlf-input nlf-input--foco"
        bind:value={$form.nome}
      />
      <!-- {#if $errors.nome}
                <ErroValidacao
                erro={$errors.nome}
            />
            {/if} -->
    </label>
    <label class="flex flex-col gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Telefone <span class="text-vermelho">*</span></span
      >
      <input
        type="tel"
        name="telefone"
        placeholder="Digite seu número com DDD"
        class="nlf-input nlf-input--foco"
        bind:value={$form.telefone}
      />
      <!-- {#if $errors.telefone}
                <ErroValidacao
                    erro={$errors.telefone}
                />
            {/if} -->
    </label>
  </fieldset>
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
