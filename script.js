function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const resultadoDiv = document.getElementById('resultado');
    const imcValor = document.getElementById('imc-valor');
    const imcBadge = document.getElementById('imc-badge');
    const imcDica = document.getElementById('imc-dica');

    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Por favor, digite um peso e uma altura válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    imcValor.innerText = imc.toFixed(2);
    imcBadge.className = 'badge';

    // Condições com classificação e dicas de saúde personalizadas
    if (imc < 18.5) {
        imcBadge.innerText = "Abaixo do peso";
        imcBadge.classList.add('bg-azul');
        imcDica.innerText = "Dica: Procure um nutricionista para estruturar uma dieta focada em ganho de massa magra de forma saudável.";
    } else if (imc >= 18.5 && imc < 25) {
        imcBadge.innerText = "Peso ideal";
        imcBadge.classList.add('bg-verde');
        imcDica.innerText = "Dica: Excelente! Seu peso está ótimo. Continue mantendo uma alimentação equilibrada e praticando exercícios.";
    } else if (imc >= 25 && imc < 30) {
        imcBadge.innerText = "Levemente acima do peso";
        imcBadge.classList.add('bg-laranja');
        imcDica.innerText = "Dica: Atenção a pequenas trocas na alimentação e inclua caminhadas ou atividades físicas na sua rotina semanal.";
    } else if (imc >= 30 && imc < 35) {
        imcBadge.innerText = "Obesidade Grau I";
        imcBadge.classList.add('bg-vermelho');
        imcDica.innerText = "Dica: É um bom momento para consultar um médico ou profissional de educação física para cuidar da saúde preventiva.";
    } else {
        imcBadge.innerText = "Obesidade Grave";
        imcBadge.classList.add('bg-vermelho');
        imcDica.innerText = "Dica: Recomenda-se acompanhamento médico especializado para traçar metas seguras de perda de peso e bem-estar.";
    }

    resultadoDiv.classList.remove('hidden');
}

function limparCampos() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').classList.add('hidden');
}
