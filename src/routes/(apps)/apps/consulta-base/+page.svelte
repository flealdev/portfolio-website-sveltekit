<script>
	import MetaTags from "$lib/components/molecules/metatags/metatags.svelte";
    import FormConsultaBase from "$lib/components/molecules/form-consulta-base/form-consulta-base.svelte";

	/*
		SISTEMA PARA CONSULTA DE CLIENTES ATIVOS v0.1.0
			- Consulta somente clientes ativos baseado no CPF informado, buscando código e lista de contratos ativos e retorna o primeiro nome do cliente caso seja ativo.
			- Baseado na API oficial do MK.
	*/
	export let data;

	const { titulo } = data;

	const {form} = data;
</script>

<svelte:head>
	<MetaTags {titulo} />
	<meta name="robots" content="noindex" />
</svelte:head>

<div
	class="nlf-container max-xl:px-5 xl:max-2xl:px-[5%] md:p-0 gap-5 flex flex-col items-center justify-center min-h-192 h-screen w-screen"
>
	<FormConsultaBase formData={form}/>
</div>
