require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const bctrl = require('./booksctrl')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express();


app.get('/api/books', bctrl.getBooks)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`Now arriving at ${SERVER_PORT}`));
})