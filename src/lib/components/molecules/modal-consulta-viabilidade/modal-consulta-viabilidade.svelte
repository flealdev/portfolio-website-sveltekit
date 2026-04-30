<script>
  import { page } from "$app/stores";
  import FormConsultaViabilidade from "$lib/components/molecules/form-consulta-viabilidade/form-consulta-viabilidade.svelte";
  import LayoutModal from "../layout-modal/layout-modal.svelte";

  let { display = "" } = $props();

  $effect(() => {
    if ($page.url.pathname === "/obrigado") {
      hide();
    }
  });
</script>

<LayoutModal
  id="modal-contato-viabilidade"
  {display}
  border={true}
>
  <FormConsultaViabilidade />
</LayoutModal>
