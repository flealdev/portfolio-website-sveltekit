<script>
  // baseado em https://df.id.au/technical/svelte/breadcrumbs/
  import { page } from "$app/state";

  let { classes = "", id = "" } = $props();
  export { classes as class };
  // Remove zero-length tokens.
  const tokens = $derived(page.url.pathname.split("/"));

  // Create { label, href } pairs for each token.
  let crumbs = $derived(
    tokens.map((t) => {
      let tokenPath = "/" + t;
      return {
        label: t !== "" ? t : "inicio",
        href: tokenPath,
      };
    })
  );

  // Add a way to get home too.
  $effect(() => crumbs.unshift({ label: "início", href: "/" }));
</script>

{#if page.url.pathname != "/"}
  <div {id} class="w-full nlf-container {classes}">
    <div class="flex flex-col overflow-auto max-md:pb-2">
      <ul class="flex gap-2 w-max items-center nlf-paragrafo max-md:pr-5">
        <svg viewBox="0 0 256 256" class="w-[25px] mr-[5px]"
          ><rect fill="none" height="256" width="256" /><circle
            cx="200"
            cy="200"
            fill="none"
            r="24"
            stroke="#8B9BE5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /><path
            d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176"
            fill="none"
            stroke="#8B9BE5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          /></svg
        >
        {#each crumbs as c, i}
          {#if i == crumbs.length - 1}
            <li
              class="border-2 text-auxiliar-terceira dark:text-auxiliar-terceira30 border-auxiliar-terceira30 rounded-lg px-3 py-1"
            >
              {c.label.replace(/-/g, " ").length > 30
                ? c.label.replace(/-/g, " ").substring(0, 30) + "..."
                : c.label.replace(/-/g, " ")}
            </li>
          {:else}
            <li class="">
              <a
                href={c.href}
                class="border-2 bg-auxiliar-terceira text-branco border-auxiliar-terceira30 rounded-lg px-3 py-1"
                >{c.label.replace(/-/g, " ").length > 30
                  ? c.label.replace(/-/g, " ").substring(0, 30) + "..."
                  : c.label.replace(/-/g, " ")}</a
              >
            </li>
            <hr
              class="bg-auxiliar-terceira30 border-0 w-[5px] h-[20px] rounded-lg rotate-15"
            />
          {/if}
        {/each}
      </ul>
    </div>
  </div>
{/if}
