<script>
  import CardIlustrativoCompleto from "$lib/components/molecules/card-ilustrativo/--completo/card-ilustrativo--completo.svelte";
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import Premios from "$lib/components/molecules/premios/premios.svelte";
</script>

<section class="flex flex-col max-md:gap-5 md:gap-10 md:items-center w-full">
  <Heading
    titulo="Sua empresa, nossa parceira"
    subtitulo="Atendimento premium e projetos de todos os tamanhos"
  />
  <h2
    class=" nlf-titulo-h2 md:text-center text-auxiliar-primeira dark:text-branco"
  >
    Faça como essas empresas
  </h2>
  <div
    class="max-md:px-5 max-w-240 w-full max-md:pb-5 md:justify-center md:w-max flex max-md:flex-nowrap md:flex-wrap items-center max-md:overflow-auto max-md:gap-5 md:gap-x-10 md:gap-y-5 dark:bg-branco dark:p-10 rounded-xl"
  >
    <a href="https://www.urbano.com.br/">
      <img
        src="/assets/empresas/urbano.webp"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="https://compre3letras.com.br/">
      <img
        src="/assets/empresas/bigmax.webp"
        alt=""
        class="w-full min-w-32 max-w-40"
      />
    </a>
    <a href="https://www.hotelsanisidro.com.br/">
      <img
        src="/assets/empresas/logo-san-isidro.png"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="https://www.dallehotel.com.br/">
      <img
        src="/assets/empresas/dalle_hotel_logo.png"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="https://minervafoods.com/">
      <img
        src="/assets/empresas/minerva-logo.webp"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="http://www.anversa.com.br/">
      <img
        src="/assets/empresas/anversa.webp"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="https://www.planaconpf.com.br/">
      <img
        src="/assets/empresas/planacon.webp"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="https://zepneus.com.br/">
      <img
        src="/assets/empresas/ze-pneus.webp"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="https://cresol.com.br/">
      <img
        src="/assets/empresas/cresol.svg"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
    <a href="https://www.syngenta.com.br/">
      <img
        src="/assets/empresas/syngenta.svg"
        alt=""
        class="w-full min-w-20 max-w-40"
      />
    </a>
  </div>
  <a href="/planos" class="nlf-botao nlf-botao--destaque"
    >Escolha New Life Fibra!</a
  >
</section>
<section class="flex flex-col gap-10 justify-center items-center">
  <CardIlustrativoCompleto
    icon="/assets/rocket-azul.svg"
    titulo="A solução está logo ali"
    descricao="Quando a sua empresa necessitar de algum suporte devido à imprevistos, conte sempre com a nossa ultravelocidade tanto em suporte remoto quanto presencial. <strong>Caso necessário, em até 2h nossa equipe estará no local!</strong>"
    imagem="/assets/img-profmarcos.webp"
    altImagem="Imagem do profissional Marcos do suporte técnico New Life Fibra"
  />
  <CardIlustrativoCompleto
    icon="/assets/connection.svg"
    titulo="SLA personalizado e estabilidade garantida"
    descricao="Contate nossa equipe técnica no momento da adesão para definir o SLA mais adequado à sua empresa. Possuímos um time de pessoas capacitadas e preparadas para não deixar a sua empresa sem conexão. <strong>Em caso de sinistros há sempre uma equipe de plantão</strong>. Não importa o dia ou a hora, sua conexão será restabelecida o mais rápido possível."
    imagem="/assets/img-datacenter-interno.webp"
    altImagem="Imagem ilustrativa de equipamentos do datacenter"
    invertido="sim"
  />
  <CardIlustrativoCompleto
    icon="/assets/network.svg"
    titulo="Data center equipado com a melhor tecnologia"
    descricao="Apostamos em uma <strong>infraestrutura sólida 100% fibra óptica</strong> e com links de contingência para que você cliente não fique sem conexão quando mais precisar."
    imagem="/assets/img-datacenter-externo.webp"
    altImagem="Imagem do letreiro da sala do datacenter"
  />
  <CardIlustrativoCompleto
    titulo="Velocidade estável e simétrica"
    descricao="<strong>Garantimos que a velocidade esteja conforme o contratado</strong>. Fomos premiados pela empresa Melhor Plano e possuímos as melhores taxas de Download/Upload no serviço Minha Conexão! <a href='/premios' class='link-line'>Saiba mais</a>."
  >
    <div class="flex w-full justify-center">
      <Premios />
    </div>
  </CardIlustrativoCompleto>
  <CardIlustrativoCompleto
    icon="/assets/book.svg"
    titulo="Conhecimento muda o mundo"
    descricao="Investimos constantemente no treinamento do nosso time de colaboradores, inspirando-os a seguir o caminho do estudo e do aprendizado, compartilhando os conhecimentos adquiridos. Isto resulta em um <strong>atendimento diferenciado, humanizado e suporte premium de excelência</strong>."
    imagem="/assets/img-treinasup.webp"
    altImagem="Imagem de treinamento do setor do suporte técnico"
    invertido="sim"
  />
  <CardIlustrativoCompleto
    icon="/assets/award.svg"
    titulo="Reconhecimento internacional"
    descricao="Somos uma <strong>empresa premiada internacionalmente</strong> pela Business Initiative Directions (BID) na Suíça (Genebra, 2019) e pela European Society for Quality Research (ESQR) nos Emirados Árabes Unidos (Dubai, 2021)."
    imagem="/assets/img-premios-internacional.webp"
    altImagem="Imagem de treinamento do setor do suporte técnico"
  />
  <a href="/planos" class="nlf-botao nlf-botao--destaque"
    >Escolha New Life Fibra!</a
  >
</section>
