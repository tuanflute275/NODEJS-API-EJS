import express from 'express';
import morgan from 'morgan';
import path from 'path'
import initWebRoute from './routes/web';
import innitApiRoute from './routes/api';
import configViewEngine from './config/viewEngine'
import exp from 'constants';
const app = express()
// su dung cong ket noi tu file .env
require('dotenv').config()
const port = process.env.PORT

// body-parse --> api
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// http logger
app.use(morgan('combined'))

// setting ejs
configViewEngine(app)

//route innit
initWebRoute(app)

// innit api 
innitApiRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})