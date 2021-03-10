const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json()) 
app.use(express.urlencoded({extended: true}))
const bodyParser = require('body-parser')
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended : true }))
app.use(bodyParser.json())

require('dotenv').config()
app.set('view engine', 'ejs')
/**
 *  Con el método connect nos conectámos a la base de datos que está alojada en la nube
 */
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster.ka1lt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() =>{ console.log("mongodb is connected")}).catch(() =>console.log("error"))
// llamamos a nuestro archivo de rutas
app.use('/', require('./routes/route'))
//  indicamos que esté a la escucha del puerto, en este caso establecido en el puerto 3000
app.listen( process.env.PORT , () => {
    console.log(`listening from port ${process.env.PORT}`);
})