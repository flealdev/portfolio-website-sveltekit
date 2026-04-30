<script>
    import { onMount } from "svelte";

    let incidenteAtivo = false

  onMount(async ()=>{
    const res = await fetch("/api/v2/consulta-notif-parada-ativa?key=dBPFQ0kRNM57KveDXvvEbGY2byC8Zu09wI0")

    const data = await res.json()

    if (data.status !== "OK"){
      incidenteAtivo = true
    }
  })

</script>

{#if incidenteAtivo}
<a
  href="/status"
  class="border-x border-t rounded-[5px] flex gap-[10px] px-[15px] py-[10px] items-center justify-center border-b-[5px] border-principal-segunda bg-vermelho"
>
  <svg width="20" height="18" viewBox="0 0 20 18">
    <path
      d="M19.853 16.699L10.6301 1.09676C10.5006 0.873548 10.2595 0.708374 10.0006 0.708374C9.73723 0.708374 9.49617 0.873548 9.37117 1.09676L0.148219 16.699C0.0232227 16.9222 -0.0660604 17.2793 0.0634002 17.4981C0.192861 17.7168 0.429461 17.8507 0.688382 17.8507H19.3084C19.5673 17.8507 19.8039 17.7168 19.9334 17.4981C20.0673 17.2793 19.978 16.9177 19.853 16.699ZM11.4291 15.7079H8.57209V13.5651H11.4291V15.7079ZM11.4291 12.1366H8.57209V5.70823H11.4291V12.1366Z"
      fill="white"
    />
  </svg>
  <p class="text-branco font-bold nlf-paragrafo">Status dos serviços</p>
</a>
{/if}