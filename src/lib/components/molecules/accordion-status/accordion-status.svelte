<script>
  const { incidente } = $props();
</script>

<details class="group w-full">
  <summary
    class="cursor-pointer group-open:text-branco dark:text-branco border border-preto/30 group-open:bg-principal-primeira group-hover:border-principal-primeira group-hover:group-open:text-branco dark:border-branco dark:group-hover:bg-branco dark:group-open:group-hover:border-principal-primeira dark:group-open:group-hover:bg-principal-primeira dark:group-open:border-principal-primeira dark:group-open:group-hover:text-branco dark:group-hover:text-preto dark:group-hover:border-branco group-hover:text-principal-primeira rounded-lg group-open:rounded-t-lg group-open:rounded-b-none px-6 py-4.5"
  >
    <span
      class="dark:group-open:group-hover:underline dark:group-open:group-hover:decoration-branco dark:group-open:group-hover:underline-offset-4"
    >
      {incidente.title} -
      {#each incidente.cidade as cidade, i}
        {#if i === incidente.cidade.length - 1}
          {cidade}
        {:else}
          {cidade},&nbsp;
        {/if}
      {/each}
      - {incidente.dataFormatada} a {incidente.dataConclusao}
    </span>
  </summary>
  <div
    class="px-6 py-4.5 flex flex-col gap-3 text-base border border-principal-primeira dark:bg-branco rounded-b-lg nlf-paragrafo"
  >
    <p>
      <span class="font-bold w-full">Sintomas: </span>
      {#each incidente.sintomas as sintoma, i}
        {#if i === incidente.sintomas.length - 1}
          {sintoma}
        {:else}
          {sintoma},&nbsp;
        {/if}
      {/each}
    </p>
    <p>
      {@html incidente.descricao}
    </p>
  </div>
</details>
