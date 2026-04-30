<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import FormSolicitaContato from "$lib/components/molecules/form-solicita-contato/form-solicita-contato.svelte";
  import FormSugestoesCriticas from "$lib/components/molecules/form-sugestoes-criticas/form-sugestoes-criticas.svelte";
  import Divisor from "$lib/components/atoms/divisor/divisor.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

  <Heading
    titulo="Fale com a New Life Fibra"
    subtitulo="Conheça nossos canais de atendimento"
  />
  <div
    class="flex flex-wrap md:justify-around items-start gap-y-10 gap-x-5 nlf-paragrafo w-full"
  >
    <ContainerBranco class="lg:w-[80%]">
      <div
        class="flex flex-wrap 2xl:justify-center max-md:gap-3 md:items-center md:max-lg:gap-5 lg:gap-10 w-full"
      >
        <div class="flex flex-col">
          <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
            Canais
          </h2>
          <p class="nlf-subtitulo--h2">Nossos canais padrão de atendimento</p>
        </div>
        <div
          class="flex flex-col md:border-l-4 md:rounded-l-lg md:pl-[10px] md:py-[10px] md:border-auxiliar-primeira md:gap-2 w-full md:max-xl:max-w-md xl:max-w-160"
        >
          <p>
            <span class="font-bold">Redes sociais:</span>
            <a
              href="https://www.instagram.com/newlifefibra/"
              class="link-underline">Instagram</a
            >,
            <a
              href="https://www.facebook.com/newlifefibra"
              class="link-underline">Facebook</a
            >
            e
            <a
              href="https://wa.me/555433101008"
              class="link-underline">Whatsapp</a
            >
          </p>
          <p>
            <span class="font-bold">Telefone:</span>
            <a href="tel:5433101008" class="link-underline">(54) 3310-1008</a>
          </p>
          <p>
            <span class="font-bold">E-mail:</span>
            <a href="mailto:contato@newlifefibra.com.br" class="link-underline"
              >contato@newlifefibra.com.br</a
            >
          </p>
        </div>
      </div>
    </ContainerBranco>
    <ContainerBranco>
      <div
        class="flex flex-col gap-3 min-w-76 w-full lg:max-2xl:max-w-120 2xl:max-3xl:max-w-160 3xl:max-w-240"
      >
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-1">
            <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
              Ligamos para você!
            </h2>
            <p class="nlf-subtitulo--h2">
              Para sua maior comodidade e praticidade
            </p>
          </div>
          <p>
            Informe seus dados e nossos atendentes entrarão em contato assim que
            possível.
          </p>
        </div>
        <FormSolicitaContato assunto="CONTATO - Solicitação - New Life Fibra" />
      </div>
    </ContainerBranco>
    <ContainerBranco>
      <div
        class="flex flex-col gap-3 md:min-w-76 w-full lg:max-2xl:max-w-120 2xl:max-3xl:max-w-160 3xl:max-w-240"
      >
        <div class="flex flex-col gap-1">
          <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
            Sugestões e críticas
          </h2>
          <p class="nlf-subtitulo--h2">
            Canal especial para reclamações, sugestões e críticas
          </p>
        </div>
        <p class="">
          Relate o que for necessário para o nosso crescimento e melhoria de
          nossos serviços. Acreditamos e, sobretudo, confiamos em você!
        </p>
        <p class="nlf-nota-rodape">
          Lembre-se: possuímos um <a href="/avalie" class="link-underline"
            >canal de avaliacões e ouvidoria</a
          >.
        </p>
        <FormSugestoesCriticas assunto="CONTATO - Feedback - New Life Fibra" />
      </div>
    </ContainerBranco>
  </div>
