module.exports = {
    getBooks: async (req,res) => {
        const db = req.app.get('db')

        const allBooks = await db.get_books()
        res.status(200).send(allBooks)
    }
}