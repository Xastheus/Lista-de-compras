// Salva os itens das listas no localStorage
export function salvarNoLocalStorage(listaDeCompras, listaComprados) {
    const itensAdicionados = listaDeCompras.children ? Array.from(listaDeCompras.children).map(li =>
        li.querySelector("#item-titulo") ? li.querySelector("#item-titulo").innerText : ''
    ).filter(item => item.trim() !== '') : [];

    const itensComprados = listaComprados.children ? Array.from(listaComprados.children).map(li =>
        li.querySelector("#item-titulo") ? li.querySelector("#item-titulo").innerText : ''
    ).filter(item => item.trim() !== '') : [];

    localStorage.setItem("itensAdicionados", JSON.stringify(itensAdicionados));
    localStorage.setItem("itensComprados", JSON.stringify(itensComprados));
}

// Carrega os itens das listas do localStorage
export function carregarDoLocalStorage() {
    const itensAdicionados = localStorage.getItem("itensAdicionados");
    const itensComprados = localStorage.getItem("itensComprados");

    return {
        adicionados: itensAdicionados ? JSON.parse(itensAdicionados) : [],
        comprados: itensComprados ? JSON.parse(itensComprados) : [],
    };
}
