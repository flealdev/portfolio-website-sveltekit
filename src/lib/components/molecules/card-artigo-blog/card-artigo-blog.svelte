<script>
  const { titulo, descricao, href } = $props();
</script>

<a
  {href}
  class="flex flex-col justify-center bg-linear-to-r from-[gold] from-20% text-preto dark:to-[#fff4b9] to-[rgba(255,122,0,0.2)] to-100% max-md:gap-[5px] md:gap-[10px] max-md:px-[15px] max-md:py-[20px] md:px-10 md:py-5 rounded-tl-[20px] rounded-tr-[5px] rounded-br-[20px] rounded-bl-[5px] shadow-md nlf-grow"
>
  <p class="nlf-enfase">{titulo} ...</p>
  <p class="nlf-paragrafo">{descricao} ...</p>
</a>
