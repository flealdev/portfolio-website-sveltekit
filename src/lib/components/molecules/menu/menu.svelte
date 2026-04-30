<script>
  import MenuItem from "./__item/menu__item.svelte";

  let { class: classes = "" } = $props();
</script>

<div class={classes}>
  <ul
    class="flex items-center flex-wrap justify-center max-lg:gap-[10px] lg:gap-[25px]"
  >
    <MenuItem titulo="Planos" href="/planos" />
    <MenuItem titulo="Blog" href="/blog" />
    <MenuItem titulo="Contato" href="/contato" />
    <MenuItem titulo="Vagas" href="/trabalhe-conosco" />
    <MenuItem
      class="max-md:flex md:hidden"
      titulo="Indique"
      href="/indique"
      destaque={true}
    />
    <MenuItem class="max-md:hidden md:flex" titulo="Avalie" href="/avalie" />
  </ul>
</div>
