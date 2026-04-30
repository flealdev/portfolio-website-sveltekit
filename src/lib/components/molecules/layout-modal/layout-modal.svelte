<script>
  import { hideModalFlexHidden } from "$lib/core/utils";

  let {
    id,
    classes,
    classesContainer,
    display,
    children,
    fullscreen = false,
    fechar = true,
    border=false,
    overflowY=false,
    padding="max-md:px-5 max-md:py-10 md:p-10",
    zIndex="z-10000"
  } = $props();
</script>

<div
  {id}
  class="fixed left-0 top-0 h-full w-full flex  justify-center items-center {zIndex} {classes} {display}"
>
  <div
    class="{fullscreen
      ? 'max-md:hidden md:flex'
      : 'flex'} absolute h-full w-full z-15000 inset-0 backdrop-blur-sm"
    onclick={() => hideModalFlexHidden(id)}
  ></div>
  <div
    class="{fullscreen
      ? 'max-md:w-full max-md:h-full lg:rounded-2xl'
      : 'landscape:max-md:h-full landscape:max-md:w-full landscape:max-md:rounded-none rounded-2xl max-md:w-[90%]'}  md:w-[60%] z-20000 {padding} flex flex-col gap-5 justify-start items-center bg-branco dark:bg-dark overflow-auto {border ? 'border-5 border-azul-1-claro' : ''} {overflowY ? 'max-h-[600px] overflow-y-auto' : ''} {classesContainer}"
  >
    {#if fechar}
    <button
      class="font-extrabold text-3xl leading-xs text-principal-primeira dark:text-branco self-end"
      onclick={() => hideModalFlexHidden(id)}>X</button
    >
    {/if}
    {@render children?.()}
  </div>
</div>
