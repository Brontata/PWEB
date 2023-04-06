// Pede ao usuário para inserir os dois valores
var valor1 = prompt("Insira o primeiro valor:");
var valor2 = prompt("Insira o segundo valor:");

// Converte os valores de string para número e calcula as operações
var soma = Number(valor1) + Number(valor2);
var subtracao = Number(valor1) - Number(valor2);
var produto = Number(valor1) * Number(valor2);
var divisao = Number(valor1) / Number(valor2);
var resto = Number(valor1) % Number(valor2);

// Monta a mensagem a ser exibida em um alert
var mensagem = "Valor 1: " + valor1 + "\n";
mensagem += "Valor 2: " + valor2 + "\n";
mensagem += "Soma: " + soma + "\n";
mensagem += "Subtração: " + subtracao + "\n";
mensagem += "Produto: " + produto + "\n";
mensagem += "Divisão: " + divisao.toFixed(2) + "\n";
mensagem += "Resto: " + resto;

// Mostra o resultado em um alert
alert(mensagem);

// Pede ao usuário para confirmar se deseja recalcular as operações
var confirmar = confirm("Deseja recalcular as operações?");

// Se o usuário confirmar, recarrega a página
if (confirmar) {
    location.reload();
}
