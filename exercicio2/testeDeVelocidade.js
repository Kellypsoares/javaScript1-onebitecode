let veículo1 = window.prompt("Insira o nome do veículo1:")
let velocidadev1 = window.prompt("Insira a velocidade do veículo1")

let veículo2 = window.prompt("Insira o nome do veículo2::")
let velocidadev2 = window.prompt("Insira  a velocidade do veículo2:")


if (velocidadev1 > velocidadev2) {
  alert(veículo1 + " é mais rápido que " + veículo2)
} else if ( velocidadev2 > velocidadev1 ) {
  alert( veículo2 + " é mais rápido que " + veículo1)
} else  {
  alert("Ambos os veículos possuem a mesma velocidade")
}
