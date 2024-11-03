const express = require('express')
const router = express.Router()
const booksList = require('./books')

// to get all books /books
router.get('/',(req,res)=>{
    try {
        res.status(200).json(booksList)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})

// to get book by id
router.get('/:id',(req,res)=>{
    try {
        const bookId = parseInt(req.params.id)
        const book = booksList.find(book=>book.id===bookId)
        if(!book) res.status(404).json({error:"Book not found"})
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
})



module.exports = router