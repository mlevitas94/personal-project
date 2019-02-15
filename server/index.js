require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const bctrl = require('./booksctrl')
const acrtl = require('./adminctrl')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express();
app.use(express.json());

app.use(
    session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false 
}))

//books
app.get('/api/books', bctrl.getBooks)


//admins
app.post('/admin/login', acrtl.login)
app.post('/admin/register', acrtl.register)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`Now arriving at ${SERVER_PORT}`));
})