let saldo = 1500;

let saque = Number(prompt("Digite um valor para saque:"));

while (saque > 0) {
    while (saque > saldo || saque <= 0 || isNaN(saque)) {
        saque = Number(prompt("Valor invalido ou saldo insuficiente. Digite outro valor:"));
    }

    saldo -= saque;
    alert(`Saque realizado! Saldo restante: ${saldo}`);

    if (saldo < 0) {
        alert("Saldo esgotado.");
        break;
    }
    
    saque = Number(prompt("Digite o valor para saque:"));
}