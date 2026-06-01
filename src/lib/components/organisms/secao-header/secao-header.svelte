<script>
    import Menu from "$lib/components/molecules/menu/menu.svelte";
    import Topbar from "$lib/components/organisms/secao-header/topbar/topbar.svelte";
    import Breadcrumbs from "$lib/components/molecules/breadcrumbs/breadcrumbs.svelte";
</script>

<Topbar padding="px-5 py-2"/>
<header class="max-2xl:px-5 sticky top-0 z-[2000] pt-3 pb-5 nlf-container ">
    <div
            class="flex flex-wrap max-md:gap-3 md:gap-5 items-center max-lg:px-5 lg:px-10 justify-between max-md:pt-5 max-md:pb-[25px] md:py-[30px] shadow-[0_0_10px_rgba(0,0,0,0.2)] border-preto/60 border-[5px] max-md:rounded-[30px] md:rounded-[50px] sticky top-0 z-[200000] bg-branco"
    >
        <div class="flex gap-5 items-center order-1">
            <a
                    href="/"
                    class=" max-xs:max-w-[80px] xs:max-md:max-w-[100px] md:max-w-[150px]"
            >
                <img
                        src="/assets/template/logo.jpg"
                        alt=""
                        class="w-full max-xs:max-w-[80px] xs:max-md:max-w-[100px] md:max-w-[200px] rounded-md aspect-80/44"
                />
            </a>
        </div>
        <div
                class="max-xl:hidden xl:flex xl:max-xl:flex-col justify-end items-end max-xl:gap-3 xl:gap-5 max-xl:order-2 xl:order-3"
        >
            <a
                    href="/"
                    class="nlf-botao nlf-botao--gold flex justify-center items-center text-preto gap-[10px]"
            >
                <svg width="20" height="20" viewBox="0 0 60 60" fill="none">
                    <g clip-path="url(#clip0_32_21)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.318 26.9014L11.6101 0.66636C9.19514 -0.634354 6.42871 -0.499333 6.42871 4.16995V55.83C6.42871 60.0986 9.39657 60.7715 11.6101 59.3336L52.318 33.0985C53.9937 31.3864 53.9937 28.6136 52.318 26.9014Z" fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_32_21">
                            <rect width="60" height="60" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <span>Botão de ação</span>
            </a
            >
            <a
                    href="/"
                    target="_blank"
                    class="lg:items-center w-max lg:justify-center nlf-botao bg-[#E0E0E0]  flex gap-[10px]"
            >
                <svg width="21" height="21" viewBox="0 0 21 21">
                    <path
                            d="M9.06957 12.5856C9.06957 12.2515 9.12691 11.9309 9.23216 11.6329H2.64213C1.45906 11.6329 0.5 12.5921 0.5 13.7751V14.6514C0.5 15.1964 0.669932 15.7277 0.986146 16.1715C2.45511 18.2331 4.85832 19.2544 8.11692 19.2544C8.49557 19.2544 8.86277 19.2406 9.21826 19.2129C9.12186 18.9265 9.06957 18.6198 9.06957 18.3008V12.5856ZM8.11692 0.207031C10.7473 0.207031 12.8796 2.33935 12.8796 4.96971C12.8796 7.60006 10.7473 9.73235 8.11692 9.73235C5.48655 9.73235 3.35424 7.60006 3.35424 4.96971C3.35424 2.33935 5.48655 0.207031 8.11692 0.207031ZM10.0221 12.5856C10.0221 11.5334 10.875 10.6805 11.9272 10.6805H18.5949C19.6471 10.6805 20.5 11.5334 20.5 12.5856V18.3008C20.5 19.353 19.6471 20.2059 18.5949 20.2059H11.9272C10.875 20.2059 10.0221 19.353 10.0221 18.3008V12.5856ZM12.4034 13.5381C12.1404 13.5381 11.9272 13.7514 11.9272 14.0144C11.9272 14.2774 12.1404 14.4907 12.4034 14.4907H18.1187C18.3817 14.4907 18.5949 14.2774 18.5949 14.0144C18.5949 13.7514 18.3817 13.5381 18.1187 13.5381H12.4034ZM12.4034 16.3957C12.1404 16.3957 11.9272 16.609 11.9272 16.872C11.9272 17.135 12.1404 17.3483 12.4034 17.3483H18.1187C18.3817 17.3483 18.5949 17.135 18.5949 16.872C18.5949 16.609 18.3817 16.3957 18.1187 16.3957H12.4034Z"
                            fill="black"
                    />
                </svg>
                <span class="w-max">Área do cliente</span></a
            >
        </div>
        <Menu class="md:max-lg:w-full" order="max-lg:order-3 lg:order-2"/>
    </div>
</header>
