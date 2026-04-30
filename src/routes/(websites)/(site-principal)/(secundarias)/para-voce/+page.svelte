<script>
  import CardIlustrativoCompleto from "$lib/components/molecules/card-ilustrativo/--completo/card-ilustrativo--completo.svelte";
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import Premios from "$lib/components/molecules/premios/premios.svelte";
</script>

<Heading
  titulo="Internet para a sua residência"
  subtitulo="A New Life Fibra proporcionando o melhor para você."
/>
<div class="flex flex-col gap-10">
  <CardIlustrativoCompleto
    icon="/assets/rocket-azul.svg"
    titulo="O importante é ter com quem contar"
    descricao="A New Life Fibra conta com uma equipe técnica capacitada para lhe entregar a conexão mais veloz, estável e consistente da região. Possuímos um <strong>suporte premium</strong>, atendemos todos os dias inclusive aos domingos e feriados."
    imagem="/assets/img-sup_premium.webp"
    altImagem="Imagem ilustrativa do setor de suporte técnico"
  />
  <CardIlustrativoCompleto
    icon="/assets/network.svg"
    titulo="Data center equipado com a melhor tecnologia"
    descricao="Apostamos em uma <strong>infraestrutura sólida 100% fibra óptica</strong> e com links de contingência para que você cliente não fique sem conexão quando mais precisar."
    imagem="/assets/img-datacenter-externo.webp"
    altImagem="Imagem do letreiro da sala do datacenter"
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
    icon="/assets/book.svg"
    titulo="Conhecimento muda o mundo"
    descricao="Investimos constantemente no treinamento do nosso time de colaboradores, inspirando-os a seguir o caminho do estudo e do aprendizado, compartilhando os conhecimentos adquiridos. Isto resulta em um <strong>atendimento diferenciado, humanizado e suporte premium de excelência</strong>."
    imagem="/assets/img-treinasup.webp"
    altImagem="Imagem de treinamento do setor do suporte técnico"
  />
  <CardIlustrativoCompleto
    icon="/assets/award.svg"
    titulo="Reconhecimento internacional"
    descricao="Somos uma <strong>empresa premiada internacionalmente</strong> pela Business Initiative Directions (BID) na Suíça (Genebra, 2019) e pela European Society for Quality Research (ESQR) nos Emirados Árabes Unidos (Dubai, 2021)."
    imagem="/assets/img-premios-internacional.webp"
    altImagem="Imagem de treinamento do setor do suporte técnico"
    invertido="sim"
  />
  <div class="w-full flex justify-center items-center">
    <a href="/planos" class="nlf-botao nlf-botao--destaque"
      >Escolha New Life Fibra!</a
    >
  </div>
</div>
