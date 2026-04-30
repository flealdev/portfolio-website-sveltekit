<script>
  let {
    href,
    srcMobile,
    srcTablet,
    srcDesktop,
    classesContainer,
    imgClasses,
    aspectRatio,
    alt,
    lozad = false,
  } = $props();
</script>

{#if href != ""}
  <a {href} class={classesContainer}>
    <picture>
      <source media="(max-width: 600px)" srcset={srcMobile} />
      <source media="(max-width: 1024px)" srcset={srcTablet} />
      <source media="(min-width: 1025px)" srcset={srcDesktop} />
      <img
        src={srcMobile}
        {alt}
        class="object-cover object-center rounded-lg {imgClasses}"
      />
    </picture>
  </a>
{:else}
  <picture>
    <source media="(max-width: 600px)" srcset={srcMobile} />
    <source media="(max-width: 1024px)" srcset={srcTablet} />
    <source media="(min-width: 1025px)" srcset={srcDesktop} />
    <img
      src={srcMobile}
      {alt}
      class="object-cover object-center rounded-lg {imgClasses}"
    />
  </picture>
{/if}
