import { salvarNoLocalStorage, carregarDoLocalStorage } from "./localStorage.js";
import { verificarListaComprados } from "./verificar-lista-comprados.js";
import { verificarListaVazia } from "./verificar-lista-vazia.js";

const listaDeCompras = document.getElementById("lista-adicionados");
const listaComprados = document.getElementById("lista-comprados");
const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?")

    if (confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
        salvarNoLocalStorage(listaDeCompras, listaComprados);
        carregarDoLocalStorage(listaDeCompras, listaComprados);
    }
}


export { excluirItem };