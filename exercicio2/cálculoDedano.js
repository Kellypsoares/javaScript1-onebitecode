let personagem1 = window.prompt("Insira o nome do primeiro personagem:")
let poderdeAtaquep1 = window.prompt("Insira o poder de ataque do " + personagem1 + ":")
let personagem2 = window.prompt("Insira o nome do segundo personagem:")
let númeroDeVidasp2 = window.prompt( "Insira o número de vidas do " + personagem2 + ":")
let poderDeDefesap2 = window.prompt ("Insira o poder de defesa do " + personagem2 + ":")
let escudop2 = window.prompt ("O " + personagem2 + "possui escudo? ( Digite 0 para não e 1 para sim")

let danocausado = 0

if (poderdeAtaquep1 > poderDeDefesap2 && escudop2 == 0) {
  danocausado =  poderdeAtaquep1 - poderDeDefesap2;

} else if ( poderdeAtaquep1 > poderDeDefesap2 && escudop2 == 1 ) {
  danocausado = (poderdeAtaquep1 - poderDeDefesap2)/2;

} else if (poderdeAtaquep1 <= poderDeDefesap2) {
   danocausado = 0;
}

 let danofinal = númeroDeVidasp2 - danocausado 

alert( " o número de vidas final do " + personagem2 +  "é: " + danofinal)