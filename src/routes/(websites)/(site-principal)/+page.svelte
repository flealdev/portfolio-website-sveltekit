<script>
    import SecaoCciVisiteInsta from "$lib/components/organisms/secao-cci/--visite-insta/secao-cci--visite-insta.svelte";
  import SecaoGoogle from "$lib/components/organisms/secao-google/secao-google.svelte";
  import SecaoHero from "$lib/components/organisms/secao-hero/secao-hero.svelte";
  import SecaoIndique from "$lib/components/organisms/secao-indique/secao-indique.svelte";
  import SecaoParaSuaEmpresa from "$lib/components/organisms/secao-para-sua-empresa/secao-para-sua-empresa.svelte";
  import SecaoPlanos from "$lib/components/organisms/secao-planos/secao-planos.svelte";
  import SecaoSaibaMais from "$lib/components/organisms/secao-saiba-mais/secao-saiba-mais.svelte";
  import SecaoVantagens from "$lib/components/organisms/secao-vantagens/secao-vantagens.svelte";
  import SecaoPremios from "$lib/components/organisms/secao-premios/secao-premios.svelte";
  import SecaoProjetos from "$lib/components/organisms/secao-projetos/secao-projetos.svelte";
  import SecaoApp from "$lib/components/organisms/secao-app/secao-app.svelte";
  import SecaoInstitucional from "$lib/components/organisms/secao-institucional/secao-institucional.svelte";
  import SecaoDuvidas from "$lib/components/organisms/secao-duvidas/secao-duvidas.svelte";
  import SecaoBlogRecentes from "$lib/components/organisms/secao-blog-recentes/secao-blog-recentes.svelte";
  import ModalDuvidasFrequentes from "$lib/components/molecules/modal-duvidas-frequentes/modal-duvidas-frequentes.svelte";
  import Secao_25anos from "$lib/components/organisms/secao-25anos/secao-25anos.svelte";
  import SecaoVisiteInsta from "$lib/components/organisms/secao-visite-insta/secao-visite-insta.svelte";

  const duvidas = [
    {
      id: "modal-duvidas-pagamento",
      titulo: "Pagamento",
      componente: ModalDuvidasFrequentes,
      descricao: "Informações sobre pagamento.",
      duvidas: [
        {
          questao: "Como posso realizar o pagamento da assinatura?",
          resposta: "Pague por vários meios, como: pix, boleto ou carnê.",
        },
        {
          questao: "Por onde obtenho o código pix ou o boleto?",
          resposta:
            "Enviaremos um e-mail ou você pode baixar e <a href='/aplicativo' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>acessar o aplicativo Minha New Life</a>.",
        },
      ],
    },
    {
      id: "modal-duvidas-conexao",
      titulo: "Conexão",
      componente: ModalDuvidasFrequentes,
      descricao: "Informações sobre sua conexão.",
      duvidas: [
        {
          questao: "Como posso testar a velocidade da minha conexão?",
          resposta:
            "Você pode acessar o <a href='/apps/velocimetro' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>nosso velocímetro</a> ou a <a href='https://www.brasilbandalarga.com.br/' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>ferramenta oficial da Anatel.</a>",
        },
        {
          questao: "Minha conexão está bloqueada, como procedo?",
          resposta:
            "Você pode <a href='/aplicativo' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>baixar o aplicativo Minha New Life</a> ou <a href='https://wa.me/555532372600' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>entrar em contato via whatsapp</a> e solicitar o autodesbloqueio. Você também pode consultar nossos canais de atendimento em https://minhanewlife.com.br/contato.",
        },
        {
          questao: "Fiquei sem conexão, terei desconto?",
          resposta:
            "Com certeza. Entre em <a href='https://wa.me/555532372600' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>contato com nosso Setor de Atendimento ao Cliente</a> que após a comprovação do tempo em que o serviço ficou indisponível você obterá um desconto proporcional.",
        },
      ],
    },
    {
      id: "modal-duvidas-endereco",
      titulo: "Endereço",
      componente: ModalDuvidasFrequentes,
      descricao:
        "Informações sobre endereço, viabilidade e serviços relacionados.",
      duvidas: [
        {
          questao: "Como verifico se há viabilidade para o meu endereço?",
          resposta:
            "Entre em contato conosco pelo formulário 'Consulte viabilidade' na <a href='/planos' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>página de planos</a> ou em qualquer outro <a href='/contato' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>canal de atendimento</a>.'",
        },
        {
          questao:
            "Sou cliente mas terei que trocar de endereço, como funciona?",
          resposta:
            "Entre em contato conosco em nossos <a href='/contato' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>canais de atendimento</a> e solicite uma troca de endereço. Você também poderá <a href='/onde-estamos' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>comparecer em uma das nossas unidades</a> para resolver essa questão. Será aberta uma ordem de serviço para que o técnico realize os processos necessários.",
        },
        {
          questao: "Vou mudar de cidade, pagarei multa?",
          resposta:
            "Se você comprovar que irá mudar para uma cidade onde não possuímos viabilidade, você não pagará multa. De qualquer forma, é ideal que você <a href='/contato' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>entre em contato conosco</a> e confira junto ao setor de atendimento ao cliente.",
        },
      ],
    },
    {
      id: "modal-duvidas-atendimento",
      titulo: "Atendimento",
      componente: ModalDuvidasFrequentes,
      descricao: "Informações sobre atendimento, SLA, disponibilidade, etc.",
      duvidas: [
        {
          questao: "Como funciona o atendimento em caso de instabilidade?",
          resposta:
            "Nosso suporte técnico está disponível de segunda a segunda, inclusive nos feriados. <a href='https://wa.me/555532372600' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>Nos acione via whatsapp</a> ou <a href='tel:05532372600' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>ligação</a> para obter um atendimento rápido, humanizado e personalizado. Consulte todos os nossos canais de atendimento em https://minhanewlife.com.br/contato.",
        },
        {
          questao: "Qual é o SLA para clientes empresariais e corporativos?",
          resposta:
            "Nossa prioridade é manter o seu negócio 100% funcional e por isso mandaremos equipes técnicas na sua empresa em até 2h caso seja necessário. Além disso possuímos canais dedicados para atendimento corporativo com acompanhamento direto do nosso coordernador de suporte técnico e linha direta com o Centro de Operações de Rede (NOC) para projetos personalizados ou suporte avançado.",
        },
        {
          questao: "Sou cliente convencional, como funciona o SLA?",
          resposta:
            "Tentaremos resolver qualquer instabilidade de forma remota durante o primeiro atendimento, mas caso seja necessária a visita de um técnico, ofertamos um SLA de até 48h úteis para que uma das equipes compareça ao local para efetuar os reparos necessários. Conte com a atenção e o atendimento humanizado das equipes New Life!",
        },
      ],
    },
    {
      id: "modal-duvidas-condicoes",
      titulo: "Condições",
      componente: ModalDuvidasFrequentes,
      descricao: "Informações sobre condições contratuais.",
      duvidas: [
        {
          questao: "Há multa em caso de cancelamento?",
          resposta:
            "Para garantirmos a qualidade dos nossos serviços é necessário que você cliente fique conosco durante um período mínimo, após tal período você poderá realizar o cancelamento sem pagamento de multas.",
        },
        {
          questao: "Os contratos são válidos durante quantos meses?",
          resposta:
            "Você escolhe: entre 12 e 24 meses. Com a fidelidade de 24 meses você tem benefícios exclusivos sendo cliente New Life.",
        },
        {
          questao: "Tenho dúvidas sobre meu contrato, quem poderá me ajudar?",
          resposta:
            "Você pode entrar em contato direto com nosso setor jurídico através do e-mail <a href='mailto:juridico@newlifefibra.com.br' target='_blank' style='text-decoration-line:underline;text-underline-offset:2px;text-decoration-style: solid;'>juridico@newlifefibra.com.br</a>. Iremos sanar todas as suas dúidas.",
        },
      ],
    },
    {
      id: "modal-duvidas-planos",
      titulo: "Planos",
      componente: ModalDuvidasFrequentes,
      descricao: "Informações sobre planos e velocidades.",
      duvidas: [
        {
          questao: "Qual a garantia de velocidade?",
          resposta:
            "Nós garantimos taxas dentro da faixa estipulada pela Anatel: a média mensal deve ser igual ou superior a 80% do máximo contratado. Ou seja: contratando um plano de 1000mbps, a média mensal deve chegar a no mínimo 800mbps.",
        },
        {
          questao: "Quais os benefícios e vantagens da New Life Fibra?",
          resposta:
            "Aqui você tem: suporte premium de segunda a segunda (incluindo feriados), atendimento humanizado e personalizado, velocidades simétricas (nada de 100mega download e 50mega upload, aqui é 100/100), suporte avançado e projetos especializados.",
        },
        {
          questao: "Há planos empresariais, B2B ou para condomínios?",
          resposta:
            "Claro, seja qual for o seu negócio, teremos a solução ideal. Entre em contato ..... ",
        },
      ],
    },
    {
      id: "modal-duvidas-projetos",
      titulo: "Projetos",
      componente: ModalDuvidasFrequentes,
      descricao: "Informações sobre projetos e serviços.",
      duvidas: [
        {
          questao:
            "Tenho um hotel porém a conexão sempre foi ruim, vocês conseguiriam atender?",
          resposta:
            "Com certeza! Nossa equipe de projetos de rede, integrante no Centro de Operações de Rede (NOC), está preparada para auxiliar o seu negócio a escalar de uma forma saudável. Realizamos projetos de adequação Wi-Fi com equipamentos de alta qualidade e de marcas renomadas, além de possibilitar uma conexão via fibra óptica em cada quarto, se necessário.",
        },
        {
          questao:
            "Possuo um condomínio e um prédio residencial, vocês realizam projetos personalizados?",
          resposta:
            "É claro, com a New Life Fibra a sua conexão não tem fronteiras! Já conectamos vários condomínios e prédios nas localidades que atendemos, inclusive com projetos de fibra óptica até o apartamento (FTTA no jargão técnico) que é a forma mais moderna, estável e confiável do mercado.",
        },
        {
          questao:
            "Tenho uma empresa e gostaria somente do link de internet. Vocês prestam esse serviço?",
          resposta:
            "Claro, seja qual for o seu negócio, teremos a solução ideal. Podemos fornecer links dedicados ou de última milha a depender do ramo e demanda do seu negócio.",
        },
      ],
    },
  ];
</script>

<div class="flex flex-col items-center gap-[100px] w-full">
  <div class="flex flex-col items-center gap-[100px] nlf-padding w-full">
    <SecaoHero />
    <SecaoPlanos />
    <div class="flex flex-wrap items-center justify-center w-full gap-[100px]">
      <SecaoVantagens />
      <SecaoParaSuaEmpresa />
    </div>
    <SecaoGoogle />
    <div class="flex max-xl:flex-col xl:flex-wrap items-center justify-center gap-[100px] w-full">
      <SecaoIndique />
      <SecaoSaibaMais />
    </div>
    <SecaoPremios />
    <SecaoProjetos />
    <SecaoApp />
    <SecaoInstitucional />
    <div class="flex max-xl:flex-col xl:flex-wrap w-full items-center justify-center gap-[100px]">
      <SecaoBlogRecentes />
      <SecaoDuvidas {duvidas} />
    </div>
    <SecaoVisiteInsta/>
    <SecaoCciVisiteInsta />
  </div>
</div>
