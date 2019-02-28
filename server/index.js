require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const aws = require('aws-sdk');
const bctrl = require('./booksctrl')
const acrtl = require('./adminctrl')


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env

const app = express();
app.use(express.json());
app.use( express.static( `${__dirname}/../build` ) );

app.use(
    session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false 
}))

//books
app.get('/api/books', bctrl.getBooks)
app.post('/api/books', bctrl.addBook)
app.delete('/api/books/:id', bctrl.deleteBook)
app.put('/api/books/:id', bctrl.editBook)


//admins
app.post('/admin/login', acrtl.login)
app.post('/admin/register', acrtl.register)
app.get('/admin/getuser', acrtl.getUser)
app.get('/admin/getadmins', acrtl.getAdmins)
app.delete('/admin/deleteadmin/:id', acrtl.deleteAdmin)
app.put('/admin/editadmin/:id', acrtl.editAdmin)


//s3 image uploading
app.get('/api/signs3', (req, res) => {
    aws.config = {
      region: 'us-west-1',
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    };
  
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read',
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
  
      return res.send(returnData);
    });
  });
  const path = require('path'); // Usually moved to the start of file

  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../build/index.html'));
  });

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => console.log(`Now arriving at ${SERVER_PORT}`));
})