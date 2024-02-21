const express = require("express");
const rotaBook = require("./routers/book")
const rotaFavorito = require("./routers/favorito")
const app = express()
const cors = require("cors")

app.use(express.json()) //aceita receeber requisições json por body
app.use(cors({
    origin: "*"
}))

app.use('/books', rotaBook)
app.use('/favoritos', rotaFavorito)
const port = 8000



app.listen(port, () =>{
    console.log("escutando a porta", port)
})