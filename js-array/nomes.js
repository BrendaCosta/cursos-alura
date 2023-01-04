// const nome = ["João", "Brenda", "Caio", "David", "Murilo", "Sirleide", "Maria", "Pedro", "Renata", "Camila", "Silvia", "Regina", "Rodrigo", " Bia", "Leon", "Ana", "Guilherme", "Antonio", "Carla", "Leandro"]


// const turma1 = nome.slice(0, nome.length/2)
// const turma2 = nome.slice(nome.length/2)

// console.log(nome)
// console.log(turma1)
// console.log(turma2)


// const alunos = ["João", "Brenda", "Caio", "David", "Murilo", "Sirleide"]

// alunos.splice( 1, 2, "Rodrigo")

// console.log(alunos)

// const palestra = turma1.concat(turma2)

// console.log(palestra)

// const estudantes = ["João", "Juliana", "Caio", "Ana"]
// const media = [10, 8, 7.5, 9]
// const listaDeNotassEAlunos = [estudantes , media]

// const exibeNomeNote = (estudantes) =>{
//     if (listaDeNotassEAlunos[0].includes(estudantes)){
//         let indice = listaDeNotassEAlunos[0].indexOf(estudantes)
//         return listaDeNotassEAlunos[0][indice] + ' , sua média é '+
//         listaDeNotassEAlunos[1][indice]
//     }else{
//         return "Aluno não está cadastrado"
//     }
// }
// console.log(exibeNomeNote("Juliana"))

// const lista = [100,200,300,400,500,600]

// for(let i = 0; i < lista.length; i++){
//     console.log(`O número ${lista[i]} está no indice ${i}`)
// }

// let nota = [10, 6.5,8,7.5]
// let medias = 0
//  for (let i = 0; i < nota.length; i++){
//      medias = nota[i] + medias
//  }

//  nota.forEach(function(nota){
//      medias += nota 
//  })
//  console.log(medias/nota.length)

//  const nomes = ["João", "Brenda", "Caio", "David", "Murilo", "Sirleide", "Maria", "Pedro", "Renata", "Camila", "Silvia", "Regina", "Rodrigo", " Bia", "Leon", "Ana", "Guilherme", "Antonio", "Carla", "Leandro"]

//  nomes.forEach(nome =>{
//     console.log(nome)
//  })

// let notas = [10, 6.5,8,7.5]
// const pontoExtra = notas.map(nota => nota == 10 ? nota : ++nota)

// console.log(pontoExtra)

// const alunos = ["ana Julia", "Caio vinicius", "BIA silva"]

// const padronizados = alunos.map(aluno =>{
//     console.log(aluno.toUpperCase())
 
// })

const nomes = ["João", "Juliana", "Caio", "Ana"]
const notas = [10, 8, 4.5, 4]

const reprovados = nomes.filter((aluno, indice) => notas[indice] <5 )
console.log(reprovados)


const salaJS = [7,8,9,8,10,4,5]
const salaJava = [5,6,7,7,8,5]
const salaPython = [8,4,5,6,7,9,10]

function mediaSala ( notasDaSala){
    const somaNotas = notasDaSala.reduce((acum, atual) =>
        atual + acum , 0)
      let total = somaNotas/notasDaSala.length
      return total.toFixed(2)
}

console.log(`Sala Js ${mediaSala(salaJS)}`)
console.log(`Sala Java ${mediaSala(salaJava)}`)
console.log(`Sala Python ${mediaSala(salaPython)}`)


const nota = [10,6.5,8,7]
const media = nota.reduce((acum, atual)=> atual + acum, 0 )
console.log(media/nota.length)