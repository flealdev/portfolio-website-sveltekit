
import { fetchPagePrivacidadeApiWordpress } from "$lib/core/models/fetch";

export async function load(event) {
    const postContent = await fetchPagePrivacidadeApiWordpress(event);

    const titulo = postContent.data.pageBy.title;
    const descricao = postContent.data.pageBy.excerpt;
    const ogImage1200 = postContent.data.pageBy.ogImagePaisagem ? postContent.data.pageBy.ogImagePaisagem.node.guid : "";
    const ogImage300 = postContent.data.pageBy.ogImageQuadrado ? postContent.data.pageBy.ogImageQuadrado.node.guid : "";

    return {
        // post: postContent,
        titulo,
        descricao,
        // formContato,
        ogImage300,
        ogImage1200,
    };
}
