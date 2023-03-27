
const { getAllBooks, getBookPerId, postBook, toEditBook, toDeleteBook } = require("../services/book")

function getBooks(req, res){
    try {
        const livros = getAllBooks()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBookId(req, res){
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getBookPerId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("ID Não é um Número e não é Válido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function insertBook(req, res){
    try {
        const newBook = req.body
        if(req.body.nome){
            postBook(newBook)
            res.status(201)
            res.send("Book Inserido com Sucesso!!")
        }else{
            res.status(422)
            res.send("O Campo nome é obrigatório")
        }
       
    } catch (error) {
        res.status(500)
        res.sendo(error.message)
    }
}

function editBook(req, res){

    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            toEditBook(body, id)
            res.send("Item modificado com sucesso")
        }else{
            res.status(422)
            res.send("ID Não é um Número e não é Válido")
        }
      

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res){
    try {

        const id = req.params.id

        if (id && Number(id)){
            toDeleteBook(id)
            res.send("Item excluido com sucesso")
        }else{
            res.status(422)
            res.send("ID Não é um Número e não é Válido")
        }

      
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBookId,
    insertBook,
    editBook,
    deleteBook
}