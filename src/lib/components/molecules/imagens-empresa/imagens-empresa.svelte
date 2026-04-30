<script>
  let { classes, responsivo = false } = $props();
</script>

<div
  class="{responsivo
    ? 'max-md:hidden md:flex'
    : 'flex'} overflow-x-auto {classes}"
>
  <img
    src="/assets/fotos-empresa/foto-empresa-1.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-2.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-3.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-4.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-5.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-6.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-7.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-8.jpg"
    alt=""
    class="w-50 aspect-square"
  />
  <img
    src="/assets/fotos-empresa/foto-empresa-9.jpg"
    alt=""
    class="w-50 aspect-square"
  />
</div>
