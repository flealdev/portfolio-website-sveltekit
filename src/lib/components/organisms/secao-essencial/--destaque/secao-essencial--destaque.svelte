<script>
  import CardRecursoAtrativoDestaque from "$lib/components/molecules/card-recurso-atrativo/--destaque/card-recurso-atrativo--destaque.svelte";
  import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
  import CardProduto from "$lib/components/molecules/card-produto/card-produto.svelte";
  import PlanosSimplificados from "$lib/components/organisms/planos-simplificados/planos-simplificados.svelte";
  import { manipulaModal } from "$lib/core/utils";
  import ModalLojasApp from "$lib/components/molecules/modal-lojas-app/modal-lojas-app.svelte";
  import ModalContatoInteressePlano from "$lib/components/molecules/modal-contato-interesse-plano/modal-contato-interesse-plano.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

<div class="w-full lg:nlf-padding">
  <div
    class="flex flex-wrap w-full justify-center items-center lg:rounded-2xl md:border dark:max-md:rounded-3xl md:border-[gold] dark:border-branco max-lg:shadow-[0_10px_5px_rgb(255,215,0,0.3),0_-10px_5px_rgb(255,215,0,0.3)] dark:shadow-[0_10px_5px_rgb(255,255,255,0.3),0_-10px_5px_rgb(255,255,255,0.3)] lg:shadow-[-10px_10px_50px_10px_rgb(255,215,0,0.3),10px_-10px_50px_10px_rgb(255,215,0,0.3)]"
  >
    <div
      class="w-full dark:bg-opacity-0 bg-principal-terceira pb-10 dark:max-md:pb-0 dark:md:pb-5 pt-10 lg:px-5 lg:rounded-t-2xl"
    >
      <h2 class="nlf-titulo-h2 font-black text-branco max-lg:nlf-padding">
        Essencial
      </h2>
    </div>
    <div
      class="flex flex-col max-lg:gap-[70px] lg:gap-[100px] py-10 lg:rounded-b-2xl dark:bg-opacity-0 bg-[orange] w-full"
    >
      <div
        class="flex w-full max-lg:flex-nowrap max-lg:px-5 lg:flex-wrap max-lg:overflow-auto max-lg:py-5 md:justify-center sm:max-xl:gap-x-[50px] max-sm:gap-[30px] sm:max-xl:gap-y-[30px] xl:gap-[50px] items-center"
      >
        <CardRecursoAtrativoDestaque
          destaque={true}
          subtitulo="Planos para"
          titulo="Você"
          href="/para-voce"
          bgUrl="/assets/planos-voce.webp"
          class=""
        >
          <svg
            viewBox="0 0 24 24"
            class="fill-[gold] w-full max-xl:max-w-[45px] xl:max-w-[60px]"
            ><circle class="cls-1" cx="12" cy="20" r="2" /><path
              class="cls-1"
              d="M17.1,15.59a1.984,1.984,0,0,1-1.133-.354,7.088,7.088,0,0,0-7.93,0,2,2,0,1,1-2.27-3.293,10.975,10.975,0,0,1,12.47,0A2,2,0,0,1,17.1,15.59Z"
            /><path
              class="cls-1"
              d="M21,8.581a1.992,1.992,0,0,1-1.058-.3,14.988,14.988,0,0,0-15.88,0A2,2,0,0,1,1.94,4.884a18.988,18.988,0,0,1,20.12,0A2,2,0,0,1,21,8.581Z"
            /></svg
          >
        </CardRecursoAtrativoDestaque>
        <CardRecursoAtrativoDestaque
          destaque={true}
          subtitulo="Planos para"
          titulo="Empresas"
          href="/para-empresas"
          bgUrl="/assets/planos-empresa.webp"
          class=""
        >
          <svg
            viewBox="0 0 16 16"
            class="fill-[gold] w-full max-xl:max-w-[40px] xl:max-w-[55px]"
            ><path
              d="M0,5h16V0H0V5z M12,1h3v2h-3V1z M5,1h2v1H5V1z M5,3h2v1H5V3z M2,1h2v1H2V1z M2,3h2v1H2V3z"
            /><path
              d="M0,11h7v3H0v2h16v-2H9v-3h7V6H0V11z M12,7h3v2h-3V7z M5,7h2v1H5V7z M5,9h2v1H5V9z M2,7h2v1H2V7z M2,9h2v1H2V9z"
            /></svg
          >
        </CardRecursoAtrativoDestaque>
        <CardRecursoAtrativoDestaque
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
        >
          <svg
            viewBox="0 0 24 24"
            class="w-full max-xl:max-w-[45px] xl:max-w-[60px] fill-principal-terceira"
            ><path
              d="M13 14h3.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5h-13C2.673 2 2 2.673 2 3.5V18l5.333-4H13zm-9-.1.154-.016L4 14v-.1z"
            /><path
              d="M20.5 8H20v6.001c0 1.1-.893 1.993-1.99 1.999H8v.5c0 .827.673 1.5 1.5 1.5h7.167L22 22V9.5c0-.827-.673-1.5-1.5-1.5z"
            /></svg
          >
        </CardRecursoAtrativoDestaque>
        <CardRecursoAtrativoDestaque
          onclick={() => {
            manipulaModal("modal-lojas-app", ModalLojasApp);
          }}
          destaque={false}
          subtitulo="Área"
          titulo="do Cliente"
          bgUrl="/assets/area-cliente.webp"
          class=""
        >
          <svg
            viewBox="0 0 24 24"
            class="w-full max-xl:max-w-[45px] xl:max-w-[60px] fill-principal-terceira"
            ><g id="info" /><g id="icons"
              ><g id="user"
                ><ellipse cx="12" cy="8" rx="5" ry="6" /><path
                  d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"
                /></g
              ></g
            ></svg
          >
        </CardRecursoAtrativoDestaque>
      </div>
      <div
        class="flex flex-col w-full items-center gap-[30px] max-lg:nlf-padding"
      >
        <PlanosSimplificados />
        <BotaoCta
          titulo="Planos"
          href="/planos"
          containerClasses="max-lg:px-[20px] n w-full justify-center flex"
        />
      </div>
    </div>
  </div>
</div>
