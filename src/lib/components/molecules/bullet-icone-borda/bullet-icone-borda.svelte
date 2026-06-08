<script>
    const {children, texto, bg, classes, border, corTexto="text-preto", rounded} = $props()
</script>

<div class="paragrafo w-full flex items-center gap-[10px] px-5 py-[15px] {rounded} {corTexto} {bg} border-y-[3px] {border} {classes}">
    {@render children?.()}
    <p>{@html texto}</p>
</div>