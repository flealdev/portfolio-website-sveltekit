<script>
  import SecaoHeader from "$lib/components/organisms/secao-header/secao-header.svelte";
  import SecaoRodape from "$lib/components/organisms/secao-rodape/secao-rodape.svelte";
  import BotaoWppFlutuante from "$lib/components/atoms/botao/--wpp-flutuante/botao--wpp-flutuante.svelte";

  let {
    children,
    tituloWpp = "Encaminhe direto para o wpp",
    descricaoWpp = "Clicando aqui",
  } = $props();

</script>

<SecaoHeader />
<main class="max-md:pt-5 md:pt-10 pb-20 nlf-container">
  {@render children?.()}

  <BotaoWppFlutuante {tituloWpp} {descricaoWpp}/>
</main>
<SecaoRodape />
