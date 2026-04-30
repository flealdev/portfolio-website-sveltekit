<script>
  import CardProdutoInformativo from "$lib/components/molecules/card-produto/--informativo/card-produto--informativo.svelte";
  import { browser } from "$app/environment";

  let { data } = $props();

  if (browser) {
    const botoes = [...document.querySelectorAll(".btn-whatsapp")];

    botoes.map((el) => {
      el.addEventListener("click", () => {
        gtag_report_conversion();
      });
    });
  }

  const nomeCampanhaAnuncio = "PDFX"
  const linkWhatsapp=`https://wa.me/555597309690?text=Ol%C3%A1%21%20Estou%20interessado%20nos%20planos.%20Vim%20pelo%20Google%20Ads.%20%5BN%C3%83O%20ALTERE - ${nomeCampanhaAnuncio}%5D`
  const plano1 = {
    nome: "1000",
    melhorpara: "família, streaming, redes sociais, jogos online",
    icones: [
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/06/ps-network-blue-bag-icon-01-01feb23.webp",
      },
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/06/9805168_logo_play_epic-games_social-media_games_icon.png",
      },
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/06/4375141_logo_xbox_icon.png",
      },
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/06/001.3_RG_2021_LOGOMARK_CIRCLE_OFFWHITE_RED_CONTAINER.png",
      },
    ],
    destaque: true,
    textoLink: "Quero!",
    googleAds: true,
  };
  const plano2 = {
    nome: "600",
    melhorpara: "youtubers, streamers, grandes familias, muitos dispositivos",
    icones: [
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/06/4375011_logo_netflix_icon.png",
      },
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/06/1298745_google_brand_branding_logo_network_icon.png",
      },
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/06/317714_video_youtube_icon.png",
      },
    ],
    destaque: false,
    textoLink: "Quero!",
    googleAds: true,
  };
  const plano3 = {
    nome: "100",
    melhorpara: "familias pequenos, home office, estudos, uso moderado",
    icones: [
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/10/dispositivos.png",
      },
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/10/estudos.png",
      },
      {
        guid: "https://cms.newlifefibra.com.br/wp-content/uploads/2023/10/office.png",
      },
    ],
    destaque: false,
    textoLink: "Quero!",
    googleAds: true,
  };
</script>

<svelte:head>
  <style>
    #DescriptionWidget {
      font-family: "Montserrat";
    }
    #DescriptionWidget > strong {
      font-weight: 900;
    }
  </style>
</svelte:head>

<div
  class="w-full h-full flex max-md:py-10 max-md:px-2 md:max-2xl:p-5 justify-center items-center gradiente max-md:h-full md:min-h-screen 2xl:py-5"
