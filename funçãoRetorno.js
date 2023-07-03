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

console.log (resultado)

//mais um exemplo

function criarProduto(nome, preço) {
  const produto = {
    nome, // isso é igual nome: nome
    preço // 
  }
}