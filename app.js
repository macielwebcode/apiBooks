const express = require("express");
const rotaBook = require("./routers/book")
const app = express()
app.use(express.json()) //aceita receeber requisições json por body

app.use('/books', rotaBook)
const port = 8000



app.listen(port, () =>{
    console.log("escutando a porta", port)
})