<script>
  import CardEssencial from "$lib/components/molecules/card-essencial/card-essencial.svelte";
  import ModalLojasApp from "$lib/components/molecules/modal-lojas-app/modal-lojas-app.svelte";
  import { manipulaModal } from "$lib/utils.js";
</script>

<div
  class="rounded-[10px] border-[3px] shadow-container border-azul-2 bg-cover bg-[url(/assets/template/bg-acoes-secundarias.jpg)] py-[40px] px-5 flex flex-col gap-[50px] xl:max-w-[29rem] w-full"
>
  <h2 class="titulo-h2">Ações secundárias</h2>
  <div class="flex flex-wrap items-center justify-center max-md:gap-[30px] md:max-xl:gap-[45px] xl:gap-[30px] w-full">
    <CardEssencial
      linha1="Primeira"
      linha2="Ação"
      shadowColor="#FFD700"
      href="/e"
      srcBg="/assets/template/ilustrativa-pequena.jpg"
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
    </CardEssencial>
    <CardEssencial
      linha1="Segunda"
      linha2="Ação"
      href="/"
      shadowColor="#FFD700"
      srcBg="/assets/template/ilustrativa-pequena.jpg"
    >
      <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
        <path d="M26.25 3.75H7.5V56.25H26.25V3.75Z" fill="black"/>
        <path d="M52.5 3.75H33.75V56.25H52.5V3.75Z" fill="black"/>
      </svg>

    </CardEssencial>
    <CardEssencial
      linha1="Terceira"
      linha2="Ação"
      shadowColor="#00C947"
      srcBg="/assets/template/ilustrativa-pequena.jpg"
      href="/"
      orderTexto="order-2"
      padding="pl-[7px] pr-[3px] py-[15px]"
    >
      <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
        <path d="M56.25 3.75H3.75V56.25H56.25V3.75Z" fill="black"/>
      </svg>
    </CardEssencial>
    <CardEssencial
      linha1="Quarta"
      linha2="Ação"
      shadowColor="#00C947"
      srcBg="/assets/template/ilustrativa-pequena.jpg"
      onclick={() => {
        manipulaModal("modal-lojas-app", ModalLojasApp);
      }}
      orderTexto="order-2"
    >
      <svg class="w-[30px] aspect-auto" viewBox="0 0 60 60" fill="none">
        <g clip-path="url(#clip0_32_30)">
          <mask id="mask0_32_30" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
            <path d="M60 0H0V60H60V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_32_30)">
            <path d="M30 7.49951C42.4265 7.49951 52.5 17.5731 52.5 29.9995C52.5 42.426 42.4265 52.4995 30 52.4995C17.5736 52.4995 7.5 42.426 7.5 29.9995C7.5 22.9313 10.7592 16.6244 15.8567 12.4995" stroke="#292929" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 11.2495H17.5V21.2495" stroke="#000" stroke-width="6.25" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_32_30">
            <rect width="60" height="60" fill="white"/>
          </clipPath>
        </defs>
      </svg>

    </CardEssencial>
  </div>
</div>
