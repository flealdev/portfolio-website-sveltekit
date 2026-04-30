<script>
  import CardIlustrativoDetalhado from "$lib/components/molecules/card-ilustrativo/--detalhado/card-ilustrativo--detalhado.svelte";
  import Heading from "$lib/components/molecules/heading/heading.svelte";
</script>

<Heading
  titulo="Responsabilidade social"
  subtitulo="Projetos e ações da New Life Fibra que beneficiam nossas comunidades"
/>
<section
  class="w-full flex items-center flex-wrap max-md:gap-5 md:gap-10 max-md:justify-center md:justify-around"
>
  <CardIlustrativoDetalhado
    imagem="/assets/img-libertas.webp"
    altImagem="Foto dos alunos do Projeto Libertas"
    titulo="Projeto Libertas"
    subtitulo="Cursos que libertam"
    descricao="Um projeto das empresas New Life em parceria com o 6º Batalhão de Engenharia de Combate e em prol do desenvolvimento educacional de crianças e adolescentes. Acolhemos, sem custo, alunos indicados por escolas públicas para realização de cursos em nossa rede de ensino."
  />
  <CardIlustrativoDetalhado
    imagem="/assets/img-life_school.webp"
    altImagem="Foto de um aluno beneficiado pelo Projeto Life School"
    titulo="Projeto Life School"
    subtitulo="Internet para os mais carentes"
    descricao="Projeto que disponibiliza internet gratuita a alunos selecionados oriundos da rede pública."
  />
  <CardIlustrativoDetalhado
    imagem="/assets/img-praca_conectada.webp"
    altImagem="Foto de placa em local de hotspot Wi-Fi do Projeto Praça Conectada"
    titulo="Projeto Praça Conectada"
    subtitulo="Wi-Fi liberado em pontos da cidade"
    descricao="Projeto que disponibiliza sinal via Wi-Fi de forma gratuita em pontos estratégicos das cidades em que atuamos. Na cidade de São Gabriel, por exemplo, já há pontos de acesso na maioria das praças públicas."
  />
  <CardIlustrativoDetalhado
    imagem="/assets/img-entrega_alimentos.webp"
    altImagem="Foto de entrega de alimentos ocorrido em um bairro comunitário"
    titulo="Entrega de alimentos"
    subtitulo="Apoiando as comunidades carentes"
    descricao="Anualmente realizamos a entrega de alimentos nas comunidades carentes das regiões em que atuamos, principalmente no inverno, esquentando os corações dos mais necessitados."
  />
  <CardIlustrativoDetalhado
    imagem="/assets/img-doacoes.webp"
    altImagem="Cartaz informativo sobre doações realizadas na comunidade"
    titulo="Doações"
    subtitulo="Entrega de alimentos e agasalhos"
    descricao="Periodicamente realizamos, aos mais necessitados, a entrega de alimentos, agasalhos, itens de higiene pessoal e produtos essenciais para o bem estar."
  />
  <CardIlustrativoDetalhado
    imagem="/assets/img-eventos.webp"
    altImagem="Fotos do local montado pela New Life Fibra em evento público municipal."
    titulo="Apoio ao mercado local e regional"
    subtitulo="Presença em eventos e parcerias que agregam"
    descricao="Assim como o projeto Praça Conectada, possuímos parceiros em vários locais, em todas as regiões em que atuamos. Não raro estamos presentes em eventos de renome, oferecendo o que há de melhor em nossa área!"
  />
  <CardIlustrativoDetalhado
    titulo="Arrecadação de agasalhos"
    subtitulo="Por um inverno mais quente"
    descricao="Anualmente, nas regiões em que atuamos, a Campanha do Agasalho da New life Fibra ajuda mais de 100 famílias necessitadas."
  />
  <CardIlustrativoDetalhado
    titulo="Arrecadação de alimentos não perecíveis"
    subtitulo="Auxílio aos mais necessitados"
    descricao="Periodicamente, arrecadamos alimentos não perecíveis em nossas unidades para ajudar tanto a comunidade quanto instituições de caridade"
  />
</section>
