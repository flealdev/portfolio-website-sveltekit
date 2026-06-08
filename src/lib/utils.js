import { mount } from "svelte";

function retornaDataUnix(data){
    const dataSeparada = data.split("/")
    const dataISO = `${dataSeparada[2]}/${dataSeparada[1]}/${dataSeparada[0]}`
    const dataConvertida = new Date(dataISO)

    return dataConvertida
}

function separaDataIncidente(dataHora) {
    const dataSeparadaDoTempo = dataHora.split("T");
    const dataSeparada = dataSeparadaDoTempo[0].split("-");
    const data = `${dataSeparada[2]}/${dataSeparada[1]}/${dataSeparada[0]}`;

    return data
}

function manipulaModal(idModal = "", componente, target = document.getElementById("svelte-body"), props = {}, overflow = false) {
    if (!document.getElementById(idModal)) {
        if (!overflow) {
            document.body.style = "overflow: hidden";
        }
        mount(componente, {
            target,
            props
        });
    } else {
        if (!overflow) {
            document.body.style = "overflow: hidden";
        }
        document
            .getElementById(idModal)
            .classList.remove("hidden");
        document
            .getElementById(idModal)
            .classList.add("flex");
    }

}

function hideModalFlexHidden(id, overflow = false) {
    document.getElementById(id).classList.remove("flex");
    document.getElementById(id).classList.add("hidden");
    if (!overflow) {
        document.body.style = "overflow: auto";
    }
}

function criaCookie(cookieName, cookieValue) {
    // let expires = "";
    // if (expireDays) {
    //     const date = new Date();
    //     date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    //     expires = date.toUTCString();
    // }
    document.cookie = cookieName + "=" + cookieValue + ";" + ";path=/";
}

function retornaCookie(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookiesArray = decodedCookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return false;
}

export {
    separaDataIncidente,
    manipulaModal,
    hideModalFlexHidden,
    criaCookie,
    retornaCookie,
    retornaDataUnix
}