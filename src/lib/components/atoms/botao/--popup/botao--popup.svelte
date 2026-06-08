<script>
  const { titulo, onclick } = $props();
</script>

<button
  {onclick}
  class="nlf-grow cursor-pointer rounded-[20px] w-max border dark:border-branco dark:text-branco border-[#808080] text-[#808080] px-[15px] py-[10px] flex justify-center items-center"
>
  <p class="paragrafo">{titulo}</p>
</button>
