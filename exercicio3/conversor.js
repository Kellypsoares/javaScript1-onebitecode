const valor = window.prompt("Qual o valor em metros a ser convertido?")
const unidade = window.prompt("Para qual unidade se deseja converter? \n (milímetro (mm),centímetro (cm),decímetro (dm),decâmetro (dam),hectômetro (hm) ou quilômetro (km))" )
const resultadoNumericoValor = parseFloat (valor)


switch (unidade) {
  case "mm" : 
    alert (resultadoNumericoValor * 1000) 
    break
  case "cm" :
    alert (resultadoNumericoValor * 100)
    break
  case "dm" :
    alert (resultadoNumericoValor * 10)
    break 
  case "dam" : 
    alert (resultadoNumericoValor * 0.1) 
    break
  case "hm" :
    alert (resultadoNumericoValor * 0.01)
    break
  case "km" :
    alert (resultadoNumericoValor * 0.001)
    break 
  default:
    alert("Opção inválida")
}