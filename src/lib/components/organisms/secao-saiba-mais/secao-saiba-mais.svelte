<script>
  import CardEssencial from "$lib/components/molecules/card-essencial/card-essencial.svelte";
  import ModalLojasApp from "$lib/components/molecules/modal-lojas-app/modal-lojas-app.svelte";
  import { manipulaModal } from "$lib/core/utils";
</script>

<div
  class="rounded-[10px] border-[3px] shadow-container border-azul-2 bg-cover bg-[url(/assets/25anos/secao-saiba-mais-w861.webp)] py-[40px] px-5 flex flex-col gap-[50px] xl:max-w-[29rem] w-full"
>
  <h2 class="nlf-titulo-h2 text-branco">Saiba mais</h2>
  <div class="flex flex-wrap items-center justify-center max-md:gap-[30px] md:max-xl:gap-[45px] xl:gap-[30px] w-full">
    <CardEssencial
      linha1="Para"
      linha2="Você"
      shadowColor="#FFD700"
      href="/para-voce"
      srcBg="/assets/25anos/rhayssa-card1-w200.webp"
    >
      <svg width="30" height="31" viewBox="0 0 30 31">
        <path
          d="M15 28.0613C16.3807 28.0613 17.5 26.942 17.5 25.5613C17.5 24.1806 16.3807 23.0613 15 23.0613C13.6193 23.0613 12.5 24.1806 12.5 25.5613C12.5 26.942 13.6193 28.0613 15 28.0613Z"
          fill="#FFD700"
        />
        <path
          d="M21.375 20.0489C20.8688 20.0494 20.3746 19.895 19.9587 19.6064C18.4947 18.6184 16.7687 18.0904 15.0025 18.0904C13.2362 18.0904 11.5103 18.6184 10.0462 19.6064C9.77617 19.7983 9.47065 19.9346 9.14745 20.0074C8.82424 20.0802 8.48979 20.088 8.16353 20.0304C7.83727 19.9728 7.52571 19.851 7.24697 19.6719C6.96822 19.4928 6.72784 19.2602 6.53981 18.9874C6.35178 18.7146 6.21984 18.4072 6.15166 18.083C6.08348 17.7588 6.08042 17.4242 6.14266 17.0988C6.2049 16.7734 6.3312 16.4636 6.51421 16.1875C6.69723 15.9113 6.93331 15.6743 7.20873 15.4901C9.5 13.9084 12.2183 13.0613 15.0025 13.0613C17.7867 13.0613 20.505 13.9084 22.7962 15.4901C23.2356 15.7928 23.5666 16.2282 23.7409 16.7325C23.9151 17.2368 23.9235 17.7836 23.7646 18.293C23.6058 18.8024 23.2882 19.2476 22.8583 19.5635C22.4283 19.8794 21.9085 20.0495 21.375 20.0489Z"
          fill="#FFD700"
        />
        <path
          d="M26.25 11.2875C25.7827 11.289 25.3244 11.1591 24.9275 10.9125C21.9509 9.05328 18.512 8.06754 15.0025 8.06754C11.493 8.06754 8.05407 9.05328 5.0775 10.9125C4.79869 11.0866 4.4883 11.2042 4.16406 11.2584C3.83982 11.3126 3.50808 11.3024 3.18778 11.2284C2.86747 11.1544 2.56488 11.0181 2.29727 10.8271C2.02967 10.6362 1.80229 10.3944 1.62813 10.1156C1.27638 9.5525 1.16273 8.87275 1.31217 8.22586C1.46162 7.57898 1.86191 7.01796 2.425 6.66621C6.19623 4.31037 10.5534 3.06128 15 3.06128C19.4466 3.06128 23.8038 4.31037 27.575 6.66621C28.0359 6.95368 28.3907 7.38346 28.5856 7.89052C28.7805 8.39758 28.8049 8.95432 28.6552 9.4765C28.5055 9.99868 28.1897 10.4579 27.7558 10.7846C27.3218 11.1114 26.7932 11.2879 26.25 11.2875Z"
          fill="#FFD700"
        />
      </svg>
    </CardEssencial>
    <CardEssencial
      linha1="Para"
      linha2="Empresas"
      href="/para-empresas"
      shadowColor="#FFD700"
      srcBg="/assets/25anos/bage-card-2-w200.webp"
    >
      <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
        <g clip-path="url(#clip0_667_2094)">
          <path
            d="M0 9.93628H30V0.561279H0V9.93628ZM22.5 2.43628H28.125V6.18628H22.5V2.43628ZM9.375 2.43628H13.125V4.31128H9.375V2.43628ZM9.375 6.18628H13.125V8.06128H9.375V6.18628ZM3.75 2.43628H7.5V4.31128H3.75V2.43628ZM3.75 6.18628H7.5V8.06128H3.75V6.18628Z"
            fill="#FFD700"
          />
          <path
            d="M0 21.1863H13.125V26.8113H0V30.5613H30V26.8113H16.875V21.1863H30V11.8113H0V21.1863ZM22.5 13.6863H28.125V17.4363H22.5V13.6863ZM9.375 13.6863H13.125V15.5613H9.375V13.6863ZM9.375 17.4363H13.125V19.3113H9.375V17.4363ZM3.75 13.6863H7.5V15.5613H3.75V13.6863ZM3.75 17.4363H7.5V19.3113H3.75V17.4363Z"
            fill="#FFD700"
          />
        </g>
        <defs>
          <clipPath id="clip0_667_2094">
            <rect
              width="30"
              height="30"
              fill="white"
              transform="translate(0 0.561279)"
            />
          </clipPath>
        </defs>
      </svg>
    </CardEssencial>
    <CardEssencial
      linha1="Informações e"
      linha2="Consultoria"
      shadowColor="#00C947"
      srcBg="/assets/25anos/bage-card-3-w200.webp"
      href="https://wa.me/555433101008?text={encodeURI(
        'Olá! Vim do site e gostaria de atendimento comercial (informações e consultoria). [NÃO EXCLUA]'
      )}"
      orderTexto="order-2"
      padding="pl-[7px] pr-[3px] py-[15px]"
    >
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.25 18.0613H20.625C21.6588 18.0613 22.5 17.22 22.5 16.1863V4.93628C22.5 3.90253 21.6588 3.06128 20.625 3.06128H4.375C3.34125 3.06128 2.5 3.90253 2.5 4.93628V23.0613L9.16625 18.0613H16.25ZM5 17.9363L5.1925 17.9163L5 18.0613V17.9363Z"
          fill="#00C947"
        />
        <path
          d="M25.625 10.5613H25V18.0625C25 19.4375 23.8837 20.5538 22.5125 20.5613H10V21.1863C10 22.22 10.8412 23.0613 11.875 23.0613H20.8337L27.5 28.0613V12.4363C27.5 11.4025 26.6588 10.5613 25.625 10.5613Z"
          fill="#00C947"
        />
      </svg>
    </CardEssencial>
    <CardEssencial
      linha1="Área do"
      linha2="Cliente"
      shadowColor="#00C947"
      srcBg="/assets/25anos/bage-card-4-w200.webp"
      onclick={() => {
        manipulaModal("modal-lojas-app", ModalLojasApp);
      }}
      orderTexto="order-2"
    >
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        class="order-1"
      >
        <path
          d="M14.9999 18.5331C19.1354 18.5331 22.488 14.51 22.488 9.54719C22.488 4.58441 19.1354 0.561279 14.9999 0.561279C10.8643 0.561279 7.51172 4.58441 7.51172 9.54719C7.51172 14.51 10.8643 18.5331 14.9999 18.5331Z"
          fill="#00C947"
        />
        <path
          d="M29.6768 26.1722C28.3289 23.4765 25.7829 21.23 22.4881 19.8821C21.5896 19.5826 20.5412 19.5826 19.7924 20.0319C18.2948 20.9305 16.7972 21.3797 15 21.3797C13.2028 21.3797 11.7052 20.9305 10.2076 20.0319C9.45878 19.7323 8.41044 19.5826 7.51186 20.0319C4.21708 21.3797 1.67112 23.6262 0.323251 26.322C-0.725089 28.2689 0.922301 30.5154 3.16874 30.5154H26.8313C29.0777 30.5154 30.7251 28.2689 29.6768 26.1722Z"
          fill="#00C947"
        />
      </svg>
    </CardEssencial>
  </div>
</div>
