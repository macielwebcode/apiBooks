const { Router } = require("express")
const { getBooks, getBookId, insertBook, editBook, deleteBook } = require("../controllers/book")

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBookId)

router.post('/', insertBook)

router.patch('/:id', editBook)

router.delete('/:id', deleteBook)

module.exports = router