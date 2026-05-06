let nome = prompt("Digite seu primeiro nome:");

while (nome === null || nome.trim() === "") {
    nome = prompt("Nome invalido. Digite seu primeiro nome:");
}

let sobrenome = prompt("Digite seu sobrenome");

while (sobrenome === null || sobrenome.trim() === "") {
    sobrenome = prompt("Sobrenome invalido. Digite seu sobrenome novamente:");
}

alert(`Nome completo: ${nome} ${sobrenome}`);