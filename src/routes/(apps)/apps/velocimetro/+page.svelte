<script>
  const ip = async () => {
    const res = await fetch("https://ipapi.co/json");
    const data = await res.json();

    // console.log(data)
    return data;
  };

  let getIP = $derived(ip());
</script>

<div
  class="nlf-container xl:min-h-screen flex flex-col gap-10 justify-center items-center pt-5"
>
  <div
    class="flex flex-col gap-5 items-center justify-center w-full max-w-240"
  >
    <p class="nlf-nota_rodape text-center px-5">
      <span class="font-bold text-vermelho">Atenção:</span> certifique-se de selecionar
      o servidor New Life Fibra mais próximo!
    </p>
    <iframe
      class="w-full max-w-90 aspect-360/700"
      src="https://newlifefibra.speedtestcustom.com"
    ></iframe>
  </div>
  <div
    class="flex bg-[#f3f2fc] w-full max-w-240 md:rounded-md items-center justify-center sticky bottom-0 py-5 dark:text-preto"
  >
    <div
      class="flex flex-col max-md:items-center md:items-end w-full max-w-200 gap-5"
    >
      <div
        class="flex items-center max-md:justify-around md:justify-between w-full"
      >
        {#await getIP}
          <div
            class="bg-[#DCDCDC] w-full max-w-[160px] rounded-md shimmer h-[40px]"
          ></div>
          <div
            class="bg-[#DCDCDC] shimmer rounded-md w-full max-w-[300px] h-[30px]"
          ></div>
        {:then res}
          {#if res.version === "IPv6"}
            <p
              class="uppercase max-md:px-3 md:px-5 max-md:py-[4px] md:py-2 bg-principal-terceira text-branco flex w-max rounded-md font-bold max-md:text-sm max-md:leading-md"
            >
              IPv6 ativado!
            </p>
            <p
              class="max-md:text-sm max-md:leading-md md:nlf-nota_rodape break-all max-md:w-36"
            >
              Seu IP é <span class="font-bold">{res.ip}</span>
            </p>
          {:else}
            <p
              class="uppercase max-md:px-3 md:px-5 max-md:py-[4px] md:py-2 bg-vermelho text-branco flex w-max rounded-md font-bold max-md:text-sm max-md:leading-md"
            >
              IPv6 não ativado!
            </p>
            <p
              class="max-md:text-sm max-md:leading-md md:nlf-nota_rodape break-all max-md:w-36"
            >
              Seu IP é <span class="font-bold">{res.ip}</span>.
            </p>
          {/if}
        {:catch error}
          <p class="text-[#626166]">
            Não foi possível consultar o endereço IP!
          </p>
        {/await}
      </div>
      <div class="flex flex-wrap justify-end items-end gap-2 w-max">
        <p class="nlf-nota_rodape mb-[3px]">Um sistema</p>
        <a href="/" class="-md:w-full">
          <img
            src="/assets/logo-nlf-solida-azul-w200.webp"
            alt="Logomarca"
            class="w-full max-w-16 aspect-400/223"
          />
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .shimmer {
    @apply overflow-hidden relative before:content-[''] before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] before:absolute before:h-full before:w-full before:z-50 before:animate-[shimmer_1s_infinite];
  }
</style>
