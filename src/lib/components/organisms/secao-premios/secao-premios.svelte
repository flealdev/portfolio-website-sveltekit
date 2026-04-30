<script>
  import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

<ContainerBranco
  class="w-full flex items-center justify-center"
>
  <div class="flex flex-col items-centerw-full gap-[30px]">
    <div class="flex flex-wrap gap-[30px] justify-center items-center w-full">
      <div class="flex flex-col w-full xl:max-w-160 gap-[10px]">
        <div class="flex flex-col">
          <p class="nlf-subtitulo-h2 text-auxiliar-primeira dark:text-branco">
            No mercado há mais de 10 anos!
          </p>
          <h2 class="text-auxiliar-primeira nlf-titulo-h2 dark:text-branco">
            Provedor premiado
          </h2>
        </div>
        <p class="nlf-paragrafo">
          Nossa trajetória de sucesso é baseada na missão de conectar pessoas
          que acreditam em um serviço ágil e de excelência, com foco no cliente.
        </p>
        <p class="nlf-paragrafo">
          Nesses anos de história acumulamos diversos prêmios, todos devido ao
          nosso empenho e à fidelidade de nossos clientes.
        </p>
      </div>
      <div
        class="flex flex-col gap-[10px] w-full max-w-[300px] dark:bg-branco dark:p-5 dark:rounded-lg"
      >
        <img src="/assets/premio-1.webp" alt="" />
        <img src="/assets/premio-2.webp" alt="" />
      </div>
    </div>
    <BotaoCta titulo="Prêmios" href="/premios" />
  </div>
</ContainerBranco>
