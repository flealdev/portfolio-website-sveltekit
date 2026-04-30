<script>
  let {
    message = "",
    sucesso = false,
    mensagemSucesso = "Seus dados foram enviados. <br> Em breve iremos entrar em contato com você!",
    mensagemFalha = "Volte mais tarde ou atualize a página.",
  } = $props();
</script>

<p
  class="text-center p-5 bg-branco rounded-md {sucesso
    ? 'border-[#0CBE42]'
    : 'border-vermelho'} flex flex-col items-center justify-center border-2 leading-md max-w-120"
>
  <span
    class="{sucesso
      ? 'text-[#0CBE42]'
      : 'text-vermelho'} font-bold mb-2 inline-block text-lg">{message}</span
  >
  <span class="text-preto">
    {@html sucesso
      ? `${mensagemSucesso}`
      : message === "Realize a verificação abaixo."
        ? ""
        : `${mensagemFalha}`}
  </span>
</p>
