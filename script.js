function calcularIMC() {
    // Captura os elementos da página
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const resultadoDiv = document.getElementById('resultado');
    const imcValor = document.getElementById('imc-valor');
    const imcBadge = document.getElementById('imc-badge');

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Validação inteligente
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha o peso e a altura com valores maiores que zero.");
        return;
    }

    // Executa o cálculo
    const imc = peso / (altura * altura);

    // Atualiza o número grande na tela
    imcValor.innerText = imc.toFixed(2);

    // Remove cores antigas do balão
    imcBadge.className = 'badge';

    // Define o texto e a cor com base na tabela oficial de IMC
    if (imc < 18.5) {
        imcBadge.innerText = "Abaixo do peso";
        imcBadge.classList.add('bg-azul');
    } else if (imc >= 18.5 && imc < 25) {
        imcBadge.innerText = "Peso ideal";
        imcBadge.classList.add('bg-verde');
    } else if (imc >= 25 && imc < 30) {
        imcBadge.innerText = "Levemente acima do peso";
        imcBadge.classList.add('bg-laranja');
    } else if (imc >= 30 && imc < 35) {
        imcBadge.innerText = "Obesidade Grau I";
        imcBadge.classList.add('bg-vermelho');
    } else if (imc >= 35 && imc < 40) {
        imcBadge.innerText = "Obesidade Grau II";
        imcBadge.classList.add('bg-vermelho');
    } else {
        imcBadge.innerText = "Obesidade Grau III";
        imcBadge.classList.add('bg-vermelho');
    }

    // Mostra o resultado com a animação de fade
    resultadoDiv.classList.remove('hidden');
}

// Nova função para limpar os campos e esconder o resultado antigo
function limparCampos() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').value = '';
    document.getElementById('resultado').classList.add('hidden');
}
