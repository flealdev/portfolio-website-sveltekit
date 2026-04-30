import { browser } from "$app/environment";

let temaWindow = "light";
if (browser) {
  temaWindow = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

const tema = $state({
  padrao: temaWindow,
});

// tema.subscribe((valor) => {
//     if (browser) {
//       window.localStorage.setItem('theme', valor);
//     }
// });

export default tema;
