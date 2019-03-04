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

            if(!title || !purchaselink || !imageurl || !price || !info || !kprice || !favsnip ){
               return res.status(401).send('make sure all fields are filled')
            }
            await db.books.add_book([title, purchaselink, imageurl, price, info, favsnip, kprice ])
            const allBooks = await db.books.get_books()

            return res.status(200).send(allBooks)
        }catch(err){
            console.log(err)
            return res.status(401).send('unable to add book')
        }

    },
    deleteBook: async (req, res) => {
        try{
            const db = req.app.get('db')
            const {id} = req.params
        
        await db.books.delete_book(id)
        const allBooks = await db.books.get_books()


        return res.status(200).send(allBooks)
    }catch(err){
        console.log(err)
        return res.status(401).send('couldnt delete for some reason')
    }

    },
    editBook: async (req, res) => {
        const {title, purchaselink, imageurl, price, info, kprice, favsnip} = req.body
        const {id} = req.params
        const db = req.app.get('db')

       
        
        if(!title || !purchaselink || !price || !info || !kprice || !favsnip ){
            return res.status(401).send('make sure all fields are filled')
        }

        if(!imageurl){
            await db.books.update_book_noimg([id, title, purchaselink, price, info, favsnip, kprice])
            const allBooks = await db.books.get_books()
            return res.status(200).send(allBooks)
        }
        
        try{
            await db.books.update_book([id, title, purchaselink, imageurl, price, info, favsnip, kprice])
            const allBooks = await db.books.get_books()
            res.status(200).send(allBooks)
        }catch(err){
            return console.log(err)
        }
    }
}