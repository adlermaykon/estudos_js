const vehicle01  = prompt("Digite em Km/h a velocidade do primeiro veículo:")
const vehicle02  = prompt("Digite em Km/h a velocidade do segundo veículo:")

if (vehicle01 > vehicle02) {
    alert("A velocidade do primeiro é maior!")
} else if (vehicle01 < vehicle02) {
    alert("A velocidade do segundo é maior!")
} else if (vehicle01 == vehicle02) {
    alert("A velocidade dos dois é igual!")
}