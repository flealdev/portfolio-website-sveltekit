<script>
  import CardRecursoAtrativo from "$lib/components/molecules/card-recurso-atrativo/card-recurso-atrativo.svelte";
  import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
  import CardProduto from "$lib/components/molecules/card-produto/card-produto.svelte";
  import PlanosSimplificados from "../planos-simplificados/planos-simplificados.svelte";
  import { manipulaModal } from "$lib/core/utils";
  import ModalLojasApp from "$lib/components/molecules/modal-lojas-app/modal-lojas-app.svelte";
  import ModalContatoInteressePlano from "$lib/components/molecules/modal-contato-interesse-plano/modal-contato-interesse-plano.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

<div
  class="flex flex-wrap w-full justify-center items-center max-lg:gap-[70px] lg:gap-[100px] lg:nlf-padding"
>
  <div class="flex flex-col w-full gap-[20px]">
    <h2
      class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco max-lg:nlf-padding"
    >
      Essencial
    </h2>
    <div
      class="flex w-full max-lg:flex-nowrap max-lg:px-5 lg:flex-wrap max-lg:overflow-auto max-lg:pb-5 md:justify-center sm:max-xl:gap-x-[50px] max-sm:gap-[30px] sm:max-xl:gap-y-[30px] xl:gap-[30px] items-center"
    >
      <CardRecursoAtrativo
        destaque={true}
        subtitulo="Planos para"
        titulo="Você"
        href="/para-voce"
        bgUrl="/assets/planos-voce.webp"
        class=""
      />
      <CardRecursoAtrativo
        destaque={true}
        subtitulo="Planos para"
        titulo="Empresas"
        href="/para-empresas"
        bgUrl="/assets/planos-empresa.webp"
        class=""
      />
      <CardRecursoAtrativo
        onclick={() => {
          manipulaModal(
            "modal-contato-consultoria",
            ModalContatoInteressePlano,
            undefined,
            { titulo: "Obtenha mais informações!" }
          );
        }}
        destaque={false}
        subtitulo="Informações e"
        titulo="Consultoria"
        bgUrl="/assets/informacoes-consultoria.webp"
        class=""
      />
      <CardRecursoAtrativo
        onclick={() => {
          manipulaModal("modal-lojas-app", ModalLojasApp);
        }}
        destaque={false}
        subtitulo="Área"
        titulo="do Cliente"
        bgUrl="/assets/area-cliente.webp"
        class=""
      />
    </div>
  </div>
  <div class="flex flex-col w-full items-center gap-[30px] max-lg:nlf-padding">
    <PlanosSimplificados />
    <!-- <div
      class="flex flex-wrap gap-x-[20px] gap-y-[50px] justify-center place-items-center w-full overflow-x-auto pb-[30px]"
    >
      <CardProduto
        plano="800 mega"
        tituloBotao="Saiba mais"
        destaque={true}
        class=""
      />
      <CardProduto plano="700 mega" tituloBotao="Saiba mais" class="" />
      <CardProduto
        plano="100 mega"
        tituloBotao="Saiba mais"
        class="col-span-2"
      />
    </div> -->
    <BotaoCta
      titulo="Catálogo"
      href="/planos"
      containerClasses="max-lg:px-[20px] n w-full justify-center flex"
    />
  </div>
</div>
