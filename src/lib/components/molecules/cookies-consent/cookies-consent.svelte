<script>
  import { browser } from "$app/environment";
  import Botao from "$lib/components/atoms/botao/botao.svelte";
  import {
    criaCookie,
    hideModalFlexHidden,
    retornaCookie,
  } from "$lib/core/utils";
  import { onMount } from "svelte";

  let montado = $state(false);
  onMount(() => {
    montado = true;
  });

  let cookieConsentido = $state(false);
  if (browser) {
    cookieConsentido = retornaCookie("consent");
  }
</script>

{#if montado && !cookieConsentido}
  <div
    id="cookies-consent"
    class="nlf-padding fixed w-full border-t-10 border-vermelho bottom-0 left-0 py-10 bg-principal-primeira text-branco z-50000"
  >
    <div
      class="flex max-md:flex-col md:justify-around gap-[20px] nlf-container"
    >
      <div class="flex flex-col gap-[10px] max-w-240">
        <div class="flex flex-col gap-[2px]">
          <h3 class="nlf-titulo-h3">Nosso site utiliza cookies</h3>
          <p class="nlf-subtitulo--h3">
            Cookies são dados úteis para os computadores
          </p>
        </div>
        <p class="nlf-nota-rodape">
          Os dados que armazenamos são públicos, não individuais, não
          personalizados e utilizados somente para fins de anúncios e análise de
          interações com o site. Não armazenamos dados sensíveis nem mesmo dados
          pessoais. Ao continuar navegando pelo site você dá consentimento para
          o armazenamento destes dados.
        </p>
        <p class="nlf-nota-rodape">
          Consulte nossos <a href="/privacidade" class=" link-underline">
            termos de privacidade e LGPD</a
          >.
        </p>
      </div>
      <Botao
        titulo="Entendi"
        tipografia={false}
        onclick={() => {
          hideModalFlexHidden("cookies-consent", true);
          criaCookie("consent", "true");
        }}
        class="bg-principal-terceira nlf-enfase"
        textCor="text-branco"
      />
    </div>
  </div>
{/if}
