let soma = 0;
let contador = 0;

let nota = Number(prompt("Digite uma nota de 0 a 10. Qualquer outro caracter para parar"));

while (nota >= 0) {
    soma += nota;
    contador++;
    nota = Number(prompt("Digite uma nota de 0 a 10. Qualquer outro caracter para parar"));
}

if (contador > 0) {
    let media = soma / contador;
    alert ("Média das notas: " + media);
} else {
    alert ("Nenhuma nota valida foi digitada.");
}