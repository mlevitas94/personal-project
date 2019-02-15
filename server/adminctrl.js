const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) =>{
        try{
            const {first_name, last_name, username, password} = req.body
            const {session} = req
            const db = req.app.get('db')

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let newUser = await db.admin.register([first_name, last_name, username, hash])
            newUser = newUser[0].admin_id //returns the registered user's id
            console.log(newUser)

            const {add, remove, edit} = req.body.privileges // boolean values
            
            await db.admin.init_privileges([newUser, add, remove, edit])

            res.status(201).send('account created')
        }catch(error){
            console.log(error)
            res.status(401).send('error')
        }
        
    },

    login: async (req,res) => {
        try{
            const {username, password} = req.body
            const db = req.app.get('db')
            const {session} = req

            let user = await db.admin.login(username)
            console.log(user)

            res.status(200).send('ayo, you logged in fam. do some admin work')
        }catch(err){
            console.log(err)
        }



    }
}