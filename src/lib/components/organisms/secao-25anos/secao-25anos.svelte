<!-- seção 25 anos -->
<script>
  const {class:classes = "flex", escuro=false, containerTexto=""} = $props()
</script>    

<div class="gap-5 items-center justify-center {classes}">
      <img
        src={escuro ? "/assets/25anos/logo-25anos-branca-400px.webp" : "/assets/25anos/logo-25anos-azul.webp"}
        class="w-full max-w-[90px]"
        alt=""
      />
      <div class="flex flex-col items-center text-center">
        <p class="text-[18px] font-black {escuro ? 'text-ouro' : 'text-azul-4-principal'}">
          25 anos ao seu lado
        </p>
        <p
          class="max-lg:text-sm lg:max-3xl:text-md 3xl:text-2md leading-none font-light leading {escuro ? 'text-ouro' : ''}"
        >
          O time New Life agradece por você fazer parte de cada momento!
        </p>
      </div>
    </div>