const express = require('express')

const router = express.Router()

const PostsData = require("../models/post.model")
const UsersData = require("../models/user.model")


router.get('/', async (req, res) => {
    try {


        const page = +req.query.page || 1;
        const size = +req.query.limit || 10;
        const offset = (page - 1) * size;
        const users = await UsersData.find().skip(offset).limit(size).populate({
            path: "savedPosts",
            model: "post"
        }).lean().exec()
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
            user = await UsersData.findOne({ _id: username }).populate({
                path: "savedPosts",
                model: "post"
            })

                .lean().exec();
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
        const { username, fullname, email, gender, bio, profilePic, number } = req.body
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
        if (number) {
            await UsersData.findOneAndUpdate({ _id: id }, { number: number },
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

router.patch("/save", async function (req, res) {
    const id = req.body.id;
    const userId = req.body.userId._id;
    try {
        const post = await PostsData.findById(id).lean().exec();
        // console.log(post)
        if (!post) {
            return res.status(401).json({
                error: true,
                message: "Something went wrong please try again!"
            })
        }
        const user = await UsersData.findById(userId).lean().exec();
        if (!user) {
            return res.status(401).json({
                error: true,
                message: "User Not found!"
            })
        }

        await UsersData.findOneAndUpdate({ _id: userId }, { savedPosts: [...user.savedPosts, post] },
            {
                new: true,
            }
        );



        const newUser = await UsersData.findById(userId).populate({
            path: "savedPosts",
            model: "post"
        }).lean().exec();
        return res.status(201).json({
            error: false,
            message: "Data Saved succesfully",
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

