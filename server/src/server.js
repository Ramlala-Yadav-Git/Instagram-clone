

const express = require('express');
const connect = require('./configs/db');
const cors = require('cors')
require('dotenv').config()


const userController = require("./controllers/user.controller")
const loginController = require("./controllers/login.controller")
const registerController = require("./controllers/register.controller")
const storyController = require("./controllers/story.controller")
const postsController = require("./controllers/posts.controller")
const fileController = require("./controllers/fileUploader")
const app = express();

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use('/login', loginController)
app.use('/register', registerController)
app.use("/users", userController)
app.use("/story", storyController)
app.use("/posts", postsController)
app.use("/file", fileController)



const start = async () => {
    await connect()
    app.listen(process.env.SERVER_PORT, () => {
        console.log(process.env.SERVER_PORT);
        console.log("Hurray!! listening to port no ", process.env.SERVER_PORT);
    })
}

module.exports = start