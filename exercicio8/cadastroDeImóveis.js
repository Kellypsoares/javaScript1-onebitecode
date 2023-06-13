let imoveis = [
    ["João", "3 quartos" ,"2 banheiros", "Sem garagem"] , [] , [] ]

let escolha = " "

do { 
  
 escolha = window.prompt("Imóveis cadastrados:" + imoveis.length +
"\nEscolha a opção desejada:" +
"\n1-Salvar um novo imóveis" +
"\n2-Mostrar todos imóveis salvos" +
"\n3-Sair")

    switch (escolha) {
      case "1" :
       let imovelProprietario =  window.prompt( "Qual o nome do proprietário?")
        baralho.unshift(imovelProprietario)
    
        let imovelNumQuartos =  window.prompt( "Qual a quantidade de quartos?")
        baralho.unshift(imovelNumQuartos)

        let imovelNumBanheiros =  window.prompt( "Qual a quantidade de banheiros?")
        baralho.unshift(imovelNumBanheiros)

        let imovelGaragem =  window.prompt( "O nome imóvel possui garagem?")
        baralho.unshift(imovelGaragem)
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
