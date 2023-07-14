const mongoose = require('mongoose')

const connect = async () =>{
    mongoose.connect('mongodb://localhost:27017?directConnection=true') 
}

module.exports = connect;