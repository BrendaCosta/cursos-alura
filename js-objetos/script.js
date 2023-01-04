const cliente = {
    nome: "Brenda",
    idade: 25,
    cpf: "123456789",
    email: "brenda@email.com"
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} meu cpf é ${cliente.cpf.substring(0,3)}`)

const chaves = ["nome", "idade","cpf","email"]

chaves.forEach(function (item) {
    console.log(cliente[item])
})
