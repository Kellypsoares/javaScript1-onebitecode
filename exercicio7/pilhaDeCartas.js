let baralho = []

let escolha = " "

do { 
  
 escolha = window.prompt("Cartas:" + baralho.length +
"\nEscolha a opção desejada:" +
"\n1-Adicionar uma carta " +
"\n2-Puxar uma carta" +
"\n3-Sair")

    switch (escolha) {
      case "1" :
       let cartaAdicionada =  window.prompt( "Qual a carta deseja adicionar?")
        baralho.unshift(cartaAdicionada)
          break
      case "2" :
       const cartaRetirada = baralho.shift()
       if (!cartaRetirada) {
        alert("Não há nenhuma carta no baralho")
       } else {
        alert(cartaRetirada + " foi a carta retirada.")
       }
          break
      case "3" :
          alert( "Você escolheu a opção " + escolha + " e estamos finalizando.")
          break
      default :
          alert( "Opção inválida")
    }

    }while (escolha !== "3")
