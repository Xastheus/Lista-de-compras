import { carregarDoLocalStorage, salvarNoLocalStorage } from "./localStorage.js";

const mensagemListaVazia = document.querySelector(".mensagem-vazia");
const imagemDog = document.querySelector(".dog");

export function verificarListaVazia(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        mensagemListaVazia.style.display = "block";  // Aparece apenas quando a lista está vazia
        imagemDog.style.display = "block";       // Aparece apenas quando a lista está vazia
    } else {
        mensagemListaVazia.style.display = "none";
        imagemDog.style.display = "none";
    }

    
}
