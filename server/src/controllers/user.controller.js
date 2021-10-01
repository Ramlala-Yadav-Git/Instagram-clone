const express = require('express')

const router = express.Router()

const UsersData = require("../models/user.model")


router.get('/', async (req, res) => {
    try {


        const page = +req.query.page || 1;
        const size = +req.query.limit || 10;
        const offset = (page - 1) * size;
        const users = await UsersData.find().skip(offset).limit(size).lean().exec()
        const data = [
            ...users
        ]

        return res.status(200).json({ data: data })
    }
    catch (err) {
        res.status(400).json({ error: 'Sorry! something went wrong' });
    }
});

router.get("/:username", async (req, res) => {

    try {
        const username = req.params.username;
        let user = await UsersData.findOne({ username: username }).lean().exec();

        if (!user) {
            user = await UsersData.findOne({ _id: username }).lean().exec();
        }

        res.status(200).json({ data: user });
    }
    catch (err) {
        res.status(400).json({ error: 'Sorry! something went wrong' });
    }
});
router.patch("/", async function (req, res) {
    const id = req.body.id;
    try {
        const user = await UsersData.findById(id).lean().exec();
        if (!user) {
            return res.status(401).json({
                error: true,
                message: "Something went wrong please try again!"
            })
        }
        const { username, fullname, email, gender, bio, profilePic } = req.body
        if (username) {
            await UsersData.findOneAndUpdate({ _id: id }, { username: username },
                {
                    new: true,
                }
            );
        }
        if (fullname) {
            await UsersData.findOneAndUpdate({ _id: id }, { fullname: fullname },
                {
                    new: true,
                }
            );
        }
        if (email) {
            await UsersData.findOneAndUpdate({ _id: id }, { email: email },
                {
                    new: true,
                }
            );
        }
        if (gender) {
            await UsersData.findOneAndUpdate({ _id: id }, { gender: gender },
                {
                    new: true,
                }
            );
        }
        if (bio) {
            await UsersData.findOneAndUpdate({ _id: id }, { bio: bio },
                {
                    new: true,
                }
            );
        }
        if (profilePic) {
            await UsersData.findOneAndUpdate({ _id: id }, { profilePic: profilePic },
                {
                    new: true,
                }
            );
        }

        const newUser = await UsersData.findById(id).lean().exec();
        return res.status(201).json({
            error: false,
            message: "Data updated succesfully",
            data: newUser
        })

    }
    catch (err) {
        res.status(401).json({
            error: true,
            message: "Something went wrong please try again!"
        })
    }
})

module.exports = router

