<script>
  import CardResumo from "$lib/components/molecules/card-resumo/card-resumo.svelte";
  import CardResumoSimples from "$lib/components/molecules/card-resumo/--simples/card-resumo--simples.svelte";
</script>

  <div
    class="flex max-xl:flex-col xl:flex-wrap max-xl:items-center w-full xl:items-center  lg:max-xl:justify-around max-xl:gap-[30px] xl:gap-[50px] xl:justify-center"
  >
        <div class="max-xl:flex-col xl:flex-wrap items-center justify-center xl:max-w-[30%] flex flex-col w-full  shadow-container--vermelho bg-vermelho-4-principal border-vermelho-2 border-[3px] rounded-[10px] px-5 py-[25px] gap-[20px]">
          <h2 class="titulo-h2 text-branco">
            Seção 1
          </h2>
          <div class="flex flex-wrap justify-center gap-[15px]">
            <CardResumo
              titulo="Ação 1"
              href="/"
              descricao="Coloque links secundários, por exemplo"
            >
              <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
                <g clip-path="url(#clip0_32_21)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M52.318 26.9014L11.6101 0.66636C9.19514 -0.634354 6.42871 -0.499333 6.42871 4.16995V55.83C6.42871 60.0986 9.39657 60.7715 11.6101 59.3336L52.318 33.0985C53.9937 31.3864 53.9937 28.6136 52.318 26.9014Z" fill="black"/>
                </g>
                <defs>
                  <clipPath id="clip0_32_21">
                    <rect width="60" height="60" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </CardResumo>
            <CardResumo
                    titulo="Ação 2"
                    href="/"
                    descricao="Coloque links secundários, por exemplo"
            >
              <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
                <path d="M26.25 3.75H7.5V56.25H26.25V3.75Z" fill="black"/>
                <path d="M52.5 3.75H33.75V56.25H52.5V3.75Z" fill="black"/>
              </svg>
            </CardResumo>
          </div>
        </div>
    <div class="flex flex-col shadow-container w-full lg:max-w-[40rem] gap-[20px] bg-azul-2 border-azul-1-claro border-[3px] rounded-[10px] px-5 py-[25px] xl:max-w-[30%]">
      <h2 class="titulo-h2 text-branco">
        Seção 2
      </h2>
      <div class="flex flex-wrap justify-center gap-[15px]">
        <CardResumo
                titulo="Ação 1"
                href="/"
                descricao="Coloque links secundários, por exemplo"
        >
          <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
            <g clip-path="url(#clip0_32_21)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M52.318 26.9014L11.6101 0.66636C9.19514 -0.634354 6.42871 -0.499333 6.42871 4.16995V55.83C6.42871 60.0986 9.39657 60.7715 11.6101 59.3336L52.318 33.0985C53.9937 31.3864 53.9937 28.6136 52.318 26.9014Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_32_21">
                <rect width="60" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </CardResumo>
        <CardResumo
                titulo="Ação 2"
                href="/"
                descricao="Coloque links secundários, por exemplo"
        >
          <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
            <path d="M26.25 3.75H7.5V56.25H26.25V3.75Z" fill="black"/>
            <path d="M52.5 3.75H33.75V56.25H52.5V3.75Z" fill="black"/>
          </svg>
        </CardResumo>
        <div class="w-full flex flex-wrap justify-center gap-[20px]">
          <CardResumoSimples
            titulo="Ação 1, link"
            href="/"
          />
          <CardResumoSimples titulo="Ação 2, link" href="/" />
        </div>
      </div>
    </div>
    <div class="flex flex-col shadow-container w-full lg:max-w-[40rem] gap-[20px] bg-azul-2 border-azul-1-claro border-[3px] rounded-[10px] px-5 py-[25px] xl:max-w-[30%]">
      <h2 class="titulo-h2 text-branco">
        Seção 3
      </h2>
      <div class="flex flex-wrap justify-center gap-[15px]">
        <CardResumo
                titulo="Ação 1"
                href="/"
                descricao="Coloque links secundários, por exemplo"
        >
          <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
            <g clip-path="url(#clip0_32_21)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M52.318 26.9014L11.6101 0.66636C9.19514 -0.634354 6.42871 -0.499333 6.42871 4.16995V55.83C6.42871 60.0986 9.39657 60.7715 11.6101 59.3336L52.318 33.0985C53.9937 31.3864 53.9937 28.6136 52.318 26.9014Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_32_21">
                <rect width="60" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </CardResumo>
        <CardResumo
                titulo="Ação 2"
                href="/"
                descricao="Coloque links secundários, por exemplo"
        >
          <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
            <path d="M26.25 3.75H7.5V56.25H26.25V3.75Z" fill="black"/>
            <path d="M52.5 3.75H33.75V56.25H52.5V3.75Z" fill="black"/>
          </svg>
        </CardResumo>
      </div>
    </div>
  </div>
