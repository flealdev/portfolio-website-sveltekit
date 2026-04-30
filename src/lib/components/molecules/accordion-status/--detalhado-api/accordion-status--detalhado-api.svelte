<script>
  const {
    dataInicio,
    href,
    titulo,
    locais,
    previsao,
    sintomas,
    descricao,
    situacao,
  } = $props();

  // dataFormatada, titulo, cidade: array, previsao, sintomas:array
</script>

<details class="group w-full">
  <summary
    class="cursor-pointer group-open:text-branco dark:text-branco border border-vermelho/30 group-open:bg-vermelho group-hover:border-vermelho group-hover:group-open:text-branco dark:bg-branco dark:border-vermelho dark:shadow-[0_0_0.5rem_red] dark:group-open:shadow-none group-hover:text-vermelho rounded-lg group-open:rounded-t-lg group-open:rounded-b-none px-6 py-4.5 flex flex-col max-md:gap-2 md:gap-3"
  >
    <!-- linha titulo -->
    <div class="flex flex-col">
      <div class="flex justify-between items-center">
        <p
          class="nlf-paragrafo font-light text-principal-primeira group-open:text-branco"
        >
          {dataInicio}
        </p>
      </div>
      <h3
        class="nlf-titulo-h3 uppercase leading-md text-principal-primeira group-open:text-branco"
      >
        {titulo}
      </h3>
    </div>
  </summary>
  <!-- conteudo accordion -->
  <div
    class="px-6 py-4.5 max-md:gap-3 md:gap-5 flex flex-col text-base border dark:bg-branco border-vermelho rounded-b-lg nlf-paragrafo dark:text-preto"
  >
    <p class="flex flex-col w-full gap-2">
      <span>{descricao}</span>
      <span class="nlf-nota-rodape"
        >* Se necessário este conteúdo será atualizado durante o decorrer do
        incidente.</span
      >
    </p>
  </div>
</details>

<style lang="postcss">
  summary::marker {
    @apply content-none;
  }
</style>
