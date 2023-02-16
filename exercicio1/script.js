// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.

const sacolao = []
const obj1 = {
    nome: 'Banana',
    preco: 6,
    disponibilidade: true
}
const obj2 = {
    nome: 'Caqui',
    preco: 8,
    disponibilidade: false
}
const obj3 = {
    nome: 'Uva',
    preco: 10,
    disponibilidade: true
}
sacolao.push(obj1)
sacolao.push(obj2)
sacolao.push(obj3)

console.log(sacolao)
console.log(sacolao.length)