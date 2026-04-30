<script>
  import CardIlustrativoCompleto from "$lib/components/molecules/card-ilustrativo/--completo/card-ilustrativo--completo.svelte";
  import Heading from "$lib/components/molecules/heading/heading.svelte";
</script>

<Heading
  titulo="Conheça nossos serviços"
  subtitulo="De visitas técnicas até a estruturação de condomínios, conheça os serviços prestados pela New Life Fibra."
/>
<section class=" flex flex-col gap-10 justify-center items-center">
  <CardIlustrativoCompleto
    icon="/assets/rocket-azul.svg"
    titulo="Precisa de uma ajuda?"
    descricao="Quando você precisar, estaremos disponíveis para lhe auxiliar nas questões mais técnicas. <strong>Confira os valores de nossa visita técnica <a href='/contato' class='link-line'>entrando em contato conosco.</a></strong>"
    imagem="/assets/img-profmarcos.webp"
    altImagem="Imagem do profissional Marcos do suporte técnico New Life Fibra"
  />
  <CardIlustrativoCompleto
    icon="/assets/connection.svg"
    titulo="Projetos FTTB (fibra até o prédio) ou FTTA (fibra até o apartamento)"
    descricao="Estruturamos seu condomínio/edifício para que os moradores tenham uma conexão estável e de ultravelocidade! Não importa o tipo de projeto, <strong>toda a conexão é 100% fibra ótica!</strong>"
    imagem="/assets/infra-equipados.webp"
    altImagem="Foto de técnico realizando manutenção em rede Fibra Ótica."
    invertido="sim"
  />
  <CardIlustrativoCompleto
    titulo="Estruturação de torres"
    descricao="Estruturamos torres para conexão ponto a ponto em áreas rurais disponibilizando acesso de alta velocidade em ambientes remotos."
  />
  <CardIlustrativoCompleto
    icon="/assets/book.svg"
    titulo="Projetos de telecomunicações"
    descricao="Projetamos redes de telecom para conexões de ultravelocidade. Consulte condições para a sua empresa ou projeto pessoal. <strong><a href='https://brmom.com.br' class='link-line'>Saiba mais aqui.</a></strong>"
  />
  <a href="/planos" class="nlf-botao nlf-botao--destaque"
    >Escolha New Life Fibra!</a
  >
</section>
