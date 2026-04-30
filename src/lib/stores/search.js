import { writable } from "svelte/store";

export const criaStorePesquisa = (data) => {
  const { subscribe, set, update } = writable({
    data,
    filtered: data,
    search: "",
  });

  return {
    subscribe,
    set,
    update,
  };
};

export const lidaPesquisa = (store) => {
  const termoPesquisa = store.search.toLowerCase() || "";
  store.filtered = store.data.filter((item) => {
    return item.termosPesquisa.toLowerCase().includes(termoPesquisa);
  });
};
