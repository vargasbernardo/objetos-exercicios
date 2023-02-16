// # Exercício 3

// Observe o objeto abaixo e, utilizando o **espalhamento** (ou **spread**), resolva os exercícios a seguir:

// ```
// const pokemon1 = {
// 	nome: "Bulbasaur",
// 	tipo: "Grama",
// 	nivel: 5
// }
// ```

// a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.

// c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`:

// ```
// nome: "Investida",
// dano: 40,
// tipo: "Normal",
// precisao: 100
// ```

// d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.

// e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.

// f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.

// g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.
// Inicio
const pokemon1 = {
    nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}


// a)
const pokemon2 = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Agua'
} 

// b)
pokemon1.ataques = []

// c)
const ataque = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}
pokemon1.ataques.push(ataque)

// d)
pokemon2.ataques = [...pokemon1.ataques]

// e)
pokemon1.ataques.push({nome: 'Folha Navalha', dano: 45, precisao: 100, tipo: 'Grama'})

// f)
pokemon2.ataques.push({nome: 'Jato de Agua', dano: 40, precisao: 100, tipo: 'Agua'})

// g)
console.log(pokemon1)
console.log(pokemon2)