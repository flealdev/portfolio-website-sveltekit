<script>
  import FormContatoWpp from "$lib/components/molecules/form-contato/--wpp/form-contato--wpp.svelte";
  import SliderImgPlaceholder from "$lib/components/molecules/slider-img/--placeholder/slider-img--placeholder.svelte";
  import SliderImg from "$lib/components/molecules/slider-img/slider-img.svelte";
  import { fetchBannersDoMes } from "$lib/core/models/fetch";
  import Secao_25anos from "../../secao-25anos/secao-25anos.svelte";

  const { img } = $props();
</script>

<div
  class=" bg-azul-4-principal border-[5px] border-verde-4-principal max-xl:rounded-b-[50px] max-xl:rounded-t-[10px] xl:rounded-tr-[150px] xl:rounded-br-[150px] xl:rounded-tl-[20px] xl:rounded-bl-[20px] p-10 flex flex-wrap justify-center items-center max-md:gap-5 md:max-lg:gap-10 lg:gap-[50px] max-lg:justify-center max-md:items-center w-full"
>
  <div
    class=" flex flex-col max-md:gap-5 md:max-lg:gap-10 lg:gap-[50px] items-center justify-center"
  >
    <div
      class="flex gap-[5px] w-full flex-col justify-center items-center text-branco-1-principal-claro z-[1000] xl:max-w-[30rem]"
    >
      <div
        class="flex flex-col w-full sm:items-center justify-center text-center"
      >
        <p
          class="font-extralight max-sm:text-2lg sm:max-md:text-lg md:max-lg:text-2lg lg:max-3xl:text-[25px] 3xl:text-[30px] leading-sm"
        >
          Internet veloz e estável
        </p>
        <h1
          class="font-black max-sm:text-3xl sm:max-md:text-xl md:max-lg:text-3xl lg:max-3xl:text-[40px] 3xl:text-[55px] leading-sm"
        >
          New Life Fibra
        </h1>
      </div>
      <p class="nlf-paragrafo text-center">
        Planos de internet banda larga com velocidade simétrica, estabilidade e
        qualidade.
      </p>
    </div>
    <FormContatoWpp
      class="max-lg:hidden z-[1000]"
      textContainerClasses="lg:text-center"
    />
    <Secao_25anos class="max-lg:hidden lg:flex flex-col" escuro={true} />
  </div>

  {#await fetchBannersDoMes()}
    <SliderImgPlaceholder/>
  {:then res}
    <SliderImg
      slideClasses=""
      containerClasses="w-full max-lg:max-w-[400px] lg:max-w-[500px] "
      effect="cards"
      pagination={{}}
      breakpoints={{
        0: {
          slidesPerView: 1,
          enabled: true,
          navigation: {
            enabled: false,
          },
        },
      }}
      pauseOnMouseEnter={true}
      delay={2500}
      banners={res.data.banners.nodes[0]}
    />
  {/await}
  <FormContatoWpp
    class="lg:hidden z-[1000]"
    textContainerClasses="lg:text-center"
  />
</div>

<style>
  /* .gradiente-rs {
  background: #00C947;
  background: linear-gradient(120deg, rgba(0, 201, 71, 1) 30%, rgba(255, 0, 0, 1) 35%, rgba(255, 0, 0, 1) 55%, rgba(255, 228, 0, 1) 60%);
} */
</style>
