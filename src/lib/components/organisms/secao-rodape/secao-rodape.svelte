<script>
  import MenuSecundario from "$lib/components/molecules/menu-secundario/menu-secundario.svelte";
  import CardStatus from "$lib/components/molecules/card-status/card-status.svelte";
  import Divisor from "$lib/components/atoms/divisor/divisor.svelte";
  import NavegacaoSecundaria from "$lib/components/molecules/navegacao-secundaria/navegacao-secundaria.svelte";
  import { page } from "$app/state";
  import RedesSociais from "$lib/components/atoms/redes-sociais/redes-sociais.svelte";
  import ImagensEmpresa from "$lib/components/molecules/imagens-empresa/imagens-empresa.svelte";
  // import tema from "$lib/stores/tema.svelte";
  import Copyright from "$lib/components/molecules/copyright/copyright.svelte";
  import EmpresasHolding from "$lib/components/molecules/empresas-holding/empresas-holding.svelte";
  import { browser } from "$app/environment";
</script>

<div class="flex flex-col gap-10 md:pt-[100px]">
  {#if page.url.pathname !== "/"}
    <NavegacaoSecundaria />
  {/if}
  <div class="flex flex-col items-center justify-center gap-10 pb-10">
    <ImagensEmpresa />
    <EmpresasHolding />
  </div>
</div>
<footer class="flex flex-col gap-[20px]">
  <div>
    <div class="bg-principal-segunda h-[10px]"></div>
    <div class="bg-principal-primeira h-[10px]"></div>
  </div>
  <div class="px-[20px] pb-[15px] flex flex-col gap-[50px] nlf-container">
    <div class="flex flex-wrap items-start justify-between gap-[20px]">
      <div
        class="flex w-full items-center {page.url.pathname != '/'
          ? 'justify-between'
          : 'justify-center'}"
      >
        {#if page.url.pathname != "/"}
          <a
            href="/"
            class="nlf-grow rounded-[10px] w-[70px] flex items-center justify-center aspect-square bg-principal-primeira dark:bg-branco"
          >
            <svg width="34" height="31" viewBox="0 0 34 31">
              <path
                class="fill-branco dark:fill-principal-primeira"
                d="M2.01996 13.5812L1.99996 13.6129H5.3333V28.6129C5.3333 29.0549 5.50889 29.4788 5.82145 29.7914C6.13401 30.104 6.55793 30.2795 6.99996 30.2795H27C27.442 30.2795 27.8659 30.104 28.1785 29.7914C28.491 29.4788 28.6666 29.0549 28.6666 28.6129V13.6129H32C32.3577 13.613 32.706 13.4979 32.9933 13.2848C33.2806 13.0717 33.4917 12.7718 33.5954 12.4294C33.6991 12.0871 33.6899 11.7204 33.5692 11.3837C33.4485 11.047 33.2226 10.758 32.925 10.5595L17.925 0.559546C17.6511 0.376815 17.3292 0.279297 17 0.279297C16.6707 0.279297 16.3488 0.376815 16.075 0.559546L1.07496 10.5595C0.892841 10.681 0.73643 10.8371 0.614662 11.0191C0.492894 11.201 0.408154 11.4051 0.365283 11.6197C0.322412 11.8344 0.322249 12.0554 0.364803 12.2702C0.407358 12.4849 0.491796 12.6891 0.613296 12.8712C0.768858 13.0986 0.979407 13.2829 1.22535 13.4071C1.47129 13.5312 1.74464 13.5911 2.01996 13.5812ZM13.6666 18.6129C13.6666 18.1709 13.8422 17.7469 14.1548 17.4344C14.4673 17.1218 14.8913 16.9462 15.3333 16.9462H18.6666C19.1087 16.9462 19.5326 17.1218 19.8451 17.4344C20.1577 17.7469 20.3333 18.1709 20.3333 18.6129V26.9462H13.6666V18.6129Z"
              />
            </svg>
          </a>
        {/if}
        <a href="#" class="nlf-grow">
          <svg width="50" height="31" viewBox="0 0 50 31">
            <path
              class="fill-principal-primeira dark:fill-branco"
              d="M26.9431 0.912523L49.1951 23.1646C50.2683 24.2378 50.2683 25.9778 49.1951 27.0508L46.5998 29.6462C45.5284 30.7175 43.792 30.7196 42.7181 29.6508L24.9999 12.0156L7.28185 29.6508C6.20797 30.7196 4.4716 30.7175 3.40024 29.6462L0.804897 27.0508C-0.268295 25.9776 -0.268295 24.2377 0.804897 23.1646L23.0568 0.912523C24.13 -0.160557 25.8699 -0.160557 26.9431 0.912523Z"
            />
          </svg>
        </a>
      </div>
      <MenuSecundario />
      <CardStatus />
    </div>
    <Divisor classes="border-4 border-auxiliar-quinta" />
    <div class="flex flex-col gap-5">
      <div class="nlf-item-menu-secundario w-full flex flex-col gap-[20px]">
        <p class="nlf-item-menu-secundario">
          BRMOM CONSTRUINDO CONEXOES LTDA<br />CNPJ
          05.144.467/0001-29<br />General Mallet, 497, CEP 97300-236, São
          Gabriel - RS
        </p>
        <p class="nlf-item-menu-secundario">
          <a href="tel:05433101008">(54) 3310-1008</a><br /><a
            href="mailto:contato@newlifefibra.com.br"
            >contato@newlifefibra.com.br</a
          >
        </p>
        <RedesSociais />
      </div>
      <Copyright />
    </div>
  </div>
</footer>
