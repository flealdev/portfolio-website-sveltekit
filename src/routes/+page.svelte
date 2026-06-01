<script>
    import SecaoCci from "$lib/components/organisms/secao-cci/secao-cci.svelte";
  import SecaoGoogle from "$lib/components/organisms/secao-google/secao-google.svelte";
  import SecaoHero from "$lib/components/organisms/secao-hero/secao-hero.svelte";
  import SecaoIndique from "$lib/components/organisms/secao-indique/secao-indique.svelte";
  import SecaoParaSuaEmpresa from "$lib/components/organisms/secao-para-sua-empresa/secao-para-sua-empresa.svelte";
  import SecaoPlanos from "$lib/components/organisms/secao-planos/secao-planos.svelte";
  import SecaoSaibaMais from "$lib/components/organisms/secao-saiba-mais/secao-saiba-mais.svelte";
  import SecaoVantagens from "$lib/components/organisms/secao-vantagens/secao-vantagens.svelte";
  import SecaoPremios from "$lib/components/organisms/secao-premios/secao-premios.svelte";
  import SecaoProjetos from "$lib/components/organisms/secao-projetos/secao-projetos.svelte";
  import SecaoApp from "$lib/components/organisms/secao-app/secao-app.svelte";
  import SecaoExpositiva from "$lib/components/organisms/secao-expositiva/secao-expositiva.svelte";
  import SecaoDuvidas from "$lib/components/organisms/secao-duvidas/secao-duvidas.svelte";
  import SecaoBlogRecentes from "$lib/components/organisms/secao-blog-recentes/secao-blog-recentes.svelte";
    import SecaoColaboradores from "$lib/components/organisms/secao-colaboradores/secao-colaboradores.svelte";
</script>

<div class="flex flex-col items-center gap-[100px] w-full">
  <div class="flex flex-col items-center gap-[100px] nlf-padding w-full">
    <SecaoHero />
    <SecaoPlanos />
    <div class="flex flex-wrap items-center justify-center w-full gap-[100px]">
      <SecaoVantagens />
      <SecaoParaSuaEmpresa />
    </div>
    <SecaoGoogle />
    <div class="flex max-xl:flex-col xl:flex-wrap items-center justify-center gap-[100px] w-full">
      <SecaoIndique />
      <SecaoSaibaMais />
    </div>
    <SecaoPremios />
    <SecaoProjetos/>
    <SecaoApp />
    <SecaoExpositiva />
    <SecaoColaboradores/>
    <div class="flex max-xl:flex-col xl:flex-wrap w-full items-center justify-center gap-[100px]">
      <SecaoBlogRecentes />
      <SecaoDuvidas />
    </div>
    <SecaoCci />
  </div>
</div>
