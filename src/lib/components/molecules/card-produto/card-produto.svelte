<script>
  import { mount } from "svelte";
  import ModalContatoInteressePlano from "$lib/components/molecules/modal-contato-interesse-plano/modal-contato-interesse-plano.svelte";
  let {
    plano = "",
    tituloBotao = "",
    href = "",
    destaque = false,
    class: classes = "",
  } = $props();

  const planoId = plano.replaceAll(/\s/g, "");
</script>

<div
  class="relative shadow-[-4px_4px_4px_gold] flex px-[20px] pt-[15px] pb-[30px] rounded-[10px] min-w-[160px] h-[65px] {destaque
    ? 'bg-principal-primeira'
    : 'bg-principal-terceira'} {classes}"
>
  <p class="nlf-titulo-card text-branco">{plano}</p>
  <button
    onclick={() => {
      if (!document.getElementById(`modal-contato-${planoId}`)) {
        document.body.style = "overflow: hidden";
        mount(ModalContatoInteressePlano, {
          target: document.getElementById("svelte-body"),
          props: {
            display: "flex",
            plano: planoId,
            assunto: `LEAD - Interessado em ${planoId} - New Life Fibra`,
          },
        });
      } else {
        document.body.style = "overflow: hidden";
        document
          .getElementById(`modal-contato-${planoId}`)
          .classList.remove("hidden");
        document
          .getElementById(`modal-contato-${planoId}`)
          .classList.add("flex");
      }
    }}
    {href}
    class="nlf-enfase bg-[gold] absolute -bottom-[18px] rounded-[5px] shadow-[-4px_4px_0_#1639CB] p-[10px] text-principal-primeira"
    >{tituloBotao}</button
  >
</div>
