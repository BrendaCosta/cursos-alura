// let notas = [10, 6.5, 8, 7.5]
// let pontos = 0
// let media = 0
// notas.forEach(function (nota){
//     pontos = nota + pontos
   
// })
// media = pontos / notas.length
// console.log(media)

// let media = 0;
// let ponto = 0;
// let notas = [10, 6.5, 8]
// notas.push(7)
// notas.forEach(function (nota){
//     ponto = ((nota + ponto))
// })
// console.log(ponto / notas.length)

let pontos = 0
let notas = [10, 6.5, 8, 5.5, 10]
notas.pop()
notas.forEach(function (nota){
    pontos = nota + pontos

})
console.log(notas)
console.log(pontos / notas.length)
