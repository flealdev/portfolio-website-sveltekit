<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
</script>

<Heading titulo="Trabalhe Conosco" subtitulo="Faça parte do time New Life!" />
<section class="flex flex-col gap-10 w-full max-w-240 ">
  <div class="flex flex-col gap-2 items-center md:mb-10">
    <img
      src="/assets/heading-obrigado.webp"
      alt=""
      class="rounded-[4rem_4rem_1rem_1rem] shadow-xl aspect-1180/501"
    />
  </div>
  <div class="flex flex-col gap-2">
    <h2 class="nlf-titulo-h2 text-azul-3 ">Empresa premiada</h2>
    <p class="nlf-paragrafo">
      Fomos premiados internacionalmente em duas ocasiões e recentemente fomos
      certificados como um dos melhores locais para se trabalhar! <a
        href="/premios"
        class="link-line"
        target="_blank">Confira nossos prêmios</a
      >.
    </p>
  </div>
  <div class="flex flex-col gap-2">
    <h2 class="nlf-titulo-h2 text-azul-3 ">Faça parte do nosso time</h2>
    <p class="nlf-paragrafo">
      Clique no botão abaixo para acessar nosso formulário e enviar o seu
      currículo. Lá você poderá definir a área que lhe interessar. Caso você
      seja selecionado, entraremos em contato
    </p>
  </div>
  <div class="flex flex-col items-center gap-2">
    <p class="nlf-enfase text-center text-principal-primeira max-w-[400px]">
      Faça parte de uma equipe que evolui constantemente!
    </p>
    <a
      href="https://br.indeed.com/cmp/New-Life-Fibra/jobs"
      target="_blank"
      class="nlf-botao nlf-botao--cta">Envie seu currículo</a
    >
  </div>
</section>
