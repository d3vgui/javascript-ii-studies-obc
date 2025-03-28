const personagens = [
  { nome: "goku", raca: 'saiyajin', idade: 45, nivelPoder: 900},
  { nome: "vegeta", raca: 'saiyajin', idade: 41, nivelPoder: 800},
  { nome: "goten", raca: 'saiyajin', idade: 8, nivelPoder: 400},
  { nome: "piccolo", raca: 'namekuseijin', idade: 50, nivelPoder: 500},
  { nome: "gohan", raca: 'saiyajin', idade: 20, nivelPoder: 600},
  { nome: "yamcha", raca: 'humano', idade: 31, nivelPoder: 150},
  { nome: "kuririn", raca: 'humano', idade: 34, nivelPoder: 250},
]

// -----------------------------------------------------------------------

// MAP

const nomes = personagens.map(function (personagem){
  return personagem.nome
})

console.log(nomes)

// -----------------------------------------------------------------------

// FILTER

const saiyajins = personagens.filter(function (personagem){
    return personagem.raca === 'saiyajin'
})

console.log(saiyajins)

// -----------------------------------------------------------------------

// REDUCE

const nivelTotal = personagens.reduce(function(acumulador, personagem){
  return acumulador + personagem.nivelPoder
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function(acumulador, personagem){
  if(acumulador[personagem.raca]){
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }

  return acumulador

},{})

console.log(racas)

// -----------------------------------------------------------------------

// SORT

const nivelOrdenado = personagens.slice().sort(function (a, b){
  return b.nivelPoder - a.nivelPoder
})

console.log(nivelOrdenado)

