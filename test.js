//testando como manipular o arquivo antes de começar usa-lo

const fs = require("fs")

const dados = JSON.parse(fs.readFileSync("books.json"))
const newDado = { id: '4', nome: 'Livro 4 Teste' }

fs.writeFileSync("books.json", JSON.stringify([...dados, newDado]))

console.log(JSON.parse(fs.readFileSync("books.json")))