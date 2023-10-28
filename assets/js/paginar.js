function paginar(id) {
    // Remove a classe 'active' de todos os elementos
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }

    // Adiciona a classe 'active' ao elemento selecionado
    document.getElementById(id).classList.add("active");
}