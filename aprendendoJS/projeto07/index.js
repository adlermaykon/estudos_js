let number = parseFloat(prompt("Digite o número que deseja ver a tabuada"))
let multiplicator = 0
let sum = ""
for (alert("A tabuada de " + number + " fica dessa forma: \n") ; multiplicator <= 20 ; ) {
    sum += number + " x " + multiplicator + " = " + (results = number * multiplicator) + "\n"
    multiplicator++
}
alert("Os resultados de multiplicação do " + number + " de 1 à 20 são: \n" + sum)