<script>
  import LayoutModal from "../layout-modal/layout-modal.svelte";
  // import tema from "$lib/stores/tema.svelte";
  import { browser } from "$app/environment";
</script>

<LayoutModal id="modal-luz-zoom">
  <!-- <button
    onclick={() => {
      if (tema.padrao === "dark") {
        document.documentElement.classList.remove("dark");
        tema.padrao = "light";
      } else {
        document.documentElement.classList.add("dark");
        tema.padrao = "dark";
      }
    }}
    class="nlf-botao-compacto nlf-botao--azul dark:bg-auxiliar-primeira flex gap-2 items-center justify-center text-branco"
  >
    <svg viewBox="0 0 20 20" class="w-[20px] h-[20px] fill-branco">
      <path
        d="M7 13.33a7 7 0 1 1 6 0V16H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 18.5V17zm2-5.1V14h2v-2.1a5 5 0 1 0-2 0z"
      />
    </svg>
    <span>{tema.padrao === "light" ? "Desligar luz" : "Ligar luz"}</span>
  </button> -->
  <div class="flex flex-col gap-2 lg:mt-10 text-preto">
    <h2 class="nlf-titulo-h2 text-auxiliar-primeira dark:text-branco">
      Aprenda a ajustar o zoom da tela:
    </h2>
    <ul class="ml-10 list-disc nlf-paragrafo">
      <li>
        <a
          href="https://apple.co/3Kb4r8P"
          target="_blank"
          class="link-underline link-underline--verde">Navegador Safari</a
        >
      </li>
      <li>
        <a
          href="https://bit.ly/3YWnh7P"
          target="_blank"
          class="link-underline link-underline--verde"
          >Navegador Google Chrome</a
        >
      </li>
      <li>
        <a
          href="https://mzl.la/3k2nvvo"
          target="_blank"
          class="link-underline link-underline--verde">Navegador Firefox</a
        >
      </li>
      <li>
        <a
          href="https://bit.ly/4114iuC"
          target="_blank"
          class="link-underline link-underline--verde">Outros navegadores</a
        >
      </li>
    </ul>
  </div>
</LayoutModal>
