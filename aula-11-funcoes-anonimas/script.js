function somar(a, b) {
  return a + b
}

const operacao = somar
console.log(operacao(4, 5))

olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}