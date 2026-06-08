<script>
  const { titulo, descricao, frase, src, alt } = $props();
</script>

<div
  class="flex flex-col items-center w-full max-w-[25rem] justify-center gap-[10px]"
>
  <img {src} {alt} class="max-w-[300px]" />
  <div
    class="flex flex-col gap-[10px] text-preto bg-auxiliar-segunda p-[20px] border-b-[5px] border-principal-primeira rounded-md"
  >
    <h3 class="titulo-h3 text-auxiliar-primeira">{titulo}</h3>
    <p class="paragrafo">{descricao}</p>
    <p class="paragrafo font-bold">{frase}</p>
  </div>
</div>
