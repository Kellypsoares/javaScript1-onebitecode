const personagem1 = window.prompt("Insira o nome do primeiro personagem:")
const poderdeAtaquep1 = window.prompt("Insira o poder de ataque do " + personagem1 + ":")

const personagem2 = window.prompt("Insira o nome do segundo personagem:")
let númeroDeVidasp2 = window.prompt( "Insira o número de vidas do " + personagem2 + ":")
const poderDeDefesap2 = window.prompt ("Insira o poder de defesa do " + personagem2 + ":")
let escudop2 = window.prompt ("O " + personagem2 + "possui escudo? ( Digite 0 para não e 1 para sim)")

let danoCausado = 0

if (poderdeAtaquep1 > poderDeDefesap2 && escudop2 == 0) {
  danoCausado =  poderdeAtaquep1 - poderDeDefesap2;
s
} else if ( poderdeAtaquep1 > poderDeDefesap2 && escudop2 == 1 ) {
  danoCausado = (poderdeAtaquep1 - poderDeDefesap2) / 2;

} 

númeroDeVidasp2 -= danoCausado 

alert( personagem1 + " causou " + danoCausado + " pontos de dano em " + personagem2)

alert (
  personagem1 + "\n Poder de ataque: " + poderdeAtaquep1 + "\n\n" + 
  personagem2 + "\n Pontos de vida: " + númeroDeVidasp2 +
  "\n Poder de defesa: " + poderDeDefesap2 + "\n Possui escudo: " + escudop2 
)