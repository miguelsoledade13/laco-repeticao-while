let numero = parseFloat(prompt("Digite um número positivo:"));

while (isNaN(numero) || numero < 0) {
    numero = parseFloat(prompt("Isso não é um numero positivo bobão."))
}
numero = Number(numero); 

alert("Isso é um número positivo:", numero);