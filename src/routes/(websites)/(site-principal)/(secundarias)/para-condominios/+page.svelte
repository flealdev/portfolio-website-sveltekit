<script>
  import CardIlustrativoCompleto from "$lib/components/molecules/card-ilustrativo/--completo/card-ilustrativo--completo.svelte";
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import Premios from "$lib/components/molecules/premios/premios.svelte";
</script>

<Heading
  titulo="Seu condomínio mais conectado"
  subtitulo="Invista em soluções personalizadas com a New Life Fibra!"
/>
<section class="flex flex-col items-center gap-5 dark:text-branco">
  <div class="flex flex-col gap-3">
    <h2
      class=" nlf-titulo-h2 md:text-center text-auxiliar-primeira dark:text-branco"
    >
      Faça como esses grandes residenciais
    </h2>
    <div class="flex flex-wrap md:justify-center gap-2 nlf-paragrafo">
      <ul class="pl-5 list-disc min-w-70">
        <li>Parque Princesa</li>
        <li>Kube Home Resort</li>
        <li>Ed. Italia I e II</li>
        <li>Residencial Riviera</li>
        <li>Residencial Helio Toldo</li>
        <li>Condominio Vista Family</li>
        <li>Primelife Garden</li>
        <li>Max Residencial</li>
        <li>Condominio Passo De Los Toros</li>
      </ul>
      <ul class="pl-5 list-disc min-w-70">
        <li>Ed. Morada do Sol</li>
        <li>Ed. Torres da Duque</li>
        <li>Condomínio Real Park Assis Brasil</li>
        <li>Condomínio Los Moros</li>
        <li>Condomínio Scyla Medici</li>
        <li>Condomínio Casa Pueblo</li>
        <li>Residencial Punta Carretas</li>
        <li>Residencial Sesmarias</li>
        <li>Residencial Vilage Center</li>
      </ul>
    </div>
  </div>
  <a href="/planos" class="nlf-botao nlf-botao--destaque"
    >Escolha New Life Fibra!</a
  >
</section>
<section class="flex flex-col gap-10 justify-center items-center">
  <CardIlustrativoCompleto
    icon="/assets/rocket-azul.svg"
    titulo="A solução está logo ali"
    descricao="Quando o cliente necessitar ou a conexão do condomínio passar por alguma instabilidade, conte sempre com a nossa ultravelocidade tanto em suporte remoto quanto presencial. <strong>Caso necessário, em até 2h nossa equipe estará no local!</strong>"
    imagem="/assets/img-profmarcos.webp"
    altImagem="Imagem do profissional Marcos do suporte técnico New Life Fibra"
  />
  <CardIlustrativoCompleto
    icon="/assets/connection.svg"
    titulo="Projetos FTTB (fibra até o prédio) ou FTTA (fibra até o apartamento)"
    descricao="Ambas as abordagens fornecem uma conexão veloz e estável. Adaptamos as estruturas de acordo com a sua demanda e requisitos. Não importa o tipo de projeto, <strong>toda a conexão é 100% fibra ótica!</strong>"
    altImagem="Foto de técnico realizando manutenção em rede Fibra Ótica."
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
    icon="/assets/book.svg"
    titulo="Qualidade em conexão sem fio"
    descricao="<strong>Nossa equipe técnica está pronta para lidar com instabilidades em redes Wi-Fi</strong> resultantes de interferências, situação comum onde há muitos roteadores próximos uns dos outros."
    invertido="sim"
  />
  <CardIlustrativoCompleto
    icon="/assets/book.svg"
    titulo="Velocidade estável e simétrica"
    descricao="<strong>Garantimos que a velocidade esteja conforme o contratado</strong>. Fomos premiados pela empresa Melhor Plano e possuímos as melhores taxas de Download/Upload no serviço Minha Conexão! <a href='/premios' class='link-line'>Saiba mais</a>."
  >
    <div class="flex w-full justify-center">
      <Premios />
    </div>
  </CardIlustrativoCompleto>
  <CardIlustrativoCompleto
    icon="/assets/award.svg"
    titulo="Reconhecimento internacional"
    descricao="Somos uma <strong>empresa premiada internacionalmente</strong> pela Business Initiative Directions (BID) na Suíça (Genebra, 2019) e pela European Society for Quality Research (ESQR) nos Emirados Árabes Unidos (Dubai, 2021)."
    imagem="/assets/img-premios-internacional.webp"
    altImagem="Imagem de treinamento do setor do suporte técnico"
    invertido="sim"
  />
  <a href="/planos" class="nlf-botao nlf-botao--destaque"
    >Escolha New Life Fibra!</a
  >
</section>
