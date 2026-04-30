<script>
  import FormContato from "$lib/components/molecules/form-contato/form-contato.svelte";
  import Premios from "$lib/components/molecules/premios/premios.svelte";
  import PremiosDestaque from "$lib/components/molecules/premios/--destaque/premios--destaque.svelte";
  import Banner from "$lib/components/atoms/banner/banner.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

<div class="w-full nlf-padding">
  <ContainerBranco classes="flex w-full 2xl:mt-10">
    <div
      class="flex flex-wrap max-sm:justify-center sm:max-xl:justify-around xl:justify-center w-full max-xl:gap-[50px] xl:max-2xl:gap-[100px] 2xl:gap-[200px]"
    >
      <div
        class="flex gap-[20px] flex-col sm:items-center max-sm:w-full sm:max-xl:w-[45%] xl:w-120"
      >
        <div class="flex gap-[5px] flex-col justify-center">
          <div class="flex flex-col w-full sm:items-center justify-center">
            <p
              class="font-extralight max-sm:text-2lg sm:max-md:text-lg md:max-lg:text-2lg lg:max-3xl:text-[25px] 3xl:text-[30px] leading-sm text-principal-primeira dark:text-branco"
            >
              Internet veloz e estável
            </p>
            <h1
              class="font-black max-sm:text-3xl sm:max-md:text-xl md:max-lg:text-3xl lg:max-3xl:text-[40px] 3xl:text-[55px] leading-sm text-principal-primeira dark:text-branco"
            >
              New Life Fibra
            </h1>
          </div>
          <p
            class="nlf-paragrafo sm:text-center max-sm:max-w-[20rem] sm:max-w-100"
          >
            Planos de internet banda larga com velocidade simétrica,
            estabilidade e qualidade.
          </p>
        </div>
        <img
          src="/assets/banners/banner1.webp"
          alt=""
          class="rounded-lg w-full aspect-square max-sm:max-w-100 sm:max-xl:max-w-[20rem]"
        />
      </div>
      <FormContato
        titulo="Quer mais informações?"
        largura="max-sm:w-full sm:max-xl:w-[45%] xl:w-100"
      />
    </div>
  </ContainerBranco>
</div>
