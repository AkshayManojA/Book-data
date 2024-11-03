const express = require('express')
const app = express()
const path = require('path')
const booksRouter = require('./routes/booksRoutes')

app.use('/books',booksRouter)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
})


app.listen(3020,()=>{
    console.log("server started...!")
})