let buildings = []
let option = 0
do {
    option = prompt("Bem vindo ao cadastro de imóveis! Escolha a opção desejada:\n" +
    "1- Cadastrar novo imóvel\n" +
    "2- Listar imóveis cadastrados\n" + 
    "3- Sair\n" +
    "Há " + buildings.length + " cadastrados no sistema.\n")

    switch (option) {
        case "1":
        const newbuilding = {}
            newbuilding.propertname = prompt("Digite o nome do proprietário da casa!")
            newbuilding.bedrooms = prompt("Quantos quartos há na casa? ")
            newbuilding.bathrooms = prompt("Quantos banheiros há na casa? ")
            newbuilding.garage = prompt("Possui garagem? [S/N]")
            buildings.push(newbuilding)
            break
        case "2":
            for (let i = 0; buildings.length > i; i++)
            {
                alert("Casa número " + (i + 1) + " de propriedade de " + buildings[i].propertname + "\n" +
                "Possui " + buildings[i].bedrooms + " quarto(s)\n" + 
                buildings[i].bathrooms + " banheiro(s), e \n" + 
                "garagem: " + buildings[i].garage)
            }
            break
        case "3":
            break
                    }
    
} while (option !== "3") {
    alert("Finalizando...")
}