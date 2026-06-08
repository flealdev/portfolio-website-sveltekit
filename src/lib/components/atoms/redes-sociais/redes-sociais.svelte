<script>
    import Divisor from "$lib/components/atoms/divisor/divisor.svelte";

    let {classes} = $props();
</script>

<p
        class="enfase flex gap-[10px] items-center flex-wrap text-preto/40 dark:text-branco {classes}"
>
    <a
            target="_blank"
            href="/"
            aria-label="Acesse o Facebook">facebook</a
    >
    <span class="text-auxiliar-quinta font-black text-xs">/</span>
    <a
            target="_blank"
            href="/"
            aria-label="Acesse o Instagram">instagram</a
    >
    <span class="text-auxiliar-quinta font-black text-xs">/</span>
    <a
            target="_blank"
            href="/"
            aria-label="Acesse o X/Twitter">x</a
    >
    <span class="text-auxiliar-quinta font-black text-xs">/</span>
    <a
            target="_blank"
            href="/"
            aria-label="Acesse o TikTok">tiktok</a
    >
    <span class="text-auxiliar-quinta font-black text-xs">/</span>
    <a
            target="_blank"
            href="/"
            aria-label="Acesse o Youtube">youtube</a
    >
    <span class="text-auxiliar-quinta font-black text-xs">/</span>
    <a
            target="_blank"
            href="/"
            aria-label="Acesse o Whatsapp">whatsapp</a
    >
</p>
