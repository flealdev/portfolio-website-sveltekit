<script>
  let { children, class: classes, padding = "px-5 py-10" } = $props();
</script>

<div
  class="{padding} bg-branco dark:bg-opacity-0 rounded-2xl md:border md:border-auxiliar-sexta max-md:shadow-[-5px_5px_0_rgba(218,226,255,0.3),5px_-5px_0_rgba(218,226,255,0.3)] md:shadow-[-5px_5px_3px_rgba(218,226,255,0.3),5px_-5px_3px_rgba(218,226,255,0.3)] {classes}"
>
  {@render children?.()}
</div>
