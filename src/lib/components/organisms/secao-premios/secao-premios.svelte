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
          <p class="nlf-subtitulo-h2 dark:text-branco">
            Subtítulo
          </p>
          <h2 class="titulo-h2 dark:text-branco">
            Seção auxiliar
          </h2>
        </div>
        <p class="paragrafo">
          Utilize essa seção para informar alguma coisa relevante aos seus clientes, mas seja conciso e coerente.
        </p>
        <p class="paragrafo">
          Não utilize mais que dois parágrafos, mantenha o foco no objetivo de captar seu cliente ou informá-lo de forma rápida e simples
        </p>
      </div>
      <div
        class="flex flex-col gap-[10px] w-full max-w-[300px] dark:bg-branco dark:p-5 dark:rounded-lg"
      >
        <img src="/assets/template/ilustrativa-media.jpg" alt="" />
      </div>
    </div>
    <BotaoCta titulo="Clique aqui" href="/" />
  </div>
</ContainerBranco>
