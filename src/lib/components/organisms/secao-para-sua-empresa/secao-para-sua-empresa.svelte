<script>
  import BotaoLink from "$lib/components/atoms/botao/--link/botao--link.svelte";
  import BotaoWpp from "$lib/components/atoms/botao/--wpp/botao--wpp.svelte";
  import CardProdutoImpactante from "$lib/components/molecules/card-produto/--impactante/card-produto--impactante.svelte";
</script>

<div class="flex w-full max-w-[30rem]">
  <div
    class="flex flex-col w-full max-md:gap-[30px] py-[40px]  px-5 bg-branco border-2 border-preto/60 bg-cover shadow-container rounded-[10px]"
  >
    <div class="flex flex-col md:flex-wrap gap-5">
      <h2 class="nlf-titulo-h2 font-black">Produtos especiais</h2>
      <img
        src="/assets/template/ilustrativa-1.jpg"
        alt=""
        class="w-full max-w-[200px] rounded-[10px]"
      />
      <div class="flex flex-col gap-[15px] nlf-paragrafo">
        <p class="uppercase font-bold">Garantias e vantagens:</p>
        <ul class="flex flex-col gap-[10px] justify-center">
          <li class="flex items-center gap-[10px]">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              class="w-full max-w-[20px]"
            >
              <circle cx="7.5" cy="7.78345" r="7.5" fill="#00C947" />
            </svg>
            <p class="leading-[1.1]">
              <span class="font-bold"
                >Garantia 1</span
              > com diferencial
            </p>
          </li>
          <li class="flex items-center gap-[10px]">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              class="w-full max-w-[20px]"
            >
              <circle cx="7.5" cy="7.78345" r="7.5" fill="#00C947" />
            </svg>
            <p class="leading-[1.1]">
              <span class="font-bold"
                >Garantia 2</span
              > com diferencial
            </p>
          </li>
          <li class="flex items-center gap-[10px]">
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              class="w-full max-w-[20px]"
            >
              <circle cx="7.5" cy="7.78345" r="7.5" fill="#00C947" />
            </svg>
            <p class="leading-[1.1]">
              <span class="font-bold"
              >Garantia 3</span
              > com diferencial
            </p>
          </li>
        </ul>
      </div>
    </div>
    <BotaoWpp titulo="Quero saber mais" mensagem="Olá! Vim do site e gostaria de atendimento comercial. [NÃO EXCLUA]"/>
    <!-- <BotaoLink eDestaque={true} href="/planos" titulo="Planos e promoções" /> -->
  </div>
</div>
