const palavra = prompt("Digite uma palavra para ver se ela é palíndroma")
let invertida = ""
for (let tamanhoPalavra = palavra.length - 1; tamanhoPalavra >= 0 ; tamanhoPalavra--) {
    invertida += palavra[tamanhoPalavra]
}
alert("a palavra fornecida invertida é: " + invertida)
if (palavra === invertida) {
    alert("É uma palavra políndroma")
} else {
    alert("Não é uma palavra políndroma")
}

const testeArray = ["alfa", "beta", "gama"];