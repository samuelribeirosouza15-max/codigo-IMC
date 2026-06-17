function calcularIMC() {
    // Pega os valores digitados nas caixinhas do HTML
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    // Pega os elementos onde vamos mostrar a resposta
    const resultadoDiv = document.getElementById('resultado');
    const imcValor = document.getElementById('imc-valor');
    const imcClassificacao = document.getElementById('imc-classificacao');

    // Valida se o usuário preencheu tudo certinho
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Mostra o valor do IMC com duas casas decimais
    imcValor.innerText = `Seu IMC é: ${imc.toFixed(2)}`;

    // Limpa classes antigas de cor do texto
    imcClassificacao.className = '';

    // Verifica a classificação do IMC e define a mensagem e a cor
    if (imc < 18.5) {
        imcClassificacao.innerText = "Classificação: Abaixo do peso";
        imcClassificacao.classList.add('abaixo-peso');
    } else if (imc >= 18.5 && imc < 25) {
        imcClassificacao.innerText = "Classificação: Peso ideal (parabéns!)";
        imcClassificacao.classList.add('peso-ideal');
    } else if (imc >= 25 && imc < 30) {
        imcClassificacao.innerText = "Classificação: Levemente acima do peso";
        imcClassificacao.classList.add('sobrepeso');
    } else if (imc >= 30 && imc < 35) {
        imcClassificacao.innerText = "Classificação: Obesidade Grau I";
        imcClassificacao.classList.add('obesidade');
    } else if (imc >= 35 && imc < 40) {
        imcClassificacao.innerText = "Classificação: Obesidade Grau II (severa)";
        imcClassificacao.classList.add('obesidade');
    } else {
        imcClassificacao.innerText = "Classificação: Obesidade Grau III (mórbida)";
        imcClassificacao.classList.add('obesidade');
    }

    // Faz a caixinha do resultado aparecer na tela
    resultadoDiv.classList.remove('hidden');
}
