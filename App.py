print("====================================")
print("        CALCULADORA DE IMC          ")
print("====================================\n")

# Pede os dados para o usuário e transforma em números quebrados (float)
peso = float(input("Digite seu peso em kg (Ex: 70.5): "))
altura = float(input("Digite sua altura em metros (Ex: 1.75): "))

# Realiza o cálculo do IMC
imc = peso / (altura * altura)

print("\n------------------------------------")
print(f"Seu IMC é: {imc:.2f}")

# Verifica a classificação do peso
if imc < 18.5:
    print("Classificação: Abaixo do peso")
elif imc >= 18.5 and imc < 25:
    print("Classificação: Peso ideal")
elif imc >= 25 and imc < 30:
    print("Classificação: Levemente acima do peso")
else:
    print("Classificação: Obesidade")

print("------------------------------------")

# Linha para segurar a tela aberta no Windows
input("\nPressione ENTER para fechar o programa...")
