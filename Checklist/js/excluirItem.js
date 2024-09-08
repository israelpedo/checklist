import { verificarListaVazia } from "./verificarListaVazia.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById('lista-comprados');
const excluirItem = (elemento) => { // Arrow Function
    let confirmacao = confirm('Are you sure you want to delete this item?');

    if(confirmacao) {
        elemento.remove();

        verificarListaVazia(listaDeCompras);
        verificarListaComprados(listaComprados);
    }
}

export { excluirItem };