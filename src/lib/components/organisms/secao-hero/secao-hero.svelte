<script>
  import FormContatoWpp from "$lib/components/molecules/form-contato/--wpp/form-contato--wpp.svelte";
  import SliderImgPlaceholder from "$lib/components/molecules/slider-img/--placeholder/slider-img--placeholder.svelte";
  import SliderImg from "$lib/components/molecules/slider-img/slider-img.svelte";

  const { img } = $props();
</script>

<div
  class=" bg-branco border-[5px] border-preto/30 max-xl:rounded-b-[50px] max-xl:rounded-t-[10px] xl:rounded-tr-[150px] xl:rounded-br-[150px] xl:rounded-tl-[20px] xl:rounded-bl-[20px] p-10 flex flex-wrap justify-center items-center max-md:gap-5 md:max-lg:gap-10 lg:gap-[50px] max-lg:justify-center max-md:items-center w-full"
>
  <div
    class=" flex flex-col max-md:gap-5 md:max-lg:gap-10 lg:gap-[50px] items-center justify-center"
  >
    <div
      class="flex gap-[5px] w-full flex-col justify-center items-center  z-[1000] xl:max-w-[30rem]"
    >
      <div
        class="flex flex-col w-full sm:items-center justify-center text-center"
      >
        <p
          class="font-extralight max-sm:text-2lg sm:max-md:text-lg md:max-lg:text-2lg lg:max-3xl:text-[25px] 3xl:text-[30px] leading-sm"
        >
          Subtítulo
        </p>
        <h1
          class="font-black max-sm:text-3xl sm:max-md:text-xl md:max-lg:text-3xl lg:max-3xl:text-[40px] 3xl:text-[55px] leading-sm"
        >
          Provedor de internet
        </h1>
      </div>
      <p class="nlf-paragrafo text-center">
        Descrição do produto destacando os pontos fortes de cada opção.
      </p>
    </div>
    <FormContatoWpp
      class="max-lg:hidden z-[1000]"
      textContainerClasses="lg:text-center"
    />
  </div>

  <!--{#await fetchBannersDoMes()}-->
  <!--  <SliderImgPlaceholder/>-->
  <!--{:then res}-->
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
    />
  <!--{/await}-->
  <FormContatoWpp
    class="lg:hidden z-[1000]"
    textContainerClasses="lg:text-center"
  />
</div>