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
            user = user[0]
           

            if(!user){
                return res.status(401).send('username not exisitin')
            }

            const authedUser = bcrypt.compareSync(password, user.hash)
            
            if(authedUser){
                delete user.password
                res.status(200).send('logged in yo')
            }else{
                res.status(401).send('password wrong my dude')
            }

        }catch(err){
            console.log(err)
        }



    }
}