let option = "0"
let queue = []
do { option = prompt("Bem vindo ao Consultório do Andeson Não Desista!\nAtualmente a fila de atendimento está assim:\n" + 
    queue + 
    "\nSelecione a opção desejada:" +
    "\n1- Novo paciente" +
    "\n2- Consultar paciente" +
    "\n3- Sair\n")

    switch (option) {
        case "1":
            let newPatient = prompt("Digite o nome do paciente a ser atendido: ")
            queue.push("\n" + queue.length + " - " + newPatient)
            alert("Paciente " + newPatient +" inserido na fila.")
            break 
            case "2":
                let patitientRemoved = queue.shift()
                // if (){
                    
                // }
                alert("Paciente " + patitientRemoved + " sendo atendido agora.")
        case "3":
        break
    }
} while (option !== "0")
    alert("Encerrando o programa")