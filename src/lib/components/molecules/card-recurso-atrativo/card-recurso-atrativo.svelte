<script>
  let {
    destaque = false,
    bgUrl = "",
    subtitulo = "",
    titulo = "",
    href = "",
    onclick = "",
    class: classes = "",
  } = $props();

  let classDestaque = $state("");

  if (destaque) {
    classDestaque = `background-image: linear-gradient(225deg, rgba(22,57,203,0.8) 70%, rgba(255,215,0,0.6) 81%), url('${bgUrl}')`;
  } else {
    classDestaque = `background-image: linear-gradient(45deg, rgba(22,57,203,0.8) 70%, rgba(50,205,50,0.6) 81%), url('${bgUrl}')`;
  }
</script>

{#if href != ""}
  <a
    {href}
    style={classDestaque}
    class="flex rounded-tr-[50px] bg-cover bg-opacity-10 rounded-tl-[8px] rounded-b-[8px] {destaque
      ? 'shadow-[-8px_8px_4px_gold] text-right justify-end max-xl:pr-[22px] xl:pr-[30px] max-xl:pt-[15px] xl:pt-[22px]'
      : 'shadow-[-8px_8px_4px_#32CD32] items-end max-xl:pl-[5px] xl:pl-[12px] max-xl:pb-[15px] xl:pb-[22px]'} w-max max-xl:min-w-[150px] xl:min-w-60 max-xl:h-[200px] xl:h-[320px] {classes}"
  >
    <p class="text-branco">
      <span
        class="font-light max-xl:text-md xl:text-[18px] max-xl:leading-[0.9] xl:leading-xs"
        >{subtitulo}<br /></span
      >
      <span
        class="font-black max-xl:text-[22px] xl:text-[25px] max-xl:leading-[0.9] xl:leading-xs"
        >{titulo}</span
      >
    </p>
  </a>
{:else}
  <button
    {onclick}
    style={classDestaque}
    class="flex rounded-tr-[50px] bg-cover bg-opacity-10 rounded-tl-[8px] rounded-b-[8px] {destaque
      ? 'shadow-[-8px_8px_4px_gold] text-right justify-end max-xl:pr-[22px] xl:pr-[30px] max-xl:pt-[15px] xl:pt-[22px]'
      : 'shadow-[-8px_8px_4px_#32CD32] text-left items-end max-xl:pl-[5px] xl:pl-[12px] max-xl:pb-[15px] xl:pb-[22px]'} w-max max-xl:min-w-[150px] xl:min-w-60 max-xl:h-[200px] xl:h-[320px] {classes}"
  >
    <p class="text-branco w-full">
      <span
        class="font-light max-xl:text-md xl:text-[18px] max-xl:leading-[0.9] xl:leading-xs"
        >{subtitulo}<br /></span
      >
      <span
        class="font-black max-xl:text-[22px] xl:text-[25px] max-xl:leading-[0.9] xl:leading-xs"
        >{titulo}</span
      >
    </p>
  </button>
{/if}
