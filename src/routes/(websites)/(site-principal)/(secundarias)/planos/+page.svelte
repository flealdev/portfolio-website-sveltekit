<script>
  import ModalConsultaViabilidade from "$lib/components/molecules/modal-consulta-viabilidade/modal-consulta-viabilidade.svelte";
  import HeadingPages from "$lib/components/molecules/heading/heading.svelte";
  import SecaoCatalogoPlanos from "$lib/components/organisms/secao-catalogo-planos/secao-catalogo-planos.svelte";
  import { manipulaModal } from "$lib/core/utils.js";

  const { data } = $props();

  const { banner } = data;

  // const bannerPromo = banner.data.banners.nodes

  // const { formPlanos, formViabilidade } = data.forms;
</script>

<HeadingPages
  titulo="Catálogo de planos e preços"
  subtitulo="Tecnologias modernas e velocidades simétricas de download e upload!"
/>
<section class="flex w-full flex-col gap-5 items-center">
  <SecaoCatalogoPlanos />
  <button
    class="nlf-botao nlf-botao--destaque"
    onclick={() =>
      manipulaModal(
        `modal-contato-viabilidade`,
        ModalConsultaViabilidade,
        undefined,
        {
          display: "flex",
        }
      )}
  >
    Consultar viabilidade
  </button>
</section>
<!-- {#if bannerPromo[0].mobile || bannerPromo[0].tablet || bannerPromo[0].desktop}
        <Banner
            classes="container mx-auto max-md:order-2"
            imgClasses="md:rounded-lg md:shadow-lg"
            srcMobile={bannerPromo[0].mobile.node.guid}
            srcTablet={bannerPromo[0].tablet.node.guid}
            srcDesktop={bannerPromo[0].desktop.node.guid}
        />
    {/if} -->
