<script>
  import Botao from "$lib/components/atoms/botao/botao.svelte";
  import {content} from '/state.svelte.js';

  const {padding = "max-sm:px-5", classes, bgCor} = $props()
</script>

<div
  class="flex flex-wrap max-sm:justify-between sm:max-lg:gap-5 lg:gap-[40px] sm:justify-center w-full {bgCor} {padding} {classes}"
>
  <Botao
    padding={false}
    titulo={content.section1[0].title}
    href={content.section1[0].href}
    textCor="text-branco"
    tipografia="max-md:text-[9px] md:max-lg:text-xs lg:text-sm font-bold"
  >
    {@html content.section1[0].iconSvg}
  </Botao>
  <Botao
    padding={false}
    titulo={content.section1[1].title}
    tipografia="max-md:text-[9px] md:max-lg:text-xs lg:text-sm font-bold"
    href={content.section1[1].href}
    textCor="text-branco"
  >
    <div
      class="max-md:w-[19px] md:w-[25px] aspect-square rounded-full flex justify-center items-center bg-branco"
    >
      {@html content.section1[1].iconSvg}
    </div>
  </Botao>

  <Botao
    padding={false}
    titulo={content.section1[2].title}
    target="_blank"
    tipografia="max-md:text-[9px] md:max-lg:text-xs lg:text-sm font-bold font-bold"
    href={content.section1[2].href}
    textCor="text-branco"
    class=" bg-verde-4-principal max-md:px-[10px] md:px-[15px] max-md:py-[5px] md:py-[7px] rounded-[5px]"
  >
    {@html content.section1[2].iconSvg}
  </Botao>
</div>
