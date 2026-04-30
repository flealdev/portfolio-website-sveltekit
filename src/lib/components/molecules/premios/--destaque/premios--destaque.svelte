<script>
  let { imgClasses } = $props();
</script>

<a
  href="/premios"
  class="w-max flex flex-wrap gap-5 dark:bg-branco dark:py-2 dark:px-3 dark:rounded-tl-3xl dark:rounded-br-3xl dark:rounded-md items-center"
>
  <img
    src="/assets/logo-bid.webp"
    alt=""
    class="w-full {imgClasses} nlf-grow aspect-245/250"
  />
  <img
    src="/assets/logo-esqr.webp"
    alt=""
    class="w-full {imgClasses} nlf-grow aspect-249/121"
  />
  <img
    src="/assets/selo-gptw-100w.webp"
    alt=""
    class="w-full {imgClasses} nlf-grow aspect-100/150"
  />
</a>
