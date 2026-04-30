<script>
  import SecaoHero from "$lib/components/organisms/secao-hero/secao-hero.svelte";
  import SecaoEssencial from "$lib/components/organisms/secao-essencial/secao-essencial.svelte";
  import SecaoPromocional from "$lib/components/organisms/secao-promocional/secao-promocional.svelte";
  import SecaoPremios from "$lib/components/organisms/secao-premios/secao-premios.svelte";
  import SecaoProjetos from "$lib/components/organisms/secao-projetos/secao-projetos.svelte";
  import SecaoApp from "$lib/components/organisms/secao-app/secao-app.svelte";
  import SecaoInstitucional from "$lib/components/organisms/secao-institucional/secao-institucional.svelte";
  import SecaoDuvidas from "$lib/components/organisms/secao-duvidas/secao-duvidas.svelte";
  import SecaoCci from "$lib/components/organisms/secao-cci/secao-cci.svelte";
  import SecaoBlogRecentes from "$lib/components/organisms/secao-blog-recentes/secao-blog-recentes.svelte";
</script>

<div class="flex flex-col items-center gap-[100px]">
  <SecaoHero />
  <SecaoEssencial />
  <SecaoPromocional />
  <SecaoPremios />
  <SecaoProjetos />
  <SecaoApp />
  <SecaoInstitucional />
  <div
    class="flex flex-wrap items-center w-full max-lg:gap-[100px] lg:max-xl:justify-between xl:justify-center xl:gap-[100px]"
  >
    <SecaoBlogRecentes />
    <SecaoDuvidas />
  </div>
  <SecaoCci />
</div>
