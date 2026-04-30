<script>
  import { page } from "$app/state";
</script>

<ul
  class="flex w-full flex-wrap justify-center max-md:gap-x-10 max-md:gap-y-5 md:gap-10 nlf-container nlf-paragrafo nlf-container-filho"
>
  {#if !(page.url.pathname === "/contato")}
    <li class="">
      <a
        href="/contato"
        class="link-underline link-underline--verde dark:text-branco"
        >Entre em contato</a
      >
    </li>
  {/if}
  {#if !(page.url.pathname === "/planos")}
    <li class="">
      <a
        href="/planos"
        class="link-underline link-underline--verde dark:text-branco"
        >Conheça nossos planos</a
      >
    </li>
    <li class="">
      <a
        href="/avalie"
        class="link-underline link-underline--verde dark:text-branco"
        >Avalie nossos serviços</a
      >
    </li>
  {:else}
    <li class="">
      <a
        href="/avalie"
        class="link-underline link-underline--verde dark:text-branco"
        >Avalie nossos serviços</a
      >
    </li>
  {/if}
</ul>
