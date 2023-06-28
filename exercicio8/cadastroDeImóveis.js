let imoveis = [ ]

let escolha = " "

do { 
  
 escolha = window.prompt(" Total imóveis cadastrados:" + imoveis.length +
"\nEscolha a opção desejada:" +
"\n1-Salvar um novo imóveis" +
"\n2-Mostrar todos imóveis salvos" +
"\n3-Sair")

    switch (escolha) {
      case "1" :
       let imovel = {}

       imovel.proprietario = window.prompt("Informe o nome do proprietário do imóvel:")
       imovel.quartos = window.prompt( "Informe o nome número de quartos do imóvel:")
       imovel.banheiros = window.prompt ("Quantos banheiros possuem o imóvel?")
       imovel.garagem = window.prompt ("O banhheiro possui garagem ? (Sim/Não)")

       const confirmação = confirm (
        " salvar este imóvel ?\n" +
        "\nPropietário: " + imovel.proprietario + 
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui garagem? "+ imovel.garagem 
       )
        
       if (confirmação) {
        imoveis.push (imovel)
       }

       break
         
      case "2" :
        for (let i =0; i< imoveis.length; i ++) {
            alert (
                "Imóvel " + (i + 1) +
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui garagem? " + imoveis[i].garagem 

            )
           
        }
        break
      case "3" :
          alert( "Você escolheu a opção " + escolha + " e estamos finalizando.")
          break1
      default :
          alert( "Opção inválida")
    }

    }while (escolha !== "3")
