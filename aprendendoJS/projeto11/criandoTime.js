const tabela = document.getElementById('tabela')

function adicionarLista (){
    alert('Isso')
}

function adicionarJogador() {
    const secao = document.getElementById('secaoDeDados')
    const breake = document.createElement('br')

    const nomeJogador = document.createElement('li')
    nomeJogador.innerText = 'Nome do Jogador: '
    const inputNomeJogador = document.createElement('input')
    inputNomeJogador.type = 'text'
    inputNomeJogador.name = 'nomeJogador'
    nomeJogador.appendChild(inputNomeJogador)
    nomeJogador.appendChild(breake)
    
    const numeroCamisa = document.createElement('li')
    numeroCamisa.innerText = 'Numero da camisa: '
    const inputNumeroCamisa = document.createElement('input')
    inputNumeroCamisa.type = 'number'
    inputNumeroCamisa.name = 'numeroCamisaJogador'
    numeroCamisa.appendChild(inputNumeroCamisa)
    numeroCamisa.appendChild(breake)

    const posicaoJogador = document.createElement('li')
    posicaoJogador.innerText = 'Posição do jogador: '
    const inputPosicaoJogador = document.createElement('input')
    inputPosicaoJogador.type = 'text'
    inputPosicaoJogador.name = 'posicaoJogador'
    posicaoJogador.appendChild(inputPosicaoJogador)
    posicaoJogador.appendChild(breake)

    const botao = document.createElement('button')
    botao.innerText = 'Adicionar'
    botao.value = true
    secao.append(nomeJogador, numeroCamisa, posicaoJogador, botao)
    botao.addEventListener('click', adicionarLista)

}