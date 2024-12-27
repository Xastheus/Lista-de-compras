import { editarItem } from "./editar-item.js";
import { excluirItem } from "./excluir-item.js";
import { gerarDiaDaSemana } from "./gerar-dia-da-semana.js";
import { salvarNoLocalStorage, carregarDoLocalStorage } from "./localStorage.js";
import { verificarListaComprados } from "./verificar-lista-comprados.js"
import { verificarListaVazia } from "./verificar-lista-vazia.js";

export const listaDeCompras = document.getElementById("lista-adicionados");
export const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function criarItemDaLista (item) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (event) {
        const checkboxInput = event.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = event.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = event.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
        
        verificarListaComprados(listaComprados);
        salvarNoLocalStorage(listaDeCompras, listaComprados)
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado")

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "imgs/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function () {
        excluirItem(itemDaLista);
        salvarNoLocalStorage(listaDeCompras, listaComprados)
    })

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "imgs/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function () {
        editarItem(itemDaLista);
        salvarNoLocalStorage(listaDeCompras, listaComprados)
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = gerarDiaDaSemana();
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    salvarNoLocalStorage(listaDeCompras, listaComprados);

    return itemDaLista;
}

// Função para carregar os itens do localStorage ao iniciar a página
export function carregarItensDoLocalStorage() {
    const { adicionados, comprados } = carregarDoLocalStorage();

    // Reconstruir itens adicionados
    adicionados.forEach(itemTexto => {
        const itemDaLista = criarItemDaLista(itemTexto);
        listaDeCompras.appendChild(itemDaLista);
    });

    // Reconstruir itens comprados
    comprados.forEach(itemTexto => {
        const itemDaLista = criarItemDaLista(itemTexto);
        listaComprados.appendChild(itemDaLista);

        // Marcar como comprado
        const checkbox = itemDaLista.querySelector(".input-checkbox");
        checkbox.checked = true;
        itemDaLista.querySelector(".checkbox-customizado").classList.add("checked");
        itemDaLista.querySelector("#item-titulo").style.textDecoration = "line-through";
    });
    verificarListaVazia(listaDeCompras, listaComprados);
    verificarListaComprados(listaComprados);
    salvarNoLocalStorage(listaDeCompras, listaComprados);
}

// Inicializa o carregamento ao carregar a página
document.addEventListener("DOMContentLoaded", carregarItensDoLocalStorage);











