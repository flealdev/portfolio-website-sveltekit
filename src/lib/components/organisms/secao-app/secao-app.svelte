<script>
  import Banner from "$lib/components/atoms/banner/banner.svelte";
</script>

<div class="flex flex-col max-lg:w-full items-center gap-[20px]">
  <Banner
    href="/aplicativo"
    srcMobile="/assets/template/banner-auxiliar-pequena.jpg"
    srcTablet="/assets/template/banner-auxiliar-medio.jpg"
    srcDesktop="/assets/template/banner-auxiliar-grande.jpg"
    imgClasses="max-sm:aspect-600/1280 sm:max-lg:aspect-1000/321 lg:aspect-1920/480"
  />
  <div class="flex justify-around items-center max-lg:gap-[20px] lg:gap-[30px]">
    <a
      href="https://play.google.com/store/apps/details?id=br.com.mksolutions.mksac.newlife&hl=pt_BR&gl=US&pli=1"
      target="_blank"
      class="flex justify-center nlf-grow cursor-pointer"
    >
      <img
        src="/assets/template/botao-auxiliar.jpg"
        alt=""
        class="w-full max-md:max-w-40 md:max-w-52"
      />
    </a>
    <a
            href="https://play.google.com/store/apps/details?id=br.com.mksolutions.mksac.newlife&hl=pt_BR&gl=US&pli=1"
            target="_blank"
            class="flex justify-center nlf-grow cursor-pointer"
    >
      <img
              src="/assets/template/botao-auxiliar.jpg"
              alt=""
              class="w-full max-md:max-w-40 md:max-w-52"
      />
    </a>
  </div>
</div>
