<script>
  /** @type {{etiqueta?: string, plano?: string, classes?: string, classesContainerIcones?: string, destaque?: boolean, icones?: any, link?: string, textoLink?: string, googleAds?: boolean, href?: string, classesBotao?: string}} */
  let {
    etiqueta = "",
    plano = "",
    classes = "",
    classesContainerIcones = "",
    destaque = false,
    icones = [],
    link = "",
    textoLink = "",
    googleAds = false,
    href = "",
    classesBotao = ""
  } = $props();

  let estiloCard = $state("");
  if (destaque) {
    estiloCard =
      "bg-principal-primeira border-2 border-principal-segunda shadow-[0_0_1rem_#FFE404]";
  } else {
    estiloCard =
      "bg-principal-terceira border-2 border-auxiliar-primeira shadow-[-0.2rem_0.2rem_0_#617EF6]";
  }
</script>

<div
  class="p-5 relative w-full max-lg:max-w-60 lg:max-w-100 nlf-enfase text-branco rounded-xl flex flex-col justify-center items-center gap-3 {classes} {estiloCard}"
>
  <div
    class="flex absolute -top-[25px] gap-3 justify-center bg-[gold] rounded-2xl px-5 py-2 {classesContainerIcones}"
  >
    {#each icones as icone}
      <img
        src={icone.guid}
        alt="Imagem ilustrativa da utilidade do plano"
        width="30"
        class="max-w-7.5"
      />
    {/each}
  </div>
  <p class="font-light text-sm text-center pt-[15px]">
    {etiqueta}
  </p>
  <p class="text-3xl text-center font-black">
    {plano.includes("mega") ? plano : plano + " mega"}
  </p>
</div>
