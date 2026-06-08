<script>
    import BotaoPopup from "$lib/components/atoms/botao/--popup/botao--popup.svelte";
    import ContainerBranco from "$lib/components/atoms/container-branco/container-branco.svelte";
    import {manipulaModal} from "$lib/utils.js";
    import ModalDuvidasFrequentes
        from "$lib/components/molecules/modal-duvidas-frequentes/modal-duvidas-frequentes.svelte";

    let {
        duvidas = [
            {
                id: "modal-duvidas-topico1",
                titulo: "Tópico 1",
                componente: ModalDuvidasFrequentes,
                descricao: "Informações sobre o tópico 1.",
                duvidas: [
                    {
                        questao: "Título da questão 1",
                        resposta: "Resposta da questão 1",
                    },
                    {
                        questao: "Título da questão 2",
                        resposta: "Resposta da questão 2",
                    },
                ],
            },
          {
            id: "modal-duvidas-topico2",
            titulo: "Tópico 2",
            componente: ModalDuvidasFrequentes,
            descricao: "Informações sobre o tópico 2.",
            duvidas: [
              {
                questao: "Título da questão 1",
                resposta: "Resposta da questão 1",
              },
            ],
          },
        ]
    } = $props();
</script>

<ContainerBranco class="w-full xl:w-[40%]">
    <div class="flex flex-col items-center gap-[30px] w-full">
        <h2
                class="titulo-h2 text-auxiliar-primeira w-full lg:text-center dark:text-branco"
        >
            Dúvidas frequentes
        </h2>
        <div
                class="flex justify-center flex-wrap w-full max-xl:max-w-[700px] xl:max-w-100 items-center max-md:gap-[10px] md:gap-x-5 max-h-[400px] md:gap-y-[15px]"
        >
            {#each duvidas as duvida}
                <BotaoPopup
                        onclick={() => {
            manipulaModal(duvida.id, duvida.componente, undefined, {
              id: duvida.id,
              titulo: duvida.titulo,
              descricao: duvida.descricao,
              duvidas: duvida.duvidas, 
              border: true,
              overflowY: true             
            });
          }}
                        titulo={duvida.titulo}
                />
            {/each}
        </div>
    </div>
</ContainerBranco>
