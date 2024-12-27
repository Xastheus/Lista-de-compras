import { adicionarItem } from "./JS/adicionar-item.js";
import { salvarNoLocalStorage, carregarDoLocalStorage } from "./JS/localStorage.js";

const botaoAdicionarItem = document.getElementById("botao-adicionar");

botaoAdicionarItem.addEventListener("click", adicionarItem);

document.addEventListener("DOMContentLoaded", carregarDoLocalStorage);