let dinheiroDisponivel = window.prompt( "Qual a quantidade de dinheiro incial disponível ?")
dinheiroDisponivel = parseFloat(dinheiroDisponivel)

let escolhaDoCliente = ""

do {
  escolhaDoCliente = window.prompt( "Dinheiro disponível: " + dinheiroDisponivel + 
  "\nEscolha uma das opções abaixo:" +
  "\n1-Adicionar dinheiro" + 
  "\n2-Remover dinheiro" + 
  "\n3-Finalizar o antendimento")
  
  switch (escolhaDoCliente) {
    case "1" :
        dinheiroDisponivel += parseFloat( window.prompt( "Você escolheu a opção " + escolhaDoCliente + ". Qual valor deseja adicionar?") )
        break
    case "2" :
         dinheiroDisponivel -= window.prompt( "Você escolheu a opção " + escolhaDoCliente + ". Qual valor deseja retirar?")
        break
    case "3" :
        alert( "Você escolheu a opção " + escolhaDoCliente + " e estamos finalizando o atendimento.")
        break
    default :
        alert( "Opção inválida")
    } 

}while ( escolhaDoCliente !== "3")





