<script>
  import AvisoForm from "$lib/components/atoms/aviso-form/aviso-form.svelte";
  import { page } from "$app/state";
</script>

<form
  id="form-parceria"
  action="https://formsubmit.co/643956294f103fb231a4264bb09a39fa"
  method="post"
  class="flex flex-col w-full items-center gap-5 lg:max-w-200 dark:text-branco"
  enctype="multipart/form-data"
>
  <fieldset class="flex w-full flex-wrap gap-3 justify-between">
    <label class="flex flex-col gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Nome <span class="text-vermelho">*</span></span
      >
      <input
        type="text"
        name="Nome"
        placeholder="Digite seu nome completo"
        class="nlf-input nlf-input--foco"
        required
      />
    </label>
    <label class="flex flex-col gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >CNPJ</span
      >
      <input
        type="text"
        name="CNPJ"
        placeholder="Digite seu CNPJ ou deixe em branco em caso de Pessoa Física"
        class="nlf-input nlf-input--foco"
      />
    </label>
    <label class="flex flex-col gap-1 max-md:w-full md:w-[45%]">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Telefone <span class="text-vermelho">*</span></span
      >
      <input
        type="tel"
        name="Telefone"
        placeholder="Digite seu número com DDD"
        class="nlf-input nlf-input--foco"
        required
      />
    </label>
    <label class="flex flex-col gap-1 max-md:w-full md:w-[50%]">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >E-mail</span
      >
      <input
        type="email"
        name="E-mail"
        placeholder="Digite seu melhor e-mail"
        class="nlf-input nlf-input--foco"
      />
    </label>
    <label class="flex flex-col gap-1 w-full">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Proposta <span class="text-vermelho">*</span></span
      >
      <textarea
        name="Proposta"
        id=""
        cols="30"
        rows="10"
        class="nlf-input-textarea"
        placeholder="Digite a sua proposta de parceria"
        required
      />
    </label>
    <label class="nlf-input-file--field w-full flex-col px-5 text-center gap-3">
      <span
        class="nlf-paragrafo font-bold text-auxiliar-primeira dark:text-branco"
        >Documento de proposta (somente .pdf, tamanho máximo de 5MB)</span
      >
      <span class="nlf-nota-rodape dark:text-branco"
        >Clique ou arraste o arquivo.</span
      >
      <input
        type="file"
        name="Documento"
        class="nlf-input-file dark:text-branco"
        accept=".pdf"
      />
    </label>
  </fieldset>
  <input type="hidden" name="_cc" value="contato@newlifefibra.com.br" />
  <input
    type="hidden"
    name="_next"
    value="https://minhanewlife.com.br/obrigado"
  />
  <input
    type="hidden"
    name="_subject"
    value="PARCERIA - Proposta - New Life Fibra"
  />
  <div class="flex flex-col gap-3 w-full items-center">
    <button type="submit" class="nlf-botao nlf-botao--submit">Enviar</button>
    <AvisoForm />
  </div>
</form>
