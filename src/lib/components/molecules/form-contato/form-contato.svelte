<script>
  import { page } from "$app/state";
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import { fade, scale } from "svelte/transition";

  let {
    classes = "",
    descricao = "Preencha os dados abaixo, entraremos em contato com você!",
    titulo = "Preencha para mais informações",
    largura = "min-w-66 max-sm:w-full sm:w-[20rem]",
  } = $props();

  const { form, errors, enhance, message } = superForm({
    taintedMessage:
      "Tem certeza que deseja sair? Você ainda não enviou o formulário de informações. :(",
  });
</script>

<form
  id="info"
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="POST"
  class="max-lg:order-2 flex flex-col items-center gap-5 justify-center {largura} {classes}"
>
  <div class="flex flex-col w-full gap-2">
    <h3 class="nlf-titulo-h3 text-auxiliar-primeira dark:text-branco">
      {titulo}
    </h3>
    <p class="nlf-paragrafo">{descricao}</p>
  </div>
  <fieldset class="flex flex-col gap-3 items-center justify-center w-full">
    <label class="flex flex-col gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Assunto <span class="text-vermelho">*</span></span
      >
      <select
        name="assunto"
        id="assunto"
        class="nlf-input nlf-input--foco w-full"
        bind:value={$form.assunto}
        required
      >
        <option value="" disabled selected>Informe o assunto</option>
        <option value="Comercial (planos, velocidades, valores)"
          >Comercial (Planos, velocidades, valores)</option
        >
        <option value="Financeiro (faturas, pagamentos, débitos)"
          >Financeiro (faturas, pagamentos, débitos)</option
        >
        <option value="Ampliação de velocidade">Ampliação de velocidade</option>
        <option value="Renovação de contrato">Renovação de contrato</option>
        <option value="Atendimento empresarial (B2B, condomínios, etc)"
          >Atendimento empresarial (B2B, condomínios, etc)</option
        >
        <option value="Suporte técnico">Suporte técnico</option>
        <option value="Outros">Outros</option>
      </select>
      <!-- {#if $errors.assunto}
                <ErroValidacao erro={$errors.assunto} />
            {/if} -->
    </label>
    {#if $form.assunto === "Comercial (planos, velocidades, valores)"}
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
          class="nlf-input nlf-input--foco"
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
        placeholder="Informe o seu nome completo"
        class="nlf-input nlf-input--foco"
        required
        bind:value={$form.nome}
      />
      <!-- {#if $errors.nome}
                <ErroValidacao erro={$errors.nome} />
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
        placeholder="Informe o número com DDD"
        class="nlf-input nlf-input--foco"
        required
        bind:value={$form.telefone}
      />
      <!-- {#if $errors.telefone}
                <ErroValidacao erro={$errors.telefone} />
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
  <input
    type="hidden"
    name="_subject"
    value={`${$form.assunto === "Comercial (planos, velocidades, valores)" ? "LEAD - Interessado -" : "CONTATO - Informações -"} New Life Fibra`}
  />
  <!-- <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" /> -->
  <div class="flex flex-col gap-3">
    <button type="submit" class="nlf-botao nlf-botao--submit mt-3 self-center"
      >Enviar</button
    >
    <!-- {#if $message}
        <ErroFormulario
            message={$message}
            mensagemSucesso="Seus dados foram enviados. <br> Em breve iremos entrar em contato com você!"
            sucesso={page.status === 200}
        />
    {/if}
    <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY} /> -->
    <AvisoForm />
  </div>
</form>
