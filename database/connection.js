const mongoose = require('mongoose')

const connectDatabase = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/doko')
        console.log("Database connected successfully");
    }catch(err) {
        console.error("Sorry, couldn't connect to the database")
    }
}

module.exports = connectDatabase