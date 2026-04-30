<script>
  import CardResumo from "$lib/components/molecules/card-resumo/card-resumo.svelte";
  import CardResumoSimples from "$lib/components/molecules/card-resumo/--simples/card-resumo--simples.svelte";
</script>

<div
  class="flex flex-wrap w-full nlf-padding max-lg:gap-[30px] lg:max-xl:justify-around xl:gap-[50px] xl:justify-center"
>
  <div class="flex flex-col w-full lg:max-w-[20rem] gap-[20px]">
    <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
      Conheça
    </h2>
    <div class="flex flex-wrap justify-center gap-[10px]">
      <CardResumo
        titulo="Quem somos"
        descricao="Planos para as suas necessidades"
        href="/quem-somos"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
        >
          <path
            d="M11.91 14h7.843a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 20.696 20C19.13 21.344 16.89 22 14 22h-.179a1.752 1.752 0 0 0-.221-1.897l-.111-.12-2.23-2.224a5.482 5.482 0 0 0 .65-3.76ZM6.5 10.5a4.5 4.5 0 0 1 3.46 7.376l2.823 2.814a.75.75 0 0 1-.975 1.135l-.085-.073-2.903-2.896A4.5 4.5 0 1 1 6.5 10.5Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM14 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
            fill="#617ef6"
            class="fill-212121"
          ></path>
        </svg>
      </CardResumo>
      <CardResumo
        titulo="Prêmios"
        href="/premios"
        descricao="Confira nossas premiações"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
        >
          <path
            d="M18 3V2H6v1a4 4 0 1 0 0 8h.81A6 6 0 0 0 11 13.91V16H7.22l-1.5 6h12.56l-1.5-6H13v-2.09A6 6 0 0 0 17.19 11H18a4 4 0 0 0 0-8ZM6 9a2 2 0 0 1-2-2 2 2 0 0 1 2-2v3a5.47 5.47 0 0 0 .09 1Zm13.41-.59A2 2 0 0 1 18 9h-.09A5.47 5.47 0 0 0 18 8V5a2 2 0 0 1 2 2 2 2 0 0 1-.59 1.41Z"
            data-name="Layer 2"
            fill="#617ef6"
            class="fill-000000"
          ></path>
        </svg>
      </CardResumo>
      <CardResumo
        titulo="Serviços"
        href="/servicos"
        descricao="Internet e projetos especiais"
      >
        <svg
          viewBox="0 0 94.539 89.021"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 94.539 89.021"
          class="w-[40px]"
          ><path
            d="M53.813.014c3.185-.158 6.239 1.069 9.162 3.681l21.199 19.191 2.273-2.453 8.092 7.326-12.33 13.619-8.095-7.38 2.012-2.222-21.312-19.295c-2.467-2.199-5.528-3.208-9.185-3.027-2.424.12-4.755.69-6.99 1.708C43.399 3.996 48.457.28 53.813.014z"
            fill="#617ef6"
            class="fill-000000"
          ></path><path
            d="M78.819 16.951 69.075 8.13l1.702-1.88 9.745 8.821zM29.478 50.429 3.583 77.775l12.422 11.246 24.689-28.476zM54.548 44.556l15.141-17.468-9.801-8.873-15.875 16.84z"
            fill="#617ef6"
            class="fill-000000"
          ></path><path
            d="M83.13 75.237c.299-1.285.417-2.56.354-3.827-.185-3.727-1.645-6.83-4.381-9.306-2.735-2.476-5.984-3.621-9.749-3.434a15.268 15.268 0 0 0-3.776.677L52.189 47.278l.059-.068-10.644-9.6-.017.018-14.018-12.691c.265-1.246.365-2.503.303-3.77-.189-3.8-1.651-6.938-4.386-9.415-2.735-2.476-5.967-3.622-9.694-3.437-1.303.065-2.578.31-3.827.734l10.827 9.802-9.593 10.653L.37 19.703a13.83 13.83 0 0 0-.354 3.827c.185 3.728 1.645 6.83 4.381 9.306 2.735 2.476 5.967 3.622 9.694 3.436a14.17 14.17 0 0 0 4.042-.8l4.699 4.254.01-.011 30.596 27.594-.057.063 2.647 2.407a14.093 14.093 0 0 0-.398 4.047c.187 3.764 1.64 6.885 4.356 9.362 2.718 2.477 5.958 3.622 9.722 3.435a13.819 13.819 0 0 0 3.773-.732l-10.827-9.802 9.647-10.656 10.829 9.804z"
            fill="#617ef6"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
      <CardResumo
        titulo="Unidades"
        href="/onde-estamos"
        descricao="Endereços e contatos"
      >
        <svg
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M288 0c-66.3 0-120 53.73-120 120 0 48.38 16.86 61.9 107.7 193.5 5.957 8.604 18.69 8.604 24.65 0C391.1 181.9 408 168.4 408 120 408 53.73 354.3 0 288 0zm0 176c-26.5 0-48-21.5-48-48s21.5-48 48-48c26.48 0 48 21.53 48 48s-21.5 48-48 48zM10.06 227.6C3.984 230 0 235.9 0 242.4v253.5c0 11.32 11.49 19.04 22 14.84L160 448V201.4c-7.5-12.6-12.8-23.4-16.6-33.9L10.06 227.6zM326.6 331.8c-8.7 12.6-23.2 20.2-38.6 20.2a47.008 47.008 0 0 1-38.66-20.28C233.2 308.3 196.9 256.6 192 249.6v197.5L384 512V249.6c-4.9 7-41.2 58.7-57.4 82.2zm227.5-170.6L416 224v288l149.9-67.59c6.1-3.31 10.1-8.31 10.1-14.81V176c0-11.3-11.4-19.9-21.9-14.8z"
            fill="#617ef6"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
      <div class="w-full flex flex-wrap justify-center gap-[20px]">
        <CardResumoSimples
          titulo="Ações sociais"
          href="/responsabilidade-social"
        />
        <CardResumoSimples titulo="Termos e LGPD" href="/privacidade" />
      </div>
    </div>
  </div>
  <div class="flex flex-col w-full lg:max-w-[20rem] gap-[20px]">
    <h2 class="nlf-titulo-h2 text-principal-terceira dark:text-branco">
      Contrate
    </h2>
    <div class="flex flex-wrap justify-center gap-[10px]">
      <CardResumo
        titulo="Para você"
        href="/para-voce"
        descricao="Planos para as suas necessidades"
        classes="border-principal-terceira"
        classesTitulo="text-principal-terceira"
      >
        <svg
          viewBox="0 0 24 24"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          class="w-[40px]"
          ><path
            d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4c2.2 0 4 2.2 4 5s-1.8 5-4 5-4-2.2-4-5 1.8-5 4-5zm6.6 15.5C16.9 21 14.5 22 12 22s-4.9-1-6.6-2.5c-.4-.4-.5-1-.1-1.4 1.1-1.3 2.6-2.2 4.2-2.7.8.4 1.6.6 2.5.6s1.7-.2 2.5-.6c1.7.5 3.1 1.4 4.2 2.7.4.4.4 1-.1 1.4z"
            fill="#0cbe42"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
      <CardResumo
        titulo="Para empresas"
        href="/para-empresas"
        descricao="SLA exclusivo e atendimento prioritário"
        classes="border-principal-terceira"
        classesTitulo="text-principal-terceira"
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
            fill="#0cbe42"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
      <CardResumo
        titulo="Para condomínios"
        href="/para-condominios"
        descricao="Projetos avançados para atender a todos"
        classes="border-principal-terceira"
        classesTitulo="text-principal-terceira"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M21 7h-6a1 1 0 0 0-1 1v3h-2V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM8 6h2v2H8V6zM6 16H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V6h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm9 4h-2v-2h2v2zm0-4h-2v-2h2v2z"
            fill="#0cbe42"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
      <CardResumo
        titulo="Viabilidade"
        href="/planos"
        descricao="Confira a disponibilidade para sua região"
        classes="border-principal-terceira"
        classesTitulo="text-principal-terceira"
      >
        <svg
          viewBox="0 0 640 512"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M598.6 41.41C570.1 13.8 534.8 0 498.6 0s-72.36 13.8-99.96 41.41l-43.36 43.36c15.11 8.012 29.47 17.58 41.91 30.02 3.146 3.146 5.898 6.518 8.742 9.838l37.96-37.96C458.5 72.05 477.1 64 498.6 64c20.67 0 40.1 8.047 54.71 22.66 14.61 14.61 22.66 34.04 22.66 54.71s-8.049 40.1-22.66 54.71l-133.3 133.3C405.5 343.1 386 352 365.4 352s-40.1-8.048-54.71-22.66C296 314.7 287.1 295.3 287.1 274.6s8.047-40.1 22.66-54.71l4.44-3.49c-2.1-3.9-4.3-7.9-7.5-11.1-8.6-8.6-19.9-13.3-32.1-13.3-11.93 0-23.1 4.664-31.61 12.97-30.71 53.96-23.63 123.6 22.39 169.6C293 402.2 329.2 416 365.4 416c36.18 0 72.36-13.8 99.96-41.41L598.6 241.3c28.45-28.45 42.24-66.01 41.37-103.3-.87-35.9-14.57-69.84-41.37-96.59zM234 387.4l-37.9 37.9C181.5 439.1 162 448 141.4 448c-20.67 0-40.1-8.047-54.71-22.66-14.61-14.61-22.66-34.04-22.66-54.71s8.049-40.1 22.66-54.71l133.3-133.3C234.5 168 253.1 160 274.6 160s40.1 8.048 54.71 22.66c14.62 14.61 22.66 34.04 22.66 54.71s-8.047 40.1-22.66 54.71l-3.51 3.52c2.094 3.939 4.219 7.895 7.465 11.15C341.9 315.3 353.3 320 365.4 320c11.93 0 23.1-4.664 31.61-12.97 30.71-53.96 23.63-123.6-22.39-169.6C346.1 109.8 310.8 96 274.6 96c-36.2 0-72.3 13.8-99.9 41.4L41.41 270.7C13.81 298.3 0 334.48 0 370.66c0 36.18 13.8 72.36 41.41 99.97C69.01 498.2 105.2 512 141.4 512c36.18 0 72.36-13.8 99.96-41.41l43.36-43.36c-15.11-8.012-29.47-17.58-41.91-30.02-3.21-3.11-5.91-6.51-8.81-9.81z"
            fill="#0cbe42"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
    </div>
  </div>
  <div class="flex flex-col w-full lg:max-w-[20rem] gap-[20px]">
    <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
      Interaja
    </h2>
    <div class="flex flex-wrap justify-center gap-[10px]">
      <CardResumo
        titulo="Indique"
        href="/indique"
        descricao="Convide amigos e ganhe desconto"
      >
        <svg
          fill="none"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4.009 11A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01Z"
            fill="#617ef6"
            class="fill-212121"
          ></path><path
            d="M14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5a.5.5 0 0 1 .5-.5Z"
            fill="#617ef6"
            class="fill-212121"
          ></path></svg
        >
      </CardResumo>
      <CardResumo
        titulo="Trabalhe conosco"
        href="/trabalhe-conosco"
        descricao="Conheça nossas vagas"
      >
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M41.786 25.158V17.44l-17.897 8.165a4.803 4.803 0 0 1-.66.219v2.796a1.35 1.35 0 0 1-2.699 0v-2.796a4.821 4.821 0 0 1-.66-.22L1.971 17.44v20.298a3.553 3.553 0 0 0 3.55 3.55h20.034a16.987 16.987 0 0 1 16.23-16.13Z"
            fill="#617ef6"
            class="fill-000000"
          ></path><path
            d="m22.768 23.148 19.018-8.676v-2.128a3.553 3.553 0 0 0-3.55-3.55h-6.96c-.007-.04-.009-.08-.02-.119a9.72 9.72 0 0 0-18.76.108l-.001.011H5.522a3.553 3.553 0 0 0-3.55 3.55v2.128l19.018 8.676a2.141 2.141 0 0 0 1.778 0ZM21.891 5.06a6.23 6.23 0 0 1 5.69 3.734H16.197A6.22 6.22 0 0 1 21.89 5.06ZM61.468 57.282l-6.95-7.069a14.404 14.404 0 1 0-4.495 4.274l7.064 7.175a3.098 3.098 0 0 0 4.38-4.38Zm-18.884-7.665a7.419 7.419 0 1 1 7.418-7.42 7.419 7.419 0 0 1-7.418 7.42Z"
            fill="#617ef6"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
      <CardResumo
        titulo="Avalie"
        href="/avalie"
        descricao="Ouvidoria e satisfação"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M10.75 14A2.25 2.25 0 0 1 13 16.25v1.502l-.008.108c-.31 2.127-2.22 3.149-5.425 3.149-3.193 0-5.134-1.01-5.553-3.112L2 17.75v-1.5A2.25 2.25 0 0 1 4.25 14h6.5ZM7.5 6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm12.25-4A2.25 2.25 0 0 1 22 4.25v3.5A2.25 2.25 0 0 1 19.75 10h-1.553l-2.541 2.207A1 1 0 0 1 14 11.452V9.986a2.25 2.25 0 0 1-2-2.236v-3.5A2.25 2.25 0 0 1 14.25 2h5.5Z"
            fill="#617ef6"
            class="fill-212121"
          ></path></svg
        >
      </CardResumo>
      <CardResumo
        titulo="Contato"
        href="/contato"
        descricao="Conheça nossos canais de atendimento"
      >
        <svg
          viewBox="0 0 139 139"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[40px]"
          ><path
            d="M67.317 81.952c-9.284-7.634-15.483-17.054-18.742-22.414l-2.431-4.583c.85-.912 7.332-7.853 10.141-11.619 3.53-4.729-1.588-9-1.588-9s-14.401-14.403-17.683-17.26c-3.282-2.861-7.06-1.272-7.06-1.272-6.898 4.457-14.049 8.332-14.478 26.968-.016 17.448 13.229 35.444 27.552 49.376 14.346 15.734 34.043 31.504 53.086 31.486 18.634-.425 22.508-7.575 26.965-14.473 0 0 1.59-3.775-1.268-7.06-2.86-3.284-17.265-17.688-17.265-17.688s-4.268-5.119-8.998-1.586c-3.525 2.635-9.855 8.496-11.38 9.917.003.005-10.586-5.64-16.851-10.792z"
            fill="#617ef6"
            class="fill-000000"
          ></path></svg
        >
      </CardResumo>
    </div>
  </div>
</div>
