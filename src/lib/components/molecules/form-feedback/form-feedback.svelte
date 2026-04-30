<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { superForm } from "sveltekit-superforms";
  import { page } from "$app/state";
  import { Turnstile } from "svelte-turnstile";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";
  import BotaoEnviando from "$lib/components/atoms/botao-enviando/botao-enviando.svelte";

  let { formData = {} } = $props();

  // console.log(formResult)

  const { form, errors, message, enhance, delayed, submitting } = superForm(
    formData,
    {
      taintedMessage:
        "Tem certeza que deseja sair? Você ainda não enviou a sua avaliação. :(",
    }
  );

  // $: letras = $form.relato.length;
</script>

<form class="flex flex-col items-center gap-5" method="POST" action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa" >
  <p
    class="w-full text-right dark:self-end text-xs text-vermelho dark:bg-vermelho dark:text-branco dark:px-2 dark:py-1 dark:w-max rounded-md"
  >
    Recurso em teste, em caso de problemas <a
      href="/contato"
      class="link-line-solid">entre em contato</a
    >.
  </p>
  <fieldset class="flex flex-wrap gap-3 justify-between">
    <label
      class="flex flex-wrap lg:justify-between gap-x-10 gap-y-2 w-full cursor-pointer items-center"
    >
      <span
        class="nlf-paragrafo font-bold min-w-39 md:w-[20%] text-auxiliar-primeira dark:text-branco"
        >Avalie de 0 a 10<span class="text-vermelho">*</span></span
      >
      <div class="flex gap-5 items-center max-md:w-full md:w-[70%]">
        <div class="flex flex-col gap-1 w-20">
          <p class="nlf-nota_rodape dark:text-branco">Digite</p>
          <input
            type="number"
            name="numeroNota"
            bind:value={$form.nota}
            placeholder="0 a 10"
            required
            min="0"
            max="10"
            class="w-full nlf-input nlf-input--foco"
          />
        </div>
        <div class="flex flex-col gap-1 w-[75%]">
          <p class="nlf-nota_rodape dark:text-branco">Clique e arraste</p>
          <input
            type="range"
            min="0"
            max="10"
            name="nota"
            class=""
            required
            bind:value={$form.nota}
          />
        </div>
      </div>

      {#if $errors.nota}
        <ErroValidacao erro={$errors.nota} />
      {/if}
    </label>
    <label class="flex flex-col items-end gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco w-full"
        >Relate o que você achar necessário e nos ajude a melhorar :) <span
          class="text-vermelho">*</span
        ></span
      >
      <textarea
        name="relato"
        id=""
        cols="30"
        rows="10"
        class="nlf-input-textarea w-full {$errors.relato != undefined
          ? 'nlf-input-invalid'
          : ''}"
        placeholder="Digite o seu relato"
        maxlength="1000"
        bind:value={$form.relato}
        required
></textarea>
      <!-- <span class="font-bold text-auxiliar-primeira dark:text-branco"
        ><span style="color: {letras === 1000 ? 'red' : '#617EF6'}"
          >{letras}</span
        >/1000</span
      > -->
      {#if $errors.relato}
        <ErroValidacao erro={$errors.relato} />
      {/if}
    </label>
    <fieldset class="flex flex-col gap-[10px] items-center w-full mt-5">
      <p class="w-full dark:text-branco nlf-paragrafo">
        Caso seja necessário <strong
          >poderemos entrar em contato com você</strong
        >, para isso preencha os dados abaixo:
      </p>
      <div class="flex flex-wrap gap-3 justify-between w-full">
        <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
          <span
            class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
            >Primeiro nome</span
          >
          <input
            type="text"
            name="nome"
            placeholder="Digite o seu primeiro nome"
            class="nlf-input nlf-input--foco{$errors.nome != undefined
              ? 'nlf-input-invalid'
              : ''}"
            bind:value={$form.nome}
          />
          {#if $errors.nome}
            <ErroValidacao erro={$errors.nome} />
          {/if}
        </label>
        <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
          <span
            class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
            >Telefone</span
          >
          <input
            type="tel"
            name="telefone"
            placeholder="Informe o número com DDD"
            class="nlf-input nlf-input--foco{$errors.telefone != undefined
              ? 'nlf-input-invalid'
              : ''}"
            bind:value={$form.telefone}
          />
          {#if $errors.telefone}
            <ErroValidacao erro={$errors.telefone} />
          {/if}
        </label>
      </div>
    </fieldset>
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
    value="AVALIAÇÃO - Página Avalie - New Life Fibra"
  />
  <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" />
  <!-- submitting={$submitting}
    delayed={$delayed} -->
    <button type="submit" class="nlf-botao nlf-botao--submit"> Enviar </button>

  <!-- <BotaoEnviando
    submitting={$submitting}
    delayed={$delayed}
    classesBotaoAtivo="nlf-botao nlf-botao--submit"
    classesBotaoInativo="opacity-30"
    spinnerSrc="/assets/spinner.png"
    classesSpinner="aspect-square max-w-7.5 w-full"
    nomeBotao="Enviar"
  />
  {#if $message}
    <ErroFormulario
      message={$message}
      mensagemSucesso="Que tal você nos avaliar também nas outras plataformas? <br> Muito obrigado!"
      sucesso={page.status === 200}
    />
  {/if} -->
  <!-- <Turnstile siteKey="0x4AAAAAAAG5H3_hCYg3UEtX" /> -->
  <AvisoForm />
</form>
