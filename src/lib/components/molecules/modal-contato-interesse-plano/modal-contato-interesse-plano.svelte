<script>
  import FormInteressePlano from "$lib/components/molecules/form-interesse-plano/form-interesse-plano.svelte";
  import { page } from "$app/stores";
  import LayoutModal from "../layout-modal/layout-modal.svelte";

  const {
    display = "",
    plano = "",
    id = plano != "" ? `modal-contato-${plano}` : "modal-contato-consultoria",
    valor = 0.0,
    titulo = "Assine já!",
    fullscreen = false,
  } = $props();
  // exclui os espaços no nome dos planos para ser o ID do modal

  $effect(() => {
    if ($page.url.pathname === "/obrigado") {
      hide();
    }
  });
</script>

<LayoutModal
  {id}
  {display}
  {fullscreen}
  border={true}
  padding="max-md:p-5 md:p-10"
  classesContainer="overflow-y-auto max-md:max-h-[600px]"
>
  <FormInteressePlano {titulo} {plano} {valor} />
</LayoutModal>
