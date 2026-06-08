<script>
  import BotaoDestaqueWpp from "$lib/components/atoms/botao/--destaque-wpp/botao--destaque-wpp.svelte";

  let { eDestaque = false, titulo, descricao, valor, mensagem} = $props();
</script>

<div
  class="flex flex-col items-center justify-center text-center text-branco relative gap-[10px] min-w-[270px] {eDestaque
    ? 'bg-azul-4-principal'
    : 'bg-verde-4-principal'} border-ouro border-2 shadow-[-4px_4px_4px_#FFD700] rounded-[10px] px-5 py-[40px] max-w-[300px]"
>
  <p class="{eDestaque ? "bg-vermelho-4-principal text-branco" : "bg-ouro text-azul-4-principal"} font-black text-[30px] min-w-[250px] leading-none px-[30px] py-[20px] rounded-[20px] absolute -top-[35px]">{titulo}</p>
  <p class="paragrafo">{@html descricao}</p>
  <p class="text-[22px] font-black">R$ {valor}</p>

  <BotaoDestaqueWpp
    titulo="Saiba mais"
    corTexto="text-azul-4-principal"
    corIcone="fill-azul-4-principal"
    {eDestaque}
    {mensagem}
    classes="max-w-[200px] absolute -bottom-[20px]"
  />
</div>
