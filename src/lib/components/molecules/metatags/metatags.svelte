<script>
  // instalação com npm install he (necessário para decodificar caracteres HTML)
  import he from "he";
  import { page } from "$app/state";

  const titulo = $derived(page.data.titulo);
  const descricao = $derived(page.data.descricao);
  const ogImage1200 = $derived(page.data.ogImage1200);
  const ogImage300 = $derived(page.data.ogImage300);
  const urlPathname = $derived(page.url.pathname);
</script>

{#if titulo}
  <title
    >{titulo.includes("New Life Fibra")
      ? he.decode(titulo)
      : he.decode(titulo) + " - " + "New Life Fibra"}</title
  >
{:else if urlPathname === "/obrigado"}
  <title>Obrigado! - {"New Life Fibra"}</title>
{:else}
  <title>Página não encontrada! - {"New Life Fibra"}</title>
{/if}
{#if descricao}
  <meta
    name="description"
    content={he.decode(descricao.replace(/<[^>]*>/g, ""))}
  />
  <meta
    property="og:title"
    content={titulo.includes("New Life Fibra")
      ? he.decode(titulo)
      : he.decode(titulo) + " - " + "New Life Fibra"}
  />
  <meta property="og:type" content="website" />
  <!-- facebook -->
  <meta
    property="og:image"
    content={ogImage1200
      ? ogImage1200
      : "https://res.cloudinary.com/dnnjd6ipk/image/upload/v1710450360/nl-fibra/og-media-nlf_ze9gfe.jpg"}
  />
  <meta property="og:image:type" content="image/jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="628" />
  <!-- whatsapp -->
  <meta
    property="og:image"
    content={ogImage300
      ? ogImage300
      : "https://res.cloudinary.com/dnnjd6ipk/image/upload/v1710450360/nl-fibra/og-media-nlf-wpp_qbuy2f.jpg"}
  />
  <meta property="og:image:type" content="image/jpg" />
  <meta property="og:image:width" content="300" />
  <meta property="og:image:height" content="300" />
  <!-- Microsoft -->
  <meta
    name="msapplication-TileImage"
    content={ogImage300
      ? ogImage300
      : "https://res.cloudinary.com/dnnjd6ipk/image/upload/v1710450360/nl-fibra/og-media-nlf-wpp_qbuy2f.jpg"}
  />

  <meta
    property="og:url"
    content={"https://minhanewlife.com.br" + urlPathname}
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    property="og:description"
    content={he.decode(descricao.replace(/<[^>]*>/g, ""))}
  />
  <meta property="og:site_name" content={"New Life Fibra"} />
{/if}
