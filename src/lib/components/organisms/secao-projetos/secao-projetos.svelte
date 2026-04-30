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
        src="/assets/img-projetos.png"
        alt="Imagem ilustrativa do projeto Praças Conectadas"
        titulo="Projeto Praças Conectadas"
        descricao="Wi-fi livre em conjunto com as prefeituras municipais."
        frase="A New Life sempre com você!"
      />
      <CardProjetos
        src="/assets/imagem-card-ftta.webp"
        alt="Imagem ilustrativa do projeto de estruturação FTTA"
        titulo="Estruturação Avançada FTTA"
        descricao="Seu prédio com conexão fibra óptica em cada apartamento."
        frase="Mais velocidade e estabilidade!"
      />
    </div>
    <BotaoCta
      titulo="Serviços e projetos"
      href="/servicos"
      containerClasses="max-md:w-full"
    />
  </div>
</ContainerBranco>