>
  <div
    class="flex max-md:flex-wrap justify-center gap-10 max-md:px-5 md:px-10 max-md:pb-10 py-10 md:items-center bg-branco rounded-xl shadow-[0_0_5rem_rgba(255,215,0,1)]"
  >
    <div
      class="flex flex-col justify-center items-center max-md:gap-20 md:gap-10 w-full"
    >
      <div
        class="flex flex-wrap max-xl:justify-center xl:justify-between w-full gap-5"
      >
        <div
          class="flex flex-col justify-center gap-5 relative w-full md:max-w-160"
        >
          <h1
            class="nlf-titulo-h1 md:max-xl:text-center text-auxiliar-primeira"
          >
            Internet veloz com muuuuita qualidade!
          </h1>
          <p class="md:max-xl:text-center">
            Venha comemorar os 25 anos da New Life com a internet de melhor
            custo benefício da região! Tá bom demaaaais!
          </p>
        </div>
        <div
          class="flex flex-col items-center justify-center gap-5 max-md:w-full md:w-max"
        >
          <a
            href={linkWhatsapp}
            class="btn-whatsapp flex justify-center items-center gap-5 bg-principal-terceira rounded-lg max-md:p-5 md:px-10 md:py-5 text-branco max-md:text-sm md:nlf-enfase uppercase font-black shadow-[-5px_5px_0_rgb(97,126,246)] text-center nlf-grow cursor-pointer"
            target="_blank"
          >
            <svg
              viewBox="0 0 512 512"
              class="w-full max-md:max-w-8 md:max-w-14"
              ><path
                d="M373.295 307.064c-6.37-3.188-37.687-18.596-43.526-20.724-5.838-2.126-10.084-3.187-14.331 3.188-4.246 6.376-16.454 20.725-20.17 24.976-3.715 4.251-7.431 4.785-13.8 1.594-6.37-3.187-26.895-9.913-51.225-31.616-18.935-16.89-31.72-37.749-35.435-44.126-3.716-6.377-.397-9.824 2.792-13 2.867-2.854 6.371-7.44 9.555-11.16 3.186-3.718 4.247-6.377 6.37-10.626 2.123-4.252 1.062-7.971-.532-11.159-1.591-3.188-14.33-34.542-19.638-47.298-5.171-12.419-10.422-10.737-14.332-10.934-3.711-.184-7.963-.223-12.208-.223-4.246 0-11.148 1.594-16.987 7.969-5.838 6.377-22.293 21.789-22.293 53.14 0 31.355 22.824 61.642 26.009 65.894 3.185 4.252 44.916 68.59 108.816 96.181 15.196 6.564 27.062 10.483 36.312 13.418 15.259 4.849 29.145 4.165 40.121 2.524 12.238-1.827 37.686-15.408 42.995-30.286 5.307-14.882 5.307-27.635 3.715-30.292-1.592-2.657-5.838-4.251-12.208-7.44M257.071 465.757h-.086c-38.022-.015-75.313-10.23-107.845-29.535l-7.738-4.592-80.194 21.037 21.405-78.19-5.037-8.017c-21.211-33.735-32.414-72.726-32.397-112.763.047-116.825 95.1-211.87 211.976-211.87 56.595.019 109.795 22.088 149.801 62.139 40.005 40.05 62.023 93.286 62.001 149.902-.048 116.834-95.1 211.889-211.886 211.889M437.403 73.533C389.272 25.347 325.265-1.202 257.068-1.23 116.554-1.23 2.193 113.124 2.136 253.681c-.018 44.932 11.72 88.786 34.03 127.448L0 513.231l135.141-35.45c37.236 20.31 79.159 31.015 121.826 31.029h.105c140.499 0 254.87-114.366 254.928-254.925.026-68.117-26.467-132.166-74.597-180.352"
                fill="#ffffff"
                class="fill-000000"
              ></path></svg
            >
            <span>Chama no whatsapp!</span>
          </a>
        </div>
      </div>
      <div class="flex gap-10 flex-wrap items-center justify-center">
        <div class="flex gap-10 flex-wrap justify-center items-center">
          <CardProdutoInformativo
            plano={plano1.nome}
            etiqueta={plano1.melhorpara}
            icones={plano1.icones}
            destaque={plano1.destaque}
            link={plano1.link}
            textoLink={plano1.textoLink}
            googleAds={plano1.googleAds}
          />
          <CardProdutoInformativo
            plano={plano2.nome}
            etiqueta={plano2.melhorpara}
            icones={plano2.icones}
            destaque={plano2.destaque}
            link={plano2.link}
            textoLink={plano2.textoLink}
            googleAds={plano2.googleAds}
          />
          <CardProdutoInformativo
            plano={plano3.nome}
            etiqueta={plano3.melhorpara}
            icones={plano3.icones}
            destaque={plano3.destaque}
            link={plano3.link}
            textoLink={plano3.textoLink}
            googleAds={plano3.googleAds}
          />
        </div>
        <div class="flex flex-col items-center gap-10 max-w-[20rem]">
          <img
            src="/assets/somente-logo-azul-nlf-1x.webp"
            alt="Logomarca"
            width="100"
            class="w-full max-w-25 aspect-179/103"
          />
          <p
            class="text-2xl font-black text-center text-principal-primeira leading-[1]"
          >
            New Life Fibra é Internet de Verdade!
          </p>
          <div class="flex gap-5 flex-wrap justify-center items-center text-sm">
            <a href="/quem-somos" class="link-line" target="_blank"
              >Conheça o Provedor</a
            >
            <a href="/premios" class="link-line" target="_blank"
              >Nossos prêmios</a
            >
            <a href="/" class="link-line" target="_blank">Acesse nosso site</a>
            <a href="/contato" class="link-line" target="_blank"
              >Canais de atendimento</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .gradiente {
    /* background: rgb(52, 35, 166); */
    background: linear-gradient(
      120deg,
      rgb(22, 57, 203, 1) 10%,
      rgb(0, 153, 255, 1) 40%,
      rgb(12, 190, 66, 1) 95%,
      rgba(223, 243, 228, 1) 100%
    );
  }
</style>
