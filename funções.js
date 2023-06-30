
// definindo a função
function ola() {
  console.log("Olá mundo")
}

//para exercutar 
//ola()

// parâmetros de uma função 

function dobro(x) {
  alert("O dobro de " + x  + " é " + (x * 2) )

}


//dobro(15)

function dizerOla (nome = "mundo") {
  alert("Olá, " + nome + "!")
}
//nome = "mundo" para definir padrão quando não é adicionado nenhum
//dizerOla()

function soma (a, b ,c ,d, e) {
  alert("Resultado da soma é " + (a + b + c + d + e))
}

//soma(2,3,5,3,5)

function criarUsuario (nome, email, senha, tipo= "admin") {
  const usuario = {
    nome, // mesmo que nome: nome
    email: email,
    senha: senha,
    tipo: tipo 
  }
  console.log(usuario)
}

function novoUsuario (nome, tipo = "admin" , email, senha ) {
  const usuario = {  
  nome,
  email,
  senha,
  tipo
  }
  console.log(usuario)
}

criarUsuario("Kelly", "kellynha@gmail.com" , "1234" )
novoUsuario("Kelly", "kellynha@gmail.com" , "1234" ) // esse vai dar erro pois as informações não estão preenchidas da forma correta, só vai dar certo essa definição padrão se estiver no final
// ou seja sempre que tiver um parametro com definição padrão no final



//  para facaillitar a manuntenção do código e para deixarmos o código mais legivel
// quando temos uma função com vários parametros transformamos ele em um parametro só que é um objeto

function muitosParametros (nome, telefone, endereço , aniversário, email, senha) {

}
//para chamar teria que colocar : muitosparametros(..... e colocar todos os parametros)

function objetoComoParametro(usuario) {
  
  console.log(usuario)


}

const dadosUsuario = {
  nome: "1",
  telefone: "2",
  emai: "3",
  senha: "4",
  endereço: "5",
  aniversário: "6",


}

objetoComoParametro (dadosUsuario)




