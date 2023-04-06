// Pede ao usuário para inserir os três valores
var valor1 = prompt("Insira o primeiro valor:");
var valor2 = prompt("Insira o segundo valor:");
var valor3 = prompt("Insira o terceiro valor:");

// Converte os valores de string para número e calcula a média
var media = (Number(valor1) + Number(valor2) + Number(valor3)) / 3;

// Mostra o resultado em um alert
alert("A média dos valores " + valor1 + ", " + valor2 + " e " + valor3 + " é " + media.toFixed(2));

// Pede ao usuário para confirmar se deseja recalcular a média
var confirmar = confirm("Deseja recalcular a média?");

// Se o usuário confirmar, recarrega a página
if (confirmar) {
    location.reload();
}
