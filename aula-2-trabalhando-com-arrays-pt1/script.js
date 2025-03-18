
// FUNÇÃO PUSH - adiciona elementos no final do array

const saiyajins = ['Goku', 'Vegeta', 'Gohan', 'Goten']

saiyajins.push('Bardock')
saiyajins.push('Broly')
saiyajins.push('Trunks')
saiyajins.push('Pan')

console.log(saiyajins)

// -----------------------------------------------------------------------

// FUNÇÃO UNSHIFT - adiciona elementos no começo do array

const adversariosGoku = ['Jiren', 'Cell', 'Majin Boo', 'Bills']
console.log(adversariosGoku)

adversariosGoku.unshift('Freeza')
adversariosGoku.unshift('Granola')
adversariosGoku.unshift('Moro')

console.log(adversariosGoku)

// -----------------------------------------------------------------------

// FUNÇÃO POP - remove o último elemento do array

const amigosGoku = ['Kuririn', 'Senhor Kaioh', 'Whis', 'Piccolo', 'Mestre Kame']
console.log(amigosGoku)

const ultimoElemento = amigosGoku.pop()
console.log(ultimoElemento)
console.log(amigosGoku)

// -----------------------------------------------------------------------

// FUNÇÃO SHIFT - remove elementos no começo do array

const transformGoku = ['Super Saiyajin', 'Super Saiyajin 2', 'Super Saiyajin 3', 'Super Saiyajin God']
console.log(transformGoku)

const primeiroElemento = transformGoku.shift()
console.log(primeiroElemento)
console.log(transformGoku)

// -----------------------------------------------------------------------

// FUNÇÃO INCLUDES - pesquisa por um elemento dentro de um array
// FUNÇÃO INDEXOF - pesquisa o indice de um elemento dentro de um array

const tecnicasGoku = ['Kaioken', 'Teletransporte', 'Instinto Superior', 'Genki Dama']
console.log(tecnicasGoku)

const inclui = tecnicasGoku.includes('Kamehameha')
console.log(inclui)

const indice = tecnicasGoku.indexOf('Genki Dama')
console.log(indice)

// -----------------------------------------------------------------------

// FUNÇÃO SLICE - faz um 'corte' no array e armazena os valores 'cortados' em outro array

const transformVegeta = ['Super Saiyajin', 'Super Saiyajin 2', 'Super Saiyajin Blue', 'Super Saiyajin God']
console.log(transformVegeta)

const saiyajinBase = transformVegeta.slice(0, 2)
console.log(saiyajinBase)

const saiyajinGod = transformVegeta.slice(-2)
console.log(saiyajinGod)