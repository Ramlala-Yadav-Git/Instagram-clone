
const mongoose = require("mongoose")

const connect = () => {

    return mongoose.connect("mongodb://127.0.0.1:27017/instagram", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
}

module.exports = connect