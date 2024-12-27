import { criarItemDaLista } from "./criar-item-da-lista.js";
import { verificarListaVazia } from "./verificar-lista-vazia.js"; 
import { listaComprados } from "./criar-item-da-lista.js";  
import { carregarDoLocalStorage, salvarNoLocalStorage } from "./localStorage.js";

const item = document.querySelector('#lista-itens');

const listaDeCompras = document.querySelector("#lista-adicionados");

export function adicionarItem(event) {
    event.preventDefault();

    if (item.value === "") {
        alert ("É necessário inserir um item.");
        return;
    } 
    
    
    const itemDaLista = criarItemDaLista(item.value, listaDeCompras, listaComprados);
    listaDeCompras.appendChild(itemDaLista);
    
    salvarNoLocalStorage(listaDeCompras, listaComprados);
    carregarDoLocalStorage(listaDeCompras, listaComprados);
    verificarListaVazia(listaDeCompras);
    
    item.value = "";
}

document.addEventListener("DOMContentLoaded", carregarDoLocalStorage);

