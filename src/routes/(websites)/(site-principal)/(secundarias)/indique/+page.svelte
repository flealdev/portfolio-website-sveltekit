<script>
  import Heading from "$lib/components/molecules/heading/heading.svelte";
  import FormIndicacao from "$lib/components/molecules/form-indicacao/form-indicacao.svelte";
  import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
</script>

<!-- INSERIR TBM UM LINK PARA AVALIÇÃO NO MELHOR PLANO/MINHA CONEXAO: https://melhorplano.net/crm/avalie-seu-provedor -->

<section class="flex flex-col items-center gap-5">
  <Heading titulo="Indique seu amigo" subtitulo="Ganhe 50 reais de desconto" />
  <div
    class="dark:bg-branco dark:p-5 dark:rounded-tr-[3rem] dark:rounded-tl-xl dark:rounded-br-xl dark:rounded-bl-[3rem] self-center"
  >
    <img
      src="/assets/feedback.svg"
      alt=""
      width="200"
      height="200"
      class="max-md:max-w-36 md:max-w-50"
    />
  </div>
  <ContainerBranco class="flex flex-col items-center gap-10">
    <FormIndicacao />
    <div
      class="flex flex-col gap-2 max-w-200 dark:text-branco nlf-paragrafo"
    >
      <p>
        Ganhe R$50,00 de desconto na sua mensalidade por cada amigo que assinar
        New Life Fibra, sem limite!
      </p>
      <p>
        Após o seu amigo pagar a primeira mensalidade o seu desconto será
        efetuado!
      </p>
      <p>
        Eventuais dúvidas nos contate pelos canais de atendimento ou
        presencialmente na empresa.
      </p>
    </div>
  </ContainerBranco>
</section>
