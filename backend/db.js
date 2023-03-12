const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/hingeme?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoURI = "mongodb://localhost:27017/hingeme"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () =>{
        console.log("connected to Mongo successfully");
    })
}

module.exports = connectToMongo;