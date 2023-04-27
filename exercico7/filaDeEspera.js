let nomesEspera = ["João" , "Claúdio" , "Ana" , "Alice" , "Kelly" , "Felipe" , "Thiago"]

let lista = " "

do { 
  for (let indice = 0; indice < nomesEspera.length; indice++) {
    const elemento = nomesEspera[indice]
    lista += "\n" + indice + "º" + elemento}

 escolha = window.prompt("Lista de espera:" + lista +
"\nEscolha a opção desejada:" +
"\n1-Adicionar novo paciente " +
"\n2-Consultar paciente" +
"\n3-Sair")

    switch (escolha) {
      case "1" :
       let paciente =  window.prompt( "Qual o nome do paciente a ser adicionado?")
        lista = nomesEspera.push(paciente)
          break
      case "2" :
        lista = nomesEspera.shift()
        alert(lista)
          break
      case "3" :
          alert( "Você escolheu a opção " + escolha + " e estamos finalizando o atendimento.")
          break
      default :
          alert( "Opção inválida")
    }

    }while (escolha !== "3")

 



