<script>
  let { children } = $props();
</script>

<div
  class="nlf-container nlf-container-filho nlf-padding flex flex-col max-md:gap-10 md:gap-20 items-center"
>
  {@render children?.()}
</div>
