let nomesEspera = ["João" , "Claúdio" , "Ana" , "Alice" , "Kelly" , "Felipe" , "Thiago"]

let escolha = " "

do { 
  let pacientes = " "
  for (let indice = 0; indice < nomesEspera.length; indice++) {
    pacientes += (indice + 1) + "º _ " + nomesEspera[indice] + "\n"}

 escolha = window.prompt("Lista de espera:" + pacientes +
"\nEscolha a opção desejada:" +
"\n1-Adicionar novo paciente " +
"\n2-Consultar paciente" +
"\n3-Sair")

    switch (escolha) {
      case "1" :
       let novoPaciente =  window.prompt( "Qual o nome do paciente a ser adicionado?")
        nomesEspera.push(novoPaciente)
          break
      case "2" :
       const pacienteConsultado = nomesEspera.shift()
        alert(pacienteConsultado + " foi consultado(a).")
          break
      case "3" :
          alert( "Você escolheu a opção " + escolha + " e estamos finalizando o atendimento.")
          break
      default :
          alert( "Opção inválida")
    }

    }while (escolha !== "3")

 



