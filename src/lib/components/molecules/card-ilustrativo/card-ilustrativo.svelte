<script>
  let {
    titulo = "",
    conteudo = "",
    icone = "",
    svg = "",
    destaque = "",
  } = $props();

  let classesDestaque = "";
  let corTitulo = "";

  if (destaque === "sim") {
    classesDestaque =
      "bg-[linear-gradient(to_right_bottom,#1639CB_80%,#617EF6_100%)] text-branco shadow-[0_0_1.5rem_#617EF6]";
  } else {
    classesDestaque = "bg-branco shadow-[0_0_0.5rem_rgba(0,0,0,0.1)]";
    corTitulo = "text-auxiliar-primeira";
  }
</script>

<div
  class="flex flex-wrap justify-around items-center w-full gap-3 max-w-140 p-5 rounded-xl {classesDestaque}"
>
  <div class="flex items-center justify-center">
    {#if svg === "sim"}
      <slot />
    {:else}
      <img src={icone} alt="Ícone decorativo" />
    {/if}
  </div>
  <div class="flex flex-col gap-2 md:w-[70%]">
    <h2 class="nlf-titulo-h2 {corTitulo}">{titulo}</h2>
    <p
      class="nlf-paragrafo {destaque === 'sim' ? 'text-branco' : 'text-preto'}"
    >
      {@html conteudo}
    </p>
  </div>
</div>
