const personagens = [
    {nome: "Jão", nivel: 26, raca: "Elfo Negro", classe: "Maguinho Lixeira"},
    {nome: "Maykon", nivel: 27, raca: "Humano", classe: "Guerreiro Calvo"},
    {nome: "Renan", nivel: 30, raca: "Anão", classe: "Pyke do Priston"},
    {nome: "Abdala", nivel: 25, raca: "Demônio", classe: "Gozefoge"},
    {nome: "Julio", nivel: 31, raca: "Humano", classe: "Tank Largo"},
    {nome: "Geferson", nivel: 26, raca: "Demônio", classe: "Bardo"},
    {nome: "Andeson", nivel: 25, raca: "Orc", classe: "Cavaleiro Insistente"},
]

// Map cria um novo array

const nomeDosPersonagens = personagens.map(function(personagens){
    return personagens.nome
})

const racaDosPesonagens = personagens.map(function(personagens){
    return personagens.raca
})

console.log(nomeDosPersonagens)
console.log(racaDosPesonagens)

// Filter cria um novo array

const apenasHumanos = personagens.filter(function(personagens){
    return personagens.raca === "Humano"
})

console.log(apenasHumanos)


// Reduce cria novo array => acumula valores

const niveisAcumulados = personagens.reduce(function(valorAcumulado, personagens) {
    return valorAcumulado + personagens.nivel
}, 0)

const racasAcumuladas = personagens.reduce(function(valorAcumulado, personagens) {
    if (valorAcumulado[personagens.raca]) {
        valorAcumulado[personagens.raca].push(personagens)
    } else {
        valorAcumulado[personagens.raca] = [personagens]
    }
    return valorAcumulado

}, {})

console.log(niveisAcumulados)
console.log(racasAcumuladas)

// Sort => Ordenar => modifica a array

const personagensOrdenados = personagens.slice().sort(function(a, b){
    return a.nivel - b.nivel
})

console.log(personagensOrdenados)

personagens.sort(function(a, b){
    return b.nivel - a.nivel
})

console.log(personagens)