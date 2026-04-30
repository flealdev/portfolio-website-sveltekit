<script>
  let {
    titulo,
    href,
    corFundo = "bg-azul-4-principal",
    corIcone = "fill-branco",
    corTexto = "text-branco",
    classes = "items-start",
    mensagem,
    novaGuia=false,
    eDestaque = false,
  } = $props();
</script>

<a
  {href}
  target="{novaGuia ? '_blank' : ''}"
  class="flex gap-[5px] justify-center py-5 px-[25px] nlf-grow {eDestaque
    ? 'bg-vermelho-4-principal'
    : corFundo} rounded-[5px] max-w-[300px] {classes}"
>
  <span class="font-bold leading-none text-[20px] {eDestaque ? 'text-branco' : corTexto}"
    >{titulo}</span
  >
  <svg
    width="9"
    height="8"
    viewBox="0 0 9 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.06375 0.167398L7.18787 0.261814C7.42491 0.257796 7.64387 0.356229 7.81864 0.530996C7.99341 0.705764 8.08983 0.922718 8.08782 1.16177L8.19027 5.29392C8.20233 5.78408 7.81261 6.17379 7.32246 6.16174C6.83231 6.14968 6.42652 5.7439 6.41447 5.25375L6.37028 3.27304L2.01112 7.6322C1.66962 7.9737 1.10715 7.96164 0.751589 7.60608C0.396027 7.25052 0.383974 6.68805 0.723466 6.34856L5.08262 1.9894L3.10192 1.94521C2.61176 1.93316 2.20598 1.52737 2.19393 1.03722C2.18388 0.545058 2.57159 0.157354 3.06375 0.167398Z"
      fill="white"
    />
  </svg>
</a>
