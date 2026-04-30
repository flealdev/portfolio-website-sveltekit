<script>
  import Topbar from "$lib/components/molecules/topbar/topbar.svelte";
  import SecaoHeader_25anos from "../secao-header/--25anos/secao-header--25anos.svelte";
    import CookiesConsent from "$lib/components/molecules/cookies-consent/cookies-consent.svelte";
  import SecaoHeader from "$lib/components/organisms/secao-header/secao-header.svelte";
  import SecaoRodape from "$lib/components/organisms/secao-rodape/secao-rodape.svelte";
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import BotaoWppFlutuante from "$lib/components/atoms/botao/--wpp-flutuante/botao--wpp-flutuante.svelte";

  let {
    children,
    tituloWpp = "Quer internet sem travamento?",
    descricaoWpp = "Nos chame no whatsapp, estamos online.",
  } = $props();

  onMount(() => {
    if (browser) {
      const botoes = [...document.querySelectorAll(".btn-whatsapp")];

      botoes.map((el) => {
        el.addEventListener("click", () => {
          gtag_report_conversion();
        });
      });
    }
  });
</script>

<SecaoHeader_25anos />
<main class="max-md:pt-5 md:pt-10 pb-20 nlf-container">
  {@render children?.()}

  <BotaoWppFlutuante {tituloWpp} {descricaoWpp}/>
</main>
<CookiesConsent />
<SecaoRodape />
