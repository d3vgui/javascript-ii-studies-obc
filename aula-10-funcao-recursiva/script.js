function dividir(num) {
  console.log(num)
  if (num % 2 === 0){
    dividir(num / 2)
  } else {
    return num
  }
}

// dividir(256)

function dobrar(num){
  console.log(num)
  dobrar(num * 2)
}

// dobrar(1)

function fatorial(num) {
  console.log("Número: = " + num)
  if (num === 0) { // caso base
    return 1
  } else if (num === 1) { // caso base
    return 1
  } else {
    console.log(num + " * !" + (num - 1))
    return num * fatorial(num - 1)
  }
}

console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(9))