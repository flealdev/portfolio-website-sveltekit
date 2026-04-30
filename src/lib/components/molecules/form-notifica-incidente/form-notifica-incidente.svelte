<script>
  import { page } from "$app/state";
  import { superForm } from "sveltekit-superforms/client";
  import { Turnstile } from "svelte-turnstile";
  import { fade, scale } from "svelte/transition";
  import BotaoEnviando from "$lib/components/atoms/botao-enviando/botao-enviando.svelte";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";

  const { form, errors, enhance, message, delayed, submitting } = superForm({
    taintedMessage:
      "Tem certeza que deseja sair? Você ainda não enviou a notificação de incidente. :(",
    delayMs: 500,
  });
</script>

<form
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="post"
  class="flex flex-col gap-5 w-full max-w-120"
>
  <fieldset class="flex flex-col gap-3 w-full">
    <label>
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Telefone <span class="text-vermelho">*</span></span
      >
      <input
        type="tel"
        name="telefone"
        id=""
        class="nlf-input w-full"
        placeholder="Insira o seu telefone"
        required
        bind:value={$form.telefone}
      />
      <!-- {#if $errors.telefone}
          <ErroValidacao erro={$errors.telefone} />
        {/if} -->
    </label>
    <label>
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Possível incidente <span class="text-vermelho">*</span></span
      >
      <select
        name="incidente"
        id=""
        class="nlf-input w-full max-w-120"
        bind:value={$form.incidente}
        required
      >
        <option value="" disabled selected>Selecione</option>
        <option value="Possível rompimento de cabos"
          >Possível rompimento de cabos (fios caídos)</option
        >
        <option value="Troca de postes com possível dano ao cabeamento"
          >Troca de postes com possível dano ao cabeamento</option
        >
        <option value="Caixa NAP/CTO deslocada"
          >Caixinha do poste fora do local</option
        >
        <option
          value="LED vermelho no modem/ONU ou LED LOS em mais de um cliente de uma mesma rota"
          >Perda de conexão geral no bairro/rua (luz vermelha no equipamento de
          fibra ótica)</option
        >
        <option value="Cabeamento muito baixo ou em situação inadequada"
          >Cabeamento muito baixo ou em situação inadequada</option
        >
        <option value="Outros">Outros</option>
      </select>
    </label>
    {#if $form.incidente === "Outros"}
      <label
        class="pl-5 border-l-4 rounded-lg border-auxiliar-primeira/20 py-2"
        in:scale
        out:fade
      >
        <span
          class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
          >Defina melhor o possível incidente <span class="text-vermelho"
            >*</span
          ></span
        >
        <input
          type="text"
          name="outroTipoIncidente"
          placeholder="Informe mais detalhes em poucas palavras"
          bind:value={$form.outroTipoIncidente}
          class="nlf-input w-full"
          required
        />
        <!-- {#if $errors.outroTipoIncidente}
            <ErroValidacao erro={$errors.outroTipoIncidente} />
          {/if} -->
      </label>
    {/if}
    <label>
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Endereço <span class="text-vermelho">*</span></span
      >
      <input
        type="text"
        name="endereco"
        id=""
        placeholder="Informe o endereço do local do possível incidente"
        class="nlf-input w-full"
        required
        bind:value={$form.endereco}
      />
      <!-- {#if $errors.endereco}
          <ErroValidacao erro={$errors.endereco} />
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
    value="ALERTA - Possível Incidente - New Life Fibra"
  />
  <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" />
  <button type="submit" class="nlf-botao nlf-botao--submit"> Enviar </button>
</form>

<style lang="postcss">
  input[type="text"] {
    @apply mb-0;
  }
</style>
