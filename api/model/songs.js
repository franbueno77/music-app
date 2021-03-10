const mongoose = require('mongoose')
// instancia de mongoose donde se define el modelo con los datos de la base de datos, se exporta como un modulo
module.exports = mongoose.model('songs', new mongoose.Schema({
    group : String,
    title: String,
    genre : String,
    fileName : String
}))