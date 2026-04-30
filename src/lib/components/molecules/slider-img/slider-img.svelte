<script>
  import Swiper from "swiper/bundle";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { onMount } from "svelte";

  let {
    bullet = true,
    effect = "slide",
    loopAddBlankSlides = true,
    tipoImagens = "banners",
    banners = {
      imagem1: {
        node: {
          guid: "",
        },
      },
      imagem2: {
        node: {
          guid: "",
        },
      },
      imagem3: {
        node: {
          guid: "",
        },
      },
      imagem4: {
        node: {
          guid: "",
        },
      },
      imagem5: {
        node: {
          guid: "",
        },
      },
    },
    pauseOnMouseEnter = false,
    delay = 2500,
    containerClasses = "",
    slideClasses = "",
    swiperClass = ".swiper",
    pagination = {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints = {
      0: {
        slidesPerView: 1,
        enabled: true,
        navigation: {
          enabled: false,
        },
      },
      768: {
        slidesPerView: 2,
        enabled: true,
        navigation: {
          enabled: false,
        },
      },
      960: {
        slidesPerView: 3,
        enabled: true,
        navigation: {
          enabled: false,
        },
      },
    },
  } = $props();

  onMount(() => {
    new Swiper(swiperClass, {
      loop: false,
      spaceBetween: 30,
      effect,
      loopAddBlankSlides,

      // If we need pagination
      pagination,
      rewind: true,

      // Navigation arrows
      navigation: {
        nextEl: ".custom-button-next",
        prevEl: ".custom-button-prev",
      },

      autoplay: {
        delay,
        pauseOnMouseEnter,
      },
      breakpoints,
    });
  });

  const hrefImg = `https://wa.me/555433101008?text=${encodeURI("Olá! Vim do site e gostaria de atendimento comercial. [NÃO EXCLUA]")}`;
</script>

<div class="swiper flex flex-col gap-2 {containerClasses}">
  <div
    class="swiper-wrapper items-center {Object.keys(pagination).length != 0
      ? 'max-xl:pb-[50px]'
      : ''}"
  >
    {#if tipoImagens === "banners"}
    {#if banners?.imagem1}
      <div class="swiper-slide {slideClasses}">
        <a href={hrefImg} target="_blank">
          <img
            oncontextmenu={(e) => {
              e.preventDefault();
            }}
            src={tipoImagens === "banners"
              ? banners.imagem1.node.guid
              : banners[0].guid}
            alt="Banner promocional 1"
            class="rounded-lg"
          />
        </a>
      </div>
      {/if}
      {#if banners?.imagem2}
        <div class="swiper-slide {slideClasses}">
          <a href={hrefImg} target="_blank">
            <img
              oncontextmenu={(e) => {
                e.preventDefault();
              }}
              src={banners.imagem2.node.guid}
              alt="Banner promocional 1"
              class="rounded-lg"
            />
          </a>
        </div>
      {/if}
      {#if banners?.imagem3}
        <div class="swiper-slide {slideClasses}">
          <a href={hrefImg} target="_blank">
            <img
              oncontextmenu={(e) => {
                e.preventDefault();
              }}
              src={banners.imagem3.node.guid}
              alt="Banner promocional 1"
              class="rounded-lg"
            />
          </a>
        </div>
      {/if}
      {#if banners?.imagem4}
        <div class="swiper-slide {slideClasses}">
          <a href={hrefImg} target="_blank">
            <img
              oncontextmenu={(e) => {
                e.preventDefault();
              }}
              src={banners.imagem4.node.guid}
              alt="Banner promocional 1"
              class="rounded-lg"
            />
          </a>
        </div>
      {/if}
      {#if banners?.imagem5}
        <div class="swiper-slide {slideClasses}">
          <a href={hrefImg} target="_blank">
            <img
              oncontextmenu={(e) => {
                e.preventDefault();
              }}
              src={banners.imagem5.node.guid}
              alt="Banner promocional 1"
              class="rounded-lg"
            />
          </a>
        </div>
      {/if}
    {:else}
      {#each banners as banner}
        <div class="swiper-slide {slideClasses}">
          <a href={banner.guid} target="_blank">
            <img
              oncontextmenu={(e) => {
                e.preventDefault();
              }}
              src={banner.sourceUrl}
              alt="Banner promocional 1"
              class="rounded-lg"
            />
          </a>
        </div>
      {/each}
    {/if}
  </div>
  {#if Object.keys(pagination).length != 0}
    <div class="swiper-pagination 2xl:bottom-[-20px]"></div>
    <div
      class="custom-button-prev bg-ouro/80 border-3 left-3 border-amarelo-4-principal/80 rounded-full flex justify-center items-center p-3 w-max cursor-pointer nlf-grow absolute top-[40%] z-[10000]"
    >
      <svg class="w-[25px] h-[25px]" viewBox="-3.7 0 25 25">
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-Set-Filled"
            transform="translate(-423.000000, -1196.000000)"
            class="fill-azul-4-principal opacity-80"
          >
            <path
              d="M428.115,1209 L437.371,1200.6 C438.202,1199.77 438.202,1198.43 437.371,1197.6 C436.541,1196.76 435.194,1196.76 434.363,1197.6 L423.596,1207.36 C423.146,1207.81 422.948,1208.41 422.985,1209 C422.948,1209.59 423.146,1210.19 423.596,1210.64 L434.363,1220.4 C435.194,1221.24 436.541,1221.24 437.371,1220.4 C438.202,1219.57 438.202,1218.23 437.371,1217.4 L428.115,1209"
              id="chevron-left"
              sketch:type="MSShapeGroup"
            >
            </path>
          </g>
        </g>
      </svg>
    </div>
    <div
      class="custom-button-next bg-ouro/80 border-3 right-3 border-amarelo-4-principal/80 rounded-full flex justify-center items-center p-3 w-max cursor-pointer nlf-grow absolute top-[40%] z-[10000]"
    >
      <svg class="w-[25px] h-[25px] rotate-180" viewBox="-3.7 0 25 25">
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-Set-Filled"
            transform="translate(-423.000000, -1196.000000)"
            class="fill-azul-4-principal opacity-80"
          >
            <path
              d="M428.115,1209 L437.371,1200.6 C438.202,1199.77 438.202,1198.43 437.371,1197.6 C436.541,1196.76 435.194,1196.76 434.363,1197.6 L423.596,1207.36 C423.146,1207.81 422.948,1208.41 422.985,1209 C422.948,1209.59 423.146,1210.19 423.596,1210.64 L434.363,1220.4 C435.194,1221.24 436.541,1221.24 437.371,1220.4 C438.202,1219.57 438.202,1218.23 437.371,1217.4 L428.115,1209"
              id="chevron-left"
              sketch:type="MSShapeGroup"
            >
            </path>
          </g>
        </g>
      </svg>
    </div>
  {/if}
  <style>
    .swiper-pagination-bullet {
      width: 20px;
      margin-top: -100px;
      height: 20px;
      opacity: 0.5;
      background: #5372f0;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
    }
  </style>
</div>
