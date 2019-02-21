const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req,res) =>{
        try{
            const {firstname, lastname, username, password, add, remove, edit} = req.body
            const {session} = req
            const db = req.app.get('db')

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let newUser = await db.admin.register([firstname, lastname, username, hash])
            newUser = newUser[0].admin_id

            
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
                delete user.hash;
                delete user.privs_id;
                delete user.user_id;
                session.user = user
                res.status(200).send(session.user)

            }else{
                res.status(401).send('password wrong my dude')
            }

        }catch(err){
            console.log(err)
        }



    },
    getUser: (req,res) => {
        const {user} = req.session

        if(user){
            res.status(200).send(user)
        }else{
            res.sendStatus(401)
        }
    },

    getAdmins: async (req,res) => {
        const db = req.app.get('db')

        const admins = await db.admin.get_admins()

        const adminsFiltered = admins.map(admin => {
            delete admin.hash;
            delete admin.privs_id;
            delete admin.user_id;
            return admin
        })

        res.status(200).send(adminsFiltered)
    },

    deleteAdmin: async (req,res) => {
        const {id} = req.params
        const db = req.app.get('db')

    
        let admin = await db.admin.get_a_admin(id)
        admin = admin[0]
        if(!admin){
            res.status(401).send('user doesnt exist')
        }
        await db.admin.delete_admin(id)

        const admins = await db.admin.get_admins()
        const adminsFiltered = admins.map(admin => {
            delete admin.hash;
            delete admin.privs_id;
            delete admin.user_id;
            return admin
        })

        res.status(200).send(adminsFiltered)
    },
    editAdmin: async (req,res) => {
        const {add,remove,edit} = req.body
        const {id} = req.params
        const db = req.app.get('db')
        console.log(add,remove,edit)
        

        let admin = await db.admin.get_a_admin(id)
        admin = admin[0]

        if(!admin){
            return res.status(401).send('user not existing')
        }

        try{
            await db.admin.edit_admin(admin.admin_id, add, remove, edit)
        }catch(err){
            return res.status(401).send('error')
        }
        let admins = await db.admin.get_admins()
        admins = admins.map(admin => {
            delete admin.hash;
            delete admin.privs_id;
            delete admin.user_id;
            return admin
        })
        res.status(200).send(admins)
    }
}