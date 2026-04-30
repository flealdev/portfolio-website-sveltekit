<script>
    const {foto, autor, data} = $props()

    // converte a data de ISO para Intl pt-BR
    const dataIso = new Date(data)
    const dataIntl = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short'}).format(dataIso);
</script>

<div class="flex gap-2.5 items-center dark:text-branco">
    <img src={foto} alt="Foto do autor da publicação" class="max-w-10 rounded-full">
    <div>
        <p>Por <span class="font-bold">{autor}</span></p>
        <p>{dataIntl}</p>
    </div>
</div>
<hr class="border-preto/20 dark:border-branco/20">