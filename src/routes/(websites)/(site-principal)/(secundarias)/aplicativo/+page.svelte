<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
</script>

<Heading titulo="Facilite o seu dia a dia" subtitulo="Baixe já o nosso app" />

<div class="flex flex-col w-full gap-10">
  <section
    class="flex flex-wrap gap-5  items-center w-full dark:text-branco nlf-paragrafo"
  >
    <div
      class="flex flex-col w-full gap-2 lg:max-xl:max-w-140 xl:max-w-180"
    >
      <h2 class="nlf-titulo-h2 text-azul-3">Tenha acesso à serviços essenciais</h2>
      <p>
        Visualize as faturas pendentes, gere código pix para pagamento ou, se
        não deu tempo de ler, dê uma olhada no seu contrato para conferir as
        excelentes condições do seu negócio conosco.
      </p>
      <p>
        <strong>Para baixar é fácil:</strong> somente clique no banner que corresponde
        ao sistema do seu dispositivo!
      </p>
      <p class="nlf-nota-rodape">
        *Para o primeiro acesso, utilize seu CPF como usuário e senha. Se houver
        algum problema <a href="/contato" class="link-underline"
          >entre em contato</a
        >.
      </p>
    </div>
    <div
      class="flex flex-wrap justify-center items-center gap-5 max-lg:w-full lg:max-2xl:w-max 2xl:w-full 2xl:max-w-120"
    >
      <a
        href="https://play.google.com/store/apps/details?id=br.com.mksolutions.mksac.newlife&hl=pt_BR&gl=US&pli=1"
        class="w-full max-md:max-w-40 md:max-w-52 flex justify-center"
      >
        <img
          src="/assets/badge-google_play.webp"
          alt=""
          class="w-full max-w-52"
        />
      </a>
      <a
        href="https://apps.apple.com/us/app/minha-new-life/id1571306267?itscg=30200&itsct=apps_box_link"
        class="w-full max-md:max-w-40 md:max-w-52 flex justify-center"
      >
        <img
          src="/assets/badge-app_store.svg"
          alt=""
          class="w-full max-w-52"
        />
      </a>
    </div>
  </section>
  <section
    class="flex flex-wrap gap-5 items-center w-full dark:text-branco nlf-paragrafo"
  >
    <div class="flex flex-col w-full gap-2 lg:max-w-120">
      <h2 class="nlf-titulo-h2 text-azul-3">Realize o autodesbloqueio da sua conexão</h2>
      <p>
        É muito fácil realizar o autodesbloqueio da sua conexão pelo nosso
        aplicativo. Siga as instruções da imagem a seguir para normalizar a sua
        conexão!
      </p>
      <p>
        <strong>Ficou com dúvidas?</strong> Leia o artigo
        <a
          href="https://minhanewlife.com.br/blog/conhecendo-melhor-o-aplicativo-minha-new-life"
          class="link-underline"
          target="_blank">"Conhecendo melhor o aplicativo Minha New Life"</a
        > do nosso blog e aprenda tudo sobre o app!
      </p>
    </div>
    <div
      class="flex flex-wrap justify-center items-center gap-5 max-lg:w-full lg:max-w-120"
    >
      <img
        src="/assets/desbloqueio-416x600.png"
        alt="imagem ilustrativa de como realizar o autodesbloqueio pelo App Minha New Life"
        class="w-full aspect-416/600 max-w-104"
        width="416"
        height="600"
      />
    </div>
  </section>
</div>
