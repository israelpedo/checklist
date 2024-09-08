const editarItem = (elemento) => { // Arrow Function
    let novoItem = prompt('Enter the new item name:');

    if(novoItem !== null && novoItem.trim() !== '') {
        const itemTextoAtualizado = elemento.querySelector('#item-titulo');
        itemTextoAtualizado.textContent = novoItem;
        const dataAtualizada = elemento.querySelector('.texto-data');
        dataAtualizada.innerText = `${new Date().toLocaleDateString("en", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("en", { hour: "numeric", minute: "numeric" })}`;

        const estavaComprado = elemento.querySelector('.input-checkbox').checked; // (checked) True or False

        if(estavaComprado) {
            elemento.querySelector('.input-checkbox').checked = true;
            elemento.querySelector('.checkbox-customizado').classList.add('checked');
            itemTextoAtualizado.style.textDecoration = 'line-through';
        }
    }
}

export { editarItem };