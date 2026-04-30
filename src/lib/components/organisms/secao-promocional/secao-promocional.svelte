<script>
  import Banner from "$lib/components/atoms/banner/banner.svelte";
  import BotaoCta from "$lib/components/atoms/botao/--cta/botao--cta.svelte";
  import SliderImg from "$lib/components/molecules/slider-img/slider-img.svelte";

  let { img = [{ src: "" }] } = $props();
</script>

<div class="w-full gap-5 nlf-padding">
  <SliderImg slideClasses="xl:pb-[50px]" {img} />
</div>
