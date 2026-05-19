<script>
  import CardProjetos from "$lib/components/molecules/card-projetos/card-projetos.svelte";
  import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

<ContainerBranco
  class="w-full flex items-center justify-center"
>
  <div class="flex flex-wrap w-full gap-[30px] items-center justify-center">
    <div
      class="flex flex-wrap justify-center w-full max-w-[60rem] max-md:gap-[20px] md:gap-[40px] items-center"
    >
      <CardProjetos
        src="/assets/template/ilustrativa-pequena-horizontal.jpg"
        alt="Imagem ilustrativa"
        titulo="Produto 1"
        descricao="Exponha dados dos principais produtos"
        frase="Frase em destaque!"
      />
      <CardProjetos
        src="/assets/template/ilustrativa-pequena-horizontal.jpg"
        alt="Imagem ilustrativa"
        titulo="Produto 2"
        descricao="Exponha dados dos principais produtos"
        frase="Frase em destaque!"
      />
    </div>
    <BotaoCta
      titulo="Saiba mais"
      href="/"
      containerClasses="max-md:w-full"
    />
  </div>
</ContainerBranco>
