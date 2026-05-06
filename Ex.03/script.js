let soma = 0;

let compra = Number(prompt("Digite valores de compra. Digite 0 para parar"));

while (compra !== 0) {
    soma += compra;
    compra = Number(prompt("Digite valores de compra. Digite 0 para parar"));
}

alert("Total de compra: " + soma);