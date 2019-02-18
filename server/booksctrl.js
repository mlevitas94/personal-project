module.exports = {
    getBooks: async (req,res) => {
        const db = req.app.get('db')

        const allBooks = await db.books.get_books()
        res.status(200).send(allBooks)
    },
    addBook: async (req,res) => {
        try{
            const db = req.app.get('db')
            const {title, purchaselink, imageurl, price, info, kprice, favsnip} = req.body
            console.log(req.body)

            if(!title || !purchaselink || !imageurl || !price || !info || !kprice || !favsnip ){
               return res.status(401).send('make sure all fields are filled')
            }
            await db.books.add_book([title, purchaselink, imageurl, price, info, favsnip, kprice ])

            return res.status(200).send(`the book, ${title}, has been added to the public page`)
        }catch(err){
            console.log(err)
            return res.status(401).send('unable to add book')
        }

    },
    deleteBook: async (req, res) => {
        
    }
}