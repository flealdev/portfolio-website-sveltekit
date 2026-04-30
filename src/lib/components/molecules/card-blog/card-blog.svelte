<script>
  const {
    titulo = "",
    data = "",
    resumo = "",
    href = "",
    classesContainerPai = "",
    classesBotao = "",
  } = $props();

  // formata data para xx/xx/xxxx de acordo com dado bruto recebido da api rest do wp: 2022-11-17T09:17:15
  const dataCriacao = new Date(data);
  const dataFormatada = formataData(dataCriacao);

  function formataData(data) {
    function adicionaZero(numero) {
      if (numero <= 9) return "0" + numero;
      else return numero;
    }
    let dataAtualFormatada =
      adicionaZero(data.getDate().toString()) +
      "/" +
      adicionaZero(data.getMonth() + 1).toString() +
      "/" +
      data.getFullYear();
    return dataAtualFormatada;
  }
</script>

<div
  class="min-w-[20rem] w-full max-w-60 flex flex-col gap-5 border-2 border-auxiliar-primeira dark:border-branco rounded-2xl px-5 py-10 {classesContainerPai} dark:text-branco"
>
  <div class="flex flex-col gap-2">
    <a {href} data-sveltekit-preload-data>
      <h3 class="nlf-titulo-h3">{@html titulo}</h3>
    </a>
    <p class="nlf-etiquetas">{dataFormatada}</p>
  </div>
  <div>
    {@html resumo}
  </div>
  <a {href} data-sveltekit-preload-data class={classesBotao}>Leia mais</a>
</div>

<style>
</style>
