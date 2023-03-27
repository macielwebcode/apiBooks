const fs = require("fs")

function getAllBooks(){
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookPerId(id){
    const books =  JSON.parse(fs.readFileSync("books.json"))

    const bookFiltrado = books.filter( itemlivro => itemlivro.id === id)[0]

    return bookFiltrado;
}

function postBook(livroNovo){
    const books =  JSON.parse(fs.readFileSync("books.json"))

    const newBooksList = [ ...books, livroNovo ]

    fs.writeFileSync("books.json", JSON.stringify(newBooksList))

}

function toEditBook(paramsModificacoes, id){
    let booksAtuais =  JSON.parse(fs.readFileSync("books.json"))

    const indiceModificado = booksAtuais.findIndex(itemlivro => itemlivro.id === id)

    const contentChange = { ...booksAtuais[indiceModificado], ...paramsModificacoes }

    booksAtuais[indiceModificado] = contentChange

    fs.writeFileSync("books.json", JSON.stringify(booksAtuais))


}

function toDeleteBook(id){
    const books =  JSON.parse(fs.readFileSync("books.json"))

    const booksFilters = books.filter( itemlivro => itemlivro.id !== id)
    //aqui a lista é reescrita excluindo o id que chega por parametro na function toDeleteBook
    fs.writeFileSync("books.json", JSON.stringify(booksFilters))
}

module.exports = {
    getAllBooks,
    getBookPerId,
    postBook,
    toEditBook,
    toDeleteBook
}