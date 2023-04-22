let opçãoEscolhida = "5"

do {
  opçãoEscolhida = window.prompt(
    "Escolha uma das cinco opções abaixo: \n" +
    "1-Falar com um de nossos atendentes\n"+ 
    "2-Ser direcionado para o site de compras\n" +
    "3-Informação sobre a localização da sua compra \n" + 
    "4-consultar o preço de algum produto \n" +
    "5-Encerar o chamado "
  )

    switch (opçãoEscolhida) {
      case "1" :
        alert( "Você escolheu a opção " + opçãoEscolhida + " e está sendo redirecionado para um de nossos atendentes")
        break
      case "2" :
        alert( "Você escolheu a opção " + opçãoEscolhida + " e está sendo redirecionado para nosso site")
        break
      case "3" :
        alert( "Você escolheu a opção " + opçãoEscolhida + " e está sendo redirecionado para o setor de logistica")
        break
      case "4" :
        alert( "Você escolheu a opção " + opçãoEscolhida + " e está sendo redirecionado para o setor de vendas")
        break
      case "5" :
        alert("Você escolheu a opção " + opçãoEscolhida + ".")
        alert("Finalizando o atendimento")
        break
      default :
        alert( "Opção inválida")
    }

}while (opçãoEscolhida !== "5")


