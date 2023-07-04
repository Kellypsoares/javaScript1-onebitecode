// O retorno de uma função é a saída que essa função devolve para gente

function calcularMedia (a, b) {
  const media = (a + b) / 2
}



// mesmo que se eu colocase console.log(media) não sairia, daria erro.

const resultado = calcularMedia(7 , 2)
//console.log(resultado)

//da forma acima a saída é undefinned
//pois por padrão as funções em JavaScript, quando ela não tem uma saída ela vai devolver undefined

function calcularMedia (a, b) {
  const media = (a + b) / 2
  return media 
}

//console.log (resultado)

//mais um exemplo

function criarProduto(nome, preço) {
  const produto = {
    nome, // isso é igual nome: nome
    preço, // 
    estoque: 1
  }
  return produto
}

const notebook = criarProduto("Notebook Intel Core i3", 2500)

//console.log(notebook)

//ou seja o return permite que trabalhemos com esse valores fora da função
// ai podemos criar varios produtos e armazenar cada um deles em uma variável diferente

//também podemos utilizar o retorno de uma função direto como um valor em qualuqer lugar do nosso código:

console.log(criarProduto("Notebook Intel Core i3", 2500))

//Além disso o retorno de uma função pode ser qualquer expressão, não precisa ser uma variável

/*function areaRetangular(base, altura)  {
  const area = base * altura 
  return area 
}

console.log(areaRetangular(4 , 5))
*/


// --no Js o que faremos abaixo também funcionaria

function areaRetangular(base, altura)  {
  return base * altura  
}

//console.log(areaRetangular(3 , 5))

// --ou seja, o retun não precisa ser necessáriamente uma variável, ele pode ser qualquer expressão
//--ademais o retunr pode ser também a chamada de outra função:

function areaQuadrada(lado) {
  return areaRetangular(lado, lado)
}

//console.log(areaQuadrada(9))

//-- é importate saber que uma função só pode retornar uma única vez

function ola() {
  let texto = "..."
  return texto 
  texto = "Olá, mundo"
  console.log(texto)

}

//console.log(ola())

//--aqui podemos percerber que assim que damos o retorno a função acaba imediatamente

//-- existe um caso onde teremos vários returns, um return não atrapalha o outro

function maioridade(idade) {
  if(idade >= 18) {
    return "Maior de idade"
  } else{
    return "Menor de idade"
  }
}

console.log(maioridade(29))
console.log(maioridade(13))