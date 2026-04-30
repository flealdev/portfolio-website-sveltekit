<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import Locais from "$lib/components/molecules/locais/locais.svelte";
</script>

<Heading
  titulo="Presença no RS"
  subtitulo="Integrante do Grupo GrandMom, estamos em atividade desde a
        década de 1990"
/>
<section
  class="flex flex-wrap xl:w-max md:max-xl:justify-center items-center max-md:gap-5 md:gap-10 nlf-paragrafo"
>
  <div
    class="p-2 bg-principal-primeira max-md:rounded-[7rem_2rem_7rem_2rem] md:rounded-[15rem_2rem_15rem_2rem] shadow-lg"
  >
    <img
      src="/assets/mapa-onde_estamos.webp"
      alt=""
      class="w-full max-md:max-w-100 md:max-w-150 max-xl:object-contain xl:object-cover xl:object-top-left"
    />
  </div>
  <div
    class="flex flex-col max-md:gap-2 md:gap-5 justify-center items-center max-w-120 dark:text-branco"
  >
    <p>
      A New Life Fibra nasceu no ano de 2010 com a missão de conectar os gaúchos
      a um serviço de excelência, premiado internacionalmente.
    </p>
    <p>
      Atualmente atendemos mais de 20 municípios do estado do Rio Grande do Sul
      e possuímos sedes nas cidades de Bagé, Passo Fundo e São Gabriel.
    </p>
  </div>
</section>
<section class="flex flex-col md:items-center gap-5">
  <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
    Nossas unidades
  </h2>
  <Locais />
</section>
