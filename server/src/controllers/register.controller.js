
const express = require('express');

const UserData = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const router = express.Router();
/// Registration of user
router.get('/', (req, res) => {
    return res.status(200).json({ data: "hello register page" })

})
router.post('/', async (req, res) => {
    const { username, fullname, email, password } = req.body;
    console.log(username)

    if (!username || !fullname || !email || !password) {
        return res.status(422).json({ error: "true", message: "Please fill details properly" })
    }

    try {
        const isUser = await UserData.findOne({ username: username })
        const isEmail = await UserData.findOne({ email: email })
        // console.log(isUser)
        if (isUser) {
            return res.status(422).json({
                error: "true",
                message: "Username already exists please try with another one"
            })
        }
        if (isEmail) {
            return res.status(422).json({
                error: "true",
                message: "Email already exists please login"
            })
        }
        const newUser = await UserData.create(req.body)
        if (newUser) {
            res.status(201).json({ error: "false", message: 'User registered successfully' });
        } else {
            res.status(500).json({ error: 'true', message: "Sometthing went wrong plase try again" });
        }
    }
    catch (err) {
        return res.status(500).json({ error: "true", meassage: 'Sorry! something went wrong' });
    }
})

module.exports = router;