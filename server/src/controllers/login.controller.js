

const express = require("express")
const router = express.Router();

const UserData = require("../models/user.model")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
router.get('/', (req, res) => {
    return res.status(200).json({ data: "hello loginpage" })

})
router.post('/', async (req, res) => {
    const { username, password } = req.body;

    const user = await UserData.findOne({ username: username })
    if (!user) {
        return res.status(400).json({
            error: "true",
            message: "User not found"
        })
    }
    else {
        const isPassMatch = await bcrypt.compare(password, user.password)
        const token = await user.generateAuthToken();
        res.cookie('instajwtoken', token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true,
        });
        if (!isPassMatch) {
            res.status(400).json({
                error: "true",
                message: "You have entered wrong password"
            });

        }
        else {

            res.status(200).json({ message: 'User logged in successsfully', data: user, token });
        }
    }
})
module.exports = router;