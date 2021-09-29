const express = require('express')

const router = express.Router()

const UsersData = require("../models/user.model")


router.get('/', async (req, res) => {
    try {

        const page = +req.query.page;
        const limit = +req.query.limit;

        const offset = (page - 1) * limit;
        const users = await UsersData.find().skip(offset).limit(limit).lean().exec()


        return res.status(200).json({ data: users })
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

module.exports = router

