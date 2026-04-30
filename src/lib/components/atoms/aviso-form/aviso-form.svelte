<script>
  let { simples = false } = $props();
</script>

{#if simples}
  <p
    class="nlf-nota-rodape self-end rounded-xl text-right text-black w-full md:max-w-[20rem] dark:text-branco"
  >
    *Seu telefone será utilizado para contato e publicidade (confira <a
      data-sveltekit-preload-data
      href="/privacidade/"
      class="link-underline">nossa política</a
    >).
  </p>
{:else}
  <p
    class="nlf-nota-rodape self-end rounded-xl text-right text-black w-full md:max-w-120 dark:text-branco"
  >
    *Ao enviar seus dados você concorda com a utilização dos mesmos mediante os
    termos da LGPD (confira <a
      data-sveltekit-preload-data
      href="/privacidade/"
      class="link-underline">aqui</a
    >) para contato e publicidade.
  </p>
{/if}
