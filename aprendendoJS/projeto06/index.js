let initial = parseFloat(prompt("Qual a quantidade de dinheiro inicial? "))
//let option = "3"
do {
    option = prompt(
        initial + " é sua quantidade de dinheiro atual" +
        "\nO que deseja fazer?"  +
        "\n1- Adicionar dinheiro ao banco" +
        "\n2- Retirar dinheiro do banco" +
        "\n3- Sair")
    switch (option) {
        case "1":
            let moreMoney = parseFloat(prompt("Digite a quantidad e de dinheiro a ser adicionada: "))
            initial += moreMoney
             break
        case "2":
            let takeMoney = parseFloat(prompt("Digite a quantidade de dinheiro a ser retirada: "))
            initial -= takeMoney
            break
        case "3":
            alert("Você escolheu sair.")
            break
        }
} while (option != "3"){

}
alert("Finalizando...")