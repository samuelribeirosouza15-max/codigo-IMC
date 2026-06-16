import streamlit as str

# Configuração do título da página
st.title("Calculadora de IMC")
st.write("Descubra o seu Índice de Massa Corporal de forma rápida.")

---

# Criação dos campos de entrada de dados
peso = st.number_input("Digite seu peso (em kg):", min_value=0.0, format="%.2f")
altura = st.number_input(
    "Digite sua altura (em metros):", min_value=0.0, format="%.2f"
)

# Botão para realizar o cálculo
if st.button("Calcular IMC"):
    if peso > 0 and altura > 0:
        # Cálculo do IMC: peso dividido pela altura ao quadrado
        imc = peso / (altura**2)

        # Exibe o resultado formatado
        st.subheader(f"Seu IMC é: {imc:.2f}")

        # Classificação do IMC
        if imc < 18.5:
            st.warning("Classificação: Abaixo do peso")
        elif 18.5 <= imc < 25:
            st.success("Classificação: Peso ideal (parabéns!)")
        elif 25 <= imc < 30:
            st.warning("Classificação: Levemente acima do peso")
        elif 30 <= imc < 35:
            st.error("Classificação: Obesidade Grau I")
        elif 35 <= imc < 40:
            st.error("Classificação: Obesidade Grau II (severa)")
        else:
            st.error("Classificação: Obesidade Grau III (mórbida)")
    else:
        st.info("Por favor, insira valores válidos para peso e altura.")
