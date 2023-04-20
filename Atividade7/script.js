// Função para fazer a jogada do jogador
function play(escolhaJogador) {
    // Opções do jogo
    const escolhas = ['pedra', 'papel', 'tesoura'];
    
    // Escolha aleatória do computador
    let escolhaComputador = Math.random();

    if (escolhaComputador <= 0.33) {
        escolhaComputador = 'pedra';
    } 
    else if (escolhaComputador <= 0.66) {
        escolhaComputador = 'papel';
    } 
    else {
        escolhaComputador = 'tesoura';
    }

    // Verifica o resultado
    let resultado;
    if (escolhaJogador === escolhaComputador) {
        resultado = 'Empate!';
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você ganhou!';
    } else {
        resultado = 'Você perdeu!';
    }

    // Exibe o resultado na página
    document.getElementById('resultado').innerText = `Você escolheu ${escolhaJogador}, o computador escolheu ${escolhaComputador}. ${resultado}`;
}


