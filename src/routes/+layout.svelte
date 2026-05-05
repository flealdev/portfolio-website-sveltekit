<script>
  import "@fontsource-variable/montserrat";
  import "../app.css";
  import he from "he";
  import NProgress from "nprogress";
  import { navigating } from "$app/state";
  import { browser } from "$app/environment";
  // import tema from "$lib/stores/tema.svelte.js";
  import Metatags from "$lib/components/molecules/metatags/metatags.svelte";
  import { onMount } from "svelte";

  let { children } = $props();

  // LOADER bar
  NProgress.configure({
    minimum: 0.16,
    showSpinner: false,
    easing: "ease-in",
    speed: 500,
  });
  onMount(() => {
    $effect(() => {
      if (navigating.from) {
        NProgress.start();
      } else {
        NProgress.done();
      }
    });
  });


</script>

<svelte:head>
  <Metatags />
  <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "fz8xovba9r");
</script>
</svelte:head>

{@render children?.()}
