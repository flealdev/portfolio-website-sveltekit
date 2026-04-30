<script>
  import ModalContato from "$lib/components/molecules/modal-contato-interesse-plano/modal-contato-interesse-plano.svelte";
  import { manipulaModal } from "$lib/core/utils";
  import { mount } from "svelte";

  let {
    icones = [],
    plano = "",
    velocidade = "",
    beneficios = "",
    descricao = "",
    preco = "",
    destaque = false,
    mensagem,
  } = $props();

  // exclui espaços no nome do plano para lidar com o ID do modal de contato
  const planoId = plano.replaceAll(/\s/g, "");
</script>

<div
  class="flex items-center max-md:flex-col md:flex-wrap max-md:gap-5 md:gap-10 rounded-xl max-lg:p-5 lg:py-10 lg:px-5 w-[20rem] {destaque
    ? 'bg-principal-primeira border-2 border-principal-segunda shadow-[0_0_0.5rem_#FFE404]'
    : 'bg-branco shadow-[0_0_1rem_rgb(255,228,4,0.8)] text-preto'} {icones.length >
  0
    ? 'justify-center'
    : 'max-lg:justify-center lg:justify-around'}"
>
  {#if icones.length > 0}
    <div
      class="max-md:order-2 flex flex-wrap w-32 p-5 place-content-center gap-3 rounded-[2rem_0.2rem_2rem_0.2rem] {destaque
        ? 'bg-branco'
        : 'border-2 border-principal-primeira'}"
    >
      {#each icones as icone}
        <img
          src={icone.guid}
          alt="Ícone ilustrativo da utilidade do plano {plano}"
          width="30"
          class="max-w-7.5"
        />
      {/each}
    </div>
  {/if}
  <div class="max-md:order-1 flex flex-col max-lg:items-center gap-5 md:w-120">
    <div
      class="flex flex-col gap-2 {destaque
        ? 'text-branco'
        : 'text-principal-primeira'}"
    >
      <p class="text-2xl font-bold max-w-60 leading-[1] max-lg:text-center">
        {plano}
      </p>
      <div class="flex gap-3 max-lg:justify-center items-center">
        <div class="flex gap-2 items-center">
          <svg
            viewBox="0 0 15 10"
            class="w-4 {destaque
              ? 'stroke-branco'
              : 'stroke-principal-primeira'}"
          >
            <path
              d="M3.5 1V8.76471M6 6.17647L3.5 9L1 6.17647M11.5 9L11.5 1.23529M9 3.82353L11.5 1L14 3.82353"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="nlf-nota_rodape">{velocidade}mbps</p>
        </div>
        <svg
          viewBox="0 0 13 12"
          class="w-4 {destaque ? 'fill-branco' : 'fill-principal-primeira'}"
        >
          <path
            d="M6.49993 7.83333C6.14934 7.83333 5.80663 7.94086 5.51513 8.14231C5.22363 8.34376 4.99643 8.63008 4.86226 8.96508C4.7281 9.30008 4.693 9.6687 4.76139 10.0243C4.82979 10.38 4.99861 10.7066 5.24651 10.963C5.49442 11.2194 5.81026 11.394 6.15411 11.4648C6.49796 11.5355 6.85437 11.4992 7.17827 11.3604C7.50217 11.2217 7.77901 10.9867 7.97378 10.6852C8.16856 10.3837 8.27252 10.0293 8.27252 9.66667C8.2722 9.18054 8.08535 8.71441 7.75299 8.37067C7.42063 8.02692 6.96995 7.83366 6.49993 7.83333Z"
          />
          <path
            d="M2.74875 5.79053C2.58301 5.96289 2.49026 6.19629 2.49091 6.43938C2.49156 6.68247 2.58555 6.91534 2.7522 7.08676C2.91885 7.25818 3.14452 7.35411 3.37956 7.35344C3.6146 7.35277 3.83975 7.25556 4.00549 7.0832C4.67346 6.41157 5.56833 6.03583 6.49993 6.03583C7.43152 6.03583 8.32639 6.41157 8.99436 7.0832C9.07647 7.1692 9.17433 7.23742 9.28222 7.28385C9.39011 7.33028 9.50587 7.354 9.62273 7.35361C9.79778 7.35357 9.9689 7.29992 10.1145 7.19942C10.2601 7.09892 10.3737 6.95608 10.4409 6.7889C10.5081 6.62173 10.526 6.43772 10.4922 6.26007C10.4584 6.08242 10.3745 5.9191 10.2511 5.7907C8.23962 3.69581 4.76023 3.69581 2.74875 5.79053Z"
          />
          <path
            d="M12.7439 3.21598C11.9304 2.35615 10.959 1.67301 9.88681 1.20663C8.81461 0.740239 7.66316 0.5 6.5 0.5C5.33684 0.5 4.18539 0.740239 3.11319 1.20663C2.04099 1.67301 1.06964 2.35615 0.256115 3.21598C0.0908381 3.38882 -0.00128432 3.62248 1.35296e-05 3.86557C0.00131137 4.10866 0.0959232 4.34126 0.263036 4.5122C0.430148 4.68314 0.656072 4.77842 0.891106 4.77707C1.12614 4.77573 1.35103 4.67788 1.51631 4.50504C4.19251 1.70491 8.80749 1.70491 11.4837 4.50504C11.649 4.67788 11.8739 4.77573 12.1089 4.77707C12.3439 4.77842 12.5699 4.68314 12.737 4.5122C12.9041 4.34126 12.9987 4.10866 13 3.86557C13.0013 3.62248 12.9092 3.38882 12.7439 3.21598Z"
          />
        </svg>

        <svg
          viewBox="0 0 11 12"
          class="w-4 {destaque ? 'fill-branco' : 'fill-principal-primeira'}"
        >
          <path
            d="M5.5 0.5C2.4673 0.5 0 2.9673 0 6V8.27865C0 8.84185 0.49335 9.3 1.1 9.3H1.65C1.79587 9.3 1.93576 9.24205 2.03891 9.13891C2.14205 9.03576 2.2 8.89587 2.2 8.75V5.92135C2.2 5.77548 2.14205 5.63559 2.03891 5.53244C1.93576 5.4293 1.79587 5.37135 1.65 5.37135H1.1506C1.4564 3.24285 3.2879 1.6 5.5 1.6C7.7121 1.6 9.5436 3.24285 9.8494 5.37135H9.35C9.20413 5.37135 9.06424 5.4293 8.96109 5.53244C8.85795 5.63559 8.8 5.77548 8.8 5.92135V9.3C8.8 9.90665 8.30665 10.4 7.7 10.4H6.6V9.85H4.4V11.5H7.7C8.9133 11.5 9.9 10.5133 9.9 9.3C10.5067 9.3 11 8.84185 11 8.27865V6C11 2.9673 8.5327 0.5 5.5 0.5Z"
          />
        </svg>
      </div>
    </div>
    <div
      class="flex flex-col gap-1 nlf-paragrafo {destaque ? 'text-branco' : ''}"
    >
      {#if beneficios != ""}
        <p>
          <span class="font-bold">Inclui:</span>
          {beneficios}
        </p>
      {/if}
      <p>
        {@html descricao}
      </p>
    </div>
  </div>
  <div class="max-md:order-3 flex flex-col gap-5 items-center">
    <div class="max-lg:text-center w-full">
      <p class="{destaque ? 'text-branco' : ''} nlf-paragrafo">Por apenas:</p>
      <p
        class="text-2xl font-bold max-w-60 leading-[1] {destaque
          ? 'text-branco'
          : 'text-principal-primeira'}"
      >
        R$ {preco}
      </p>
    </div>
    <button
      class="nlf-botao {destaque ? 'nlf-botao--cta' : 'nlf-botao--destaque'}"
      onclick={() =>
        manipulaModal(`modal-contato-${planoId}`, ModalContato, undefined, {
          display: "flex",
          plano: planoId,
          assunto: `LEAD - Interessado em ${plano} - New Life Fibra`,
        })}
    >
      Quero!
    </button>
  </div>
</div>
