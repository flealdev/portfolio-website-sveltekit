
import { fetchMetatagsSingleBlogApiWordpress } from "$lib/core/models/fetch";

export async function load(event) {
  const postContent = await fetchMetatagsSingleBlogApiWordpress(event);

  const titulo = postContent.data.postBy.title;
  const descricao = postContent.data.postBy.excerpt;
  const ogImage1200 = postContent.data.postBy.ogImagePaisagem ? postContent.data.postBy.ogImagePaisagem.node.guid : "";
  const ogImage300 = postContent.data.postBy.ogImageQuadrado ? postContent.data.postBy.ogImageQuadrado.node.guid : "";

  // const formContato = await superValidate(event, validaFormContato)

  return {
    slug: event.params.slug,
    // post: postContent,
    titulo,
    descricao,
    // formContato,
    ogImage300,
    ogImage1200,
  };
}
