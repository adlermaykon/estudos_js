let heroName = prompt("Digite o nome do herói: ")
let AtkPower = prompt("Digite o poder de ataque do herói: ")
let vilainName = prompt("Digite o nome do Vilão: ")
let vilainHealth = prompt("Digite o pontos de vida do Vilão: ")
let vilainArmor = prompt("Digite a quantidade de armadura do Vilão: ")
let vilainShield = prompt("O vilão tem escudo? [S/N] Comando inválido será lido como 'não'")
let results = parseFloat(AtkPower) - parseFloat(vilainArmor)

// if (vilainShield[0] == "S" || "s") {
//     vilainShield = 1
// } else if (vilainShield[0] == "N" || "n") {
//     vilainShield = 0
// }

if ((AtkPower > vilainArmor) && (vilainShield == "n")) {
    alert("Você causou" + results + "no vilão sem escudo! Agora o vilão tem: " + (vilainHealth - results))
} else {
    alert("Fodase")
}

