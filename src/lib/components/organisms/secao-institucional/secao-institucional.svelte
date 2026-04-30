<script>
  import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
  import CardRelato from "$lib/components/molecules/card-relato/card-relato.svelte";
</script>

<div
  class="flex max-xl:flex-col xl:flex-wrap w-full items-center justify-center max-md:gap-[50px] md:gap-20 nlf-padding"
>
  <img
    src="/assets/banner-presenca.webp"
    alt=""
    class="max-xl:w-full xl:w-[40%] max-w-120 aspect-600/1067 rounded-lg shadow-md"
  />
  <video
    src="/assets/reels-nlf.webm"
    poster="/assets/reels-poster.webp"
    autoplay
    loop
    disablepictureinpicture
    muted
    class="max-xl:w-full xl:w-[40%] max-w-120 rounded-lg shadow-md aspect-360/637"
  ></video>
  <ContainerBranco class="w-full" padding="py-10">
    <div class="flex flex-col items-center w-full gap-10">
      <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco px-5 w-full">
        Trabalhar aqui é assim:
      </h2>
      <div
        class="flex md:flex-wrap overflow-x-auto md:justify-center w-full max-sm:gap-[10px] sm:max-lg:gap-[30px] lg:gap-y-[50px] lg:gap-x-[100px] px-5 pb-2"
      >
        <CardRelato
          src="/assets/img-laiz.webp"
          alt="Foto da colaboradora Laíz"
          subtitulo="Colaboradora New Life desde 2022"
          titulo="Laíz Dutra"
          classes=""
          descricao="Sou extremamente grata por fazer parte desta jornada de sucesso que impacta a vida de tantas pessoas! A New Life é a minha segunda casa."
        />
        <CardRelato
          src="/assets/colab-lisiane.webp"
          alt="Foto da colaboradora Lisiane"
          subtitulo="Colaboradora New Life desde 2022"
          titulo="Lisiane Trindade"
          classes=""
          descricao="Sinto um enorme prazer em fazer parte do time New Life, o qual contribui diariamente para o meu crescimento pessoal e profissional."
        />
        <CardRelato
          src="/assets/colab-ingridy.webp"
          alt="Foto da colaboradora Ingridy"
          subtitulo="Colaboradora New Life desde 2023"
          titulo="Ingridy Moreira"
          classes=""
          descricao="Trabalhar na New Life é um misto de sentimentos. Aqui nos tornamos pessoas e profissionais melhores, pois juntos buscamos o extraordinário todos os dias!"
        />
      </div>
      <div class="max-md:px-5">
        <BotaoCta titulo="Vagas" href="/trabalhe-conosco"  />
      </div>
    </div>
  </ContainerBranco>
</div>
