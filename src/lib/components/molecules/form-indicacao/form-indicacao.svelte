<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { page } from "$app/state";
  import { superForm } from "sveltekit-superforms/client";
  import { Turnstile } from "svelte-turnstile";
  import ErroValidacao from "$lib/components/atoms/aviso-erro-validacao/aviso-erro-validacao.svelte";
  import ErroFormulario from "$lib/components/atoms/aviso-erro-formulario/aviso-erro-formulario.svelte";
  import { fade } from "svelte/transition";

  const { form, errors, enhance, message } = superForm({
    taintedMessage:
      "Tem certeza que deseja sair? Você ainda não enviou a sua indicação. :(",
  });

  let amigo2 = $state(false);
  let amigo3 = $state(false);
  let amigo4 = $state(false);
  let amigo5 = $state(false);
</script>

<form
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="post"
  class="flex flex-col items-center gap-10 w-full lg:max-w-200"
>
  <fieldset class="flex flex-col gap-2 justify-between w-full dark:text-branco">
    <legend class="nlf-enfase text-auxiliar-primeira dark:text-branco mb-2">
      Informe os seus dados
    </legend>
    <div class="flex flex-wrap gap-3 justify-between w-full">
      <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
        <span class="nlf-paragrafo"
          >Nome <span class="text-vermelho">*</span></span
        >
        <input
          type="text"
          name="nomeCliente"
          placeholder="Digite o seu nome completo"
          class="nlf-input nlf-input--foco"
          bind:value={$form.nomeCliente}
          required
        />
        <!-- {#if $errors.nomeCliente}
                    <ErroValidacao
                        erro={$errors.nomeCliente}
                    />
                {/if} -->
      </label>
      <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
        <span class="nlf-paragrafo"
          >Telefone <span class="text-vermelho">*</span></span
        >
        <input
          type="tel"
          name="telefoneCliente"
          placeholder="Digite o número com DDD"
          class="nlf-input nlf-input--foco"
          bind:value={$form.telefoneCliente}
          required
        />
        <!-- {#if $errors.telefoneCliente}
                    <ErroValidacao
                        erro={$errors.telefoneCliente}
                    />
                {/if} -->
      </label>
    </div>
  </fieldset>
  <fieldset class="flex flex-col gap-5 w-full dark:text-branco">
    <div class="flex flex-col gap-2 justify-between w-full">
      <legend class="w-full nlf-enfase text-auxiliar-primeira dark:text-branco"
        >Informe os dados do seu amigo</legend
      >
      <div class="flex flex-wrap gap-3 justify-between w-full">
        <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
          <span class="nlf-paragrafo"
            >Nome <span class="text-vermelho">*</span></span
          >
          <input
            type="text"
            name="nomeAmigo"
            placeholder="Ex.: Fulano de Tal"
            class="nlf-input nlf-input--foco"
            bind:value={$form.nomeAmigo}
            required
          />
          <!-- {#if $errors.nomeAmigo}
                      <ErroValidacao
                          erro={$errors.nomeAmigo}
                      />
                  {/if} -->
        </label>
        <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
          <span class="nlf-paragrafo"
            >Telefone <span class="text-vermelho">*</span></span
          >
          <input
            type="tel"
            name="telefoneAmigo"
            placeholder="Ex.: 55 999599090"
            class="nlf-input nlf-input--foco"
            bind:value={$form.telefoneAmigo}
            required
          />
          <!-- {#if $errors.telefoneAmigo}
                      <ErroValidacao
                          erro={$errors.telefoneAmigo}
                      />
                  {/if} -->
        </label>
        <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
          <span class="nlf-paragrafo">Instagram do seu amigo</span>
          <input
            type="text"
            name="instagramAmigo"
            placeholder="Ex.: fulano2025"
            class="nlf-input nlf-input--foco"
            bind:value={$form.instagramAmigo}
          />
          <!-- {#if $errors.instagramAmigo}
                      <ErroValidacao
                          erro={$errors.instagramAmigo}
                      />
                  {/if} -->
        </label>
      </div>
    </div>
    <button
      id="adiciona-amigo2"
      class="mt-2 text-sm text-preto flex items-center justify-center font-bold rounded-xl p-3 text-center w-full max-lg:max-w-40 lg:max-w-48 cursor-pointer bg-[gold] hover:shadow-[0_0_5px_rgba(0,0,0,0.5)] transition-all duration-500"
      onclick={() => {
        amigo2 = true;
        document.getElementById("adiciona-amigo2").style.display = "none";
        document.getElementById("adiciona-amigo3").style.display = "flex";
      }}>Indicar mais um</button
    >
    {#if amigo2}
      <div class="flex flex-col gap-2 justify-between w-full" transition:fade>
        <p class="nlf-enfase text-azul-3">Dados do segundo amigo:</p>
        <div class="flex flex-wrap gap-3 justify-between w-full">
          <input type="hidden" name=":::::::::" />
          <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
            <span class="nlf-paragrafo"
              >Nome <span class="text-vermelho">*</span></span
            >
            <input
              type="text"
              name="nomeAmigo2"
              placeholder="Ex.: Fulano de Tal"
              class="nlf-input nlf-input--foco"
              bind:value={$form.nomeAmigo2}
              required
            />
            <!-- {#if $errors.nomeAmigo}
                    <ErroValidacao
                        erro={$errors.nomeAmigo}
                    />
                {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo"
              >Telefone <span class="text-vermelho">*</span></span
            >
            <input
              type="tel"
              name="telefoneAmigo2"
              placeholder="Ex.: 55 999599090"
              class="nlf-input nlf-input--foco"
              bind:value={$form.telefoneAmigo2}
              required
            />
            <!-- {#if $errors.telefoneAmigo}
                    <ErroValidacao
                        erro={$errors.telefoneAmigo}
                    />
                {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo">Instagram do seu amigo</span>
            <input
              type="text"
              name="instagramAmigo2"
              placeholder="Ex.: fulano2025"
              class="nlf-input nlf-input--foco"
              bind:value={$form.instagramAmigo2}
            />
            <!-- {#if $errors.instagramAmigo}
                    <ErroValidacao
                        erro={$errors.instagramAmigo}
                    />
                {/if} -->
          </label>
        </div>
      </div>
    {/if}
    <button
      id="adiciona-amigo3"
      class="mt-2 text-sm text-preto items-center justify-center font-bold rounded-xl p-3 text-center w-full max-lg:max-w-40 lg:max-w-48 cursor-pointer bg-[gold] hover:shadow-[0_0_5px_rgba(0,0,0,0.5)] transition-all duration-500 hidden"
      onclick={() => {
        amigo3 = true;
        document.getElementById("adiciona-amigo3").style.display = "none";
        document.getElementById("adiciona-amigo4").style.display = "flex";
      }}>Indicar mais um</button
    >
    {#if amigo3}
      <div class="flex flex-col gap-2 justify-between w-full" transition:fade>
        <p class="nlf-enfase text-azul-3">Dados do terceiro amigo:</p>
        <div class="flex flex-wrap gap-3 justify-between w-full">
          <input type="hidden" name=":::::::::" />

          <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
            <span class="nlf-paragrafo"
              >Nome <span class="text-vermelho">*</span></span
            >
            <input
              type="text"
              name="nomeAmigo3"
              placeholder="Ex.: Fulano de Tal"
              class="nlf-input nlf-input--foco"
              bind:value={$form.nomeAmigo3}
              required
            />
            <!-- {#if $errors.nomeAmigo}
                      <ErroValidacao
                          erro={$errors.nomeAmigo}
                      />
                  {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo"
              >Telefone <span class="text-vermelho">*</span></span
            >
            <input
              type="tel"
              name="telefoneAmigo3"
              placeholder="Ex.: 55 999599090"
              class="nlf-input nlf-input--foco"
              bind:value={$form.telefoneAmigo3}
              required
            />
            <!-- {#if $errors.telefoneAmigo}
                      <ErroValidacao
                          erro={$errors.telefoneAmigo}
                      />
                  {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo">Instagram do seu amigo</span>
            <input
              type="text"
              name="instagramAmigo3"
              placeholder="Ex.: fulano2025"
              class="nlf-input nlf-input--foco"
              bind:value={$form.instagramAmigo3}
            />
            <!-- {#if $errors.instagramAmigo}
                      <ErroValidacao
                          erro={$errors.instagramAmigo}
                      />
                  {/if} -->
          </label>
        </div>
      </div>
    {/if}
    <button
      id="adiciona-amigo4"
      class="mt-2 text-sm text-preto items-center justify-center font-bold rounded-xl p-3 text-center w-full max-lg:max-w-40 lg:max-w-48 cursor-pointer bg-[gold] hover:shadow-[0_0_5px_rgba(0,0,0,0.5)] transition-all duration-500 hidden"
      onclick={() => {
        amigo4 = true;
        document.getElementById("adiciona-amigo4").style.display = "none";
        document.getElementById("adiciona-amigo5").style.display = "flex";
      }}>Indicar mais um</button
    >
    {#if amigo4}
    <div class="flex flex-col gap-2 justify-between w-full" transition:fade>
        <p class="nlf-enfase text-azul-3">Dados do quarto amigo:</p>
        <div class="flex flex-wrap gap-3 justify-between w-full ">
          <input type="hidden" name=":::::::::" />
  
          <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
            <span class="nlf-paragrafo"
              >Nome <span class="text-vermelho">*</span></span
            >
            <input
              type="text"
              name="nomeAmigo4"
              placeholder="Ex.: Fulano de Tal"
              class="nlf-input nlf-input--foco"
              bind:value={$form.nomeAmigo4}
              required
            />
            <!-- {#if $errors.nomeAmigo}
                      <ErroValidacao
                          erro={$errors.nomeAmigo}
                      />
                  {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo"
              >Telefone <span class="text-vermelho">*</span></span
            >
            <input
              type="tel"
              name="telefoneAmigo4"
              placeholder="Ex.: 55 999599090"
              class="nlf-input nlf-input--foco"
              bind:value={$form.telefoneAmigo4}
              required
            />
            <!-- {#if $errors.telefoneAmigo}
                      <ErroValidacao
                          erro={$errors.telefoneAmigo}
                      />
                  {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo">Instagram do seu amigo</span>
            <input
              type="text"
              name="instagramAmigo4"
              placeholder="Ex.: fulano2025"
              class="nlf-input nlf-input--foco"
              bind:value={$form.instagramAmigo4}
            />
            <!-- {#if $errors.instagramAmigo}
                      <ErroValidacao
                          erro={$errors.instagramAmigo}
                      />
                  {/if} -->
          </label>

        </div>
      </div>
    {/if}
    <button
      id="adiciona-amigo5"
      class="mt-2 text-sm items-center text-preto justify-center font-bold rounded-xl p-3 text-center w-full max-lg:max-w-40 lg:max-w-48 cursor-pointer bg-[gold] hover:shadow-[0_0_5px_rgba(0,0,0,0.5)] transition-all duration-500 hidden"
      onclick={() => {
        amigo5 = true;
        document.getElementById("adiciona-amigo5").style.display = "none";
      }}>Indicar mais um</button
    >
    {#if amigo5}

    <div class="flex flex-col gap-2 justify-between w-full" transition:fade>
        <p class="nlf-enfase text-azul-3">Dados do quinto amigo:</p>
        <div class="flex flex-wrap gap-3 justify-between w-full ">
          <input type="hidden" name=":::::::::" />
  
          <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
            <span class="nlf-paragrafo"
              >Nome <span class="text-vermelho">*</span></span
            >
            <input
              type="text"
              name="nomeAmigo5"
              placeholder="Ex.: Fulano de Tal"
              class="nlf-input nlf-input--foco"
              bind:value={$form.nomeAmigo5}
              required
            />
            <!-- {#if $errors.nomeAmigo}
                      <ErroValidacao
                          erro={$errors.nomeAmigo}
                      />
                  {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo"
              >Telefone <span class="text-vermelho">*</span></span
            >
            <input
              type="tel"
              name="telefoneAmigo5"
              placeholder="Ex.: 55 999599090"
              class="nlf-input nlf-input--foco"
              bind:value={$form.telefoneAmigo5}
              required
            />
            <!-- {#if $errors.telefoneAmigo}
                      <ErroValidacao
                          erro={$errors.telefoneAmigo}
                      />
                  {/if} -->
          </label>
          <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
            <span class="nlf-paragrafo">Instagram do seu amigo</span>
            <input
              type="text"
              name="instagramAmigo5"
              placeholder="Ex.: fulano2025"
              class="nlf-input nlf-input--foco"
              bind:value={$form.instagramAmigo5}
            />
            <!-- {#if $errors.instagramAmigo}
                      <ErroValidacao
                          erro={$errors.instagramAmigo}
                      />
                  {/if} -->
          </label>

        </div>
      </div>
    {/if}
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
    value={`INDICAÇÃO - Cliente ${$form.nomeCliente} - New Life Fibra`}
  />
  <input type="hidden" name="_cc" value="indica@newlifefibra.com.br" />
  <div class="flex flex-col gap-3 items-center">
    <button type="submit" class="nlf-botao nlf-botao--submit">Enviar</button>
    <!-- {#if $message}
          <ErroFormulario
              message={$message}
              mensagemSucesso="Sua indicação foi enviada e logo entraremos em contato com o seu amigo! :) <br>Dúvidas, <a href='/contato' class='link-line-solid'>entre em contato</a>"
              sucesso={page.status === 200}
          />
      {/if}
      <Turnstile siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY}/> -->
    <AvisoForm />
  </div>
</form>
