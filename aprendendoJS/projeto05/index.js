do{
        option = prompt("Digite a opção desejada:" +
        "\n1 - Olá" +
        "\n2 - Bem-vindo" +
        "\n3 - Boa sorte!" +
        "\n4 - Força na caminhada!" +
        "\n5 - Sair")

    switch (option) {
        case "1":
            alert("Olá")
            break
        case "2":
            alert("Olá 2")
            break
        case "3":
            alert("Olá 3")
            break
        case "4":
            alert("Olá 4")
            break
        case "5":
            alert("Finalizando")
            break
    }
} while (option !== "5") {

}
alert("Finalizando...")