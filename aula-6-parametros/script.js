function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
  }
  
  // dobro(5)
  // dobro(7)
  // dobro()
  
  function dizerOla(nome = mundo){
    alert("Olá, " + nome + "!")
  }
   
  // dizerOla("Guilherme")
  // dizerOla()
  
  function soma(a, b, c, d, e){
    alert("O resultado da soma é " + (a + b + c + d + e))
  }
  
  // soma(7, 6, 8, 10, 2)
  // soma(1, 2, 3, 4, 5)
  
  function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
      nome, // => mesmo que nome: nome
      email: email,
      senha: senha,
      tipo: tipo
    }
  
    console.log(usuario)
  }
  
  // criarUsuario("Guilherme", "guidev@email.com", "1234")
  // criarUsuario("guidev@email.com", "Guilherme", "1234")
  
  // function novoUsuario(nome, email, senha, tipo = "admin") { // sempre declarar os parâmetros padrões no final
  //   const usuario = {
  //     nome, // => mesmo que nome: nome
  //     email: email,
  //     senha: senha,
  //     tipo: tipo
  //   }
  //   console.log(usuario)
  // }
  // novoUsuario("Guilherme", "guidev@email.com", "1234")
  
  function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  
  }
  
  function objetoComoParametro(usuario) {
    // usuario.nome
    // usuario.email
  }
  
  muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")
  
  const dadosDoUsuario = {
    nome: "gui",
    telefone: "2134",
    email: "gui@hotmail.com",
    senha: "1234",
    endereco: "rua 1",
    aniversario: "13 de junho de 2003"
  }
  objetoComoParametro(dadosDoUsuario)
  
  console.log(dadosDoUsuario)
  
  
  
  
   
  