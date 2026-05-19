<script>
  import { browser } from "$app/environment";
  import MenuMobile from "$lib/components/molecules/menu/--mobile/menu--mobile.svelte";
  import MenuItem from "./__item/menu__item.svelte";
  import { mount, onMount } from "svelte";

  let { class: classes = "", order } = $props();

  if (browser) {
    const menuItems = document.getElementById("menu-items");
    const arrowMenu = document.getElementById("arrow-menu");
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        if (menuItems.style.display == "none") {
          menuItems.style.display = "flex";
          menuItems.classList.add("aberto");
        }
      } else {
        if (menuItems.classList?.contains("aberto")) {
          menuItems.classList.remove("aberto");
          menuItems.style.display = "none";
          arrowMenu.style.rotate = "0deg";
        }
      }
    });
  }
</script>

<button
  class="p-[10px] xl:hidden xl:justify-center cursor-pointer xl:w-full max-xl:bg-branco-1-principal-claro font-bold items-center rounded-[5px] flex gap-[10px] {order}"
  onclick={() => {
    const menuItems = document.getElementById("menu-items");
    const arrowMenu = document.getElementById("arrow-menu");

    if (menuItems.classList.contains("aberto")) {
      menuItems.classList.remove("aberto");
      menuItems.style.display = "none";
      arrowMenu.style.rotate = "0deg";
    } else {
      menuItems.classList.add("aberto");
      menuItems.style.display = "flex";
      arrowMenu.style.rotate = "180deg";
    }
  }}
>
  <svg
    id="arrow-menu"
    viewBox="0 0 16 11"
    fill="none"
    class="transition-all duration-300 max-xl:w-[16px] xl:w-[40px]"
  >
    <g clip-path="url(#clip0_635_1555)">
      <path
        d="M1.00003 3.65854C1.00003 3.40266 1.09769 3.14666 1.293 2.95166C1.68363 2.56104 2.31644 2.56104 2.70706 2.95166L8.00003 8.24604L13.2928 2.95166C13.6835 2.56104 14.3163 2.56104 14.7069 2.95166C15.0975 3.34229 15.0975 3.9751 14.7069 4.36572L8.70691 10.3657C8.31628 10.7563 7.68347 10.7563 7.29285 10.3657L1.29284 4.36572C1.09691 4.17104 1.00003 3.91479 1.00003 3.65854Z"
        class="fill-preto"
      />
    </g>
    <defs>
      <clipPath id="clip0_635_1555">
        <rect
          width="10"
          height="16"
          fill="white"
          transform="matrix(0 1 -1 0 16 0.658447)"
        />
      </clipPath>
    </defs>
  </svg>
  <span class="xl:hidden">Menu</span></button
>
<div
  id="menu-items"
  class="max-md:flex-col max-xl:w-full duration-500 max-md:py-5 max-md:hidden md:flex md:items-center md:justify-between transition-all items-end  justify-center max-lg:gap-5 lg:gap-[25px] {classes} {order}"
>
  <div
    class="flex items-center flex-wrap justify-end max-lg:gap-[10px] lg:gap-[25px]"
  >
    <MenuItem titulo="Planos" href="/" class="border-b- nlf-grow" />
    <MenuItem titulo="Blog" href="/" class="nlf-grow" />
    <MenuItem titulo="Contato" href="/" class="nlf-grow" />
    <MenuItem titulo="Vagas" href="/" class="nlf-grow" />
    <MenuItem
      class="max-md:flex md:hidden nlf-grow"
      titulo="Indique"
      href="/"
      destaque={true}
    />
    <MenuItem
      class="max-md:hidden md:flex nlf-grow"
      titulo="Avalie"
      href="/"
      destaque={true}
    />
  </div>
  <button
    class="max-xl:flex xl:hidden flex-col gap-[5px] justify-center items-center cursor-pointer"
    onclick={() => {
      if (!document.getElementById("modal-menu-mobile")) {
        document.body.style = "overflow: hidden";
        mount(MenuMobile, {
          target: document.getElementById("svelte-body"),
          props: {
            id: "modal-menu-mobile",
          },
        });
      } else {
        document.body.style = "overflow: hidden";
        document.getElementById("modal-menu-mobile").classList.remove("hidden");
        document.getElementById("modal-menu-mobile").classList.add("flex");
      }
    }}
  >
    <svg viewBox="0 0 40 41" class="w-[50px] aspect-square">
      <path
              class="fill-preto"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.3333 37.325C31.4924 37.325 30 35.8326 30 33.9917C30 32.1508 31.4924 30.6584 33.3333 30.6584C35.1743 30.6584 36.6667 32.1508 36.6667 33.9917C36.6667 35.8326 35.1743 37.325 33.3333 37.325ZM33.3333 23.9917C31.4924 23.9917 30 22.4993 30 20.6584C30 18.8174 31.4924 17.325 33.3333 17.325C35.1743 17.325 36.6667 18.8174 36.6667 20.6584C36.6667 22.4993 35.1743 23.9917 33.3333 23.9917ZM33.3333 10.6584C31.4924 10.6584 30 9.16598 30 7.32503C30 5.48408 31.4924 3.9917 33.3333 3.9917C35.1743 3.9917 36.6667 5.48408 36.6667 7.32503C36.6667 9.16598 35.1743 10.6584 33.3333 10.6584ZM20 37.325C18.1591 37.325 16.6667 35.8326 16.6667 33.9917C16.6667 32.1508 18.1591 30.6584 20 30.6584C21.841 30.6584 23.3333 32.1508 23.3333 33.9917C23.3333 35.8326 21.841 37.325 20 37.325ZM20 23.9917C18.1591 23.9917 16.6667 22.4993 16.6667 20.6584C16.6667 18.8174 18.1591 17.325 20 17.325C21.841 17.325 23.3333 18.8174 23.3333 20.6584C23.3333 22.4993 21.841 23.9917 20 23.9917ZM20 10.6584C18.1591 10.6584 16.6667 9.16598 16.6667 7.32503C16.6667 5.48408 18.1591 3.9917 20 3.9917C21.841 3.9917 23.3333 5.48408 23.3333 7.32503C23.3333 9.16598 21.841 10.6584 20 10.6584ZM6.66667 37.325C4.82572 37.325 3.33334 35.8326 3.33334 33.9917C3.33334 32.1508 4.82572 30.6584 6.66667 30.6584C8.50762 30.6584 10 32.1508 10 33.9917C10 35.8326 8.50762 37.325 6.66667 37.325ZM6.66667 23.9917C4.82572 23.9917 3.33334 22.4993 3.33334 20.6584C3.33334 18.8174 4.82572 17.325 6.66667 17.325C8.50762 17.325 10 18.8174 10 20.6584C10 22.4993 8.50762 23.9917 6.66667 23.9917ZM6.66667 10.6584C4.82572 10.6584 3.33334 9.16598 3.33334 7.32503C3.33334 5.48408 4.82572 3.9917 6.66667 3.9917C8.50762 3.9917 10 5.48408 10 7.32503C10 9.16598 8.50762 10.6584 6.66667 10.6584Z"
      />
    </svg>
    <p class="nlf-item-com-icone font-bold uppercase">Ver mais</p>
  </button>
</div>
