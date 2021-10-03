

const express = require("express");
const router = express.Router()
const fs = require("fs")
require("../utils/cloudinary.config")
const upload = require("../utils/multer")
const UsersData = require("../models/user.model")

const PostsData = require("../models/post.model")

router.get("/", async function (req, res) {

    try {

        const page = +req.query.page || 1;
        const size = +req.query.limit || 10;
        const offset = (page - 1) * size;

        const post = await PostsData.find().sort({ createdAt: 'desc' }).skip(offset).limit(size).populate("userId")

            .populate({
                path: "comments",
                populate: {
                    path: 'userId',
                    model: 'user'
                }
            }).lean().exec()

        return res.status(200).json({
            error: "false",
            data: post
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "true",
            message: "Something went wrong"
        })
    }
})


router.get("/:id", async function (req, res) {
    try {
        const post = await PostsData.findOne({ _id: req.params.id }).lean().exec()
        return res.status(200).json({
            error: "false",
            data: post
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "true",
            message: "Something went wrong please try again"
        })
    }
})


// get all post of an user

router.get("/user/:id", async function (req, res) {
    // id => userId
    try {
        const user = await UsersData.findById(req.params.id).lean().exec()
        if (!user) {
            return res.status(401).json({
                error: true,
                message: "user dosen't exist in database"
            })
        }
        const userId = req.params.id;
        const posts = await PostsData.find({ userId: userId })
            .sort({ createdAt: 'desc' })
            .lean()
            .exec();

        return res.status(200).json({
            error: "false",
            data: posts,

        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: true,

            message: 'something went wrong'
        });
    }

})

///upload.single("img"),  for uploading pic
router.post("/", async function (req, res) {
    const { img, userId, caption } = req.body;

    if (!img || !userId || !caption) {
        return res.status(422).json({

            error: 'true',
            message: 'Please fill all details properly'
        });
    }

    try {
        const isUser = await UsersData.findOne({ _id: userId });
        if (!isUser) {
            return res.status(422).json({
                error: "true",
                message: "User Dosen't exists"
            })
        }
        const post = await PostsData.create(req.body);


        return res.status(201).json({
            error: "false",
            data: post
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            error: true,
            message: "Something went wrong please try again"
        })
    }
})



// patch request for like and post

router.patch("/likepost/:id", async function (req, res) {
    const { userId } = req.body;

    // ==> post id
    const id = req.params.id;



    try {
        const isUserExist = await UsersData.findById(userId).lean().exec();


        const isPostExist = await PostsData.findById(id).lean().exec();


        if (!userId) {
            return res.status(400).json({
                error: true,
                message: 'Sorry! Invalid syntax'
            });
        } else if (!isUserExist) {
            return res.status(400).json({
                error: true,
                message: "This user dosen't exists"
            });
        } else if (!isPostExist) {
            return res.status(400).json({
                error: true,
                message: "This post doen't exists"
            });
        }


        //updating post
        const post = await PostsData.findOneAndUpdate({ _id: id }, { $addToSet: { likes: userId } },
            {
                new: true,
            }
        );

        // const postByUserId = post.userId;
        // const likeBy = await UsersData.findOne({ _id: userId }).lean().exec();

        // if (userId.toString() === postByUserId.toString()) {
        //     return res.status(200).json({
        //         error: false,
        //         message: 'Like placed by yourself successfully',
        //         data: post,
        //     });
        // }

        // await UsersData.findOneAndUpdate(
        //     { _id: postByUserId },
        //     {
        //         $addToSet: {
        //             notifications: {
        //                 notification: `${likedBy.username} liked your post`,
        //                 fromUserSrc: isUserExist.profilePic,
        //                 postSrc: post.src,
        //                 timestamp: Date.now(),
        //             },
        //         },
        //     },
        //     {
        //         new: true,
        //     }
        // );

        // await UsersData.findByIdAndUpdate(postByUserId, {
        //     isNewNotification: true,
        // });

        res.status(200).json({ message: 'Liked post successfully', data: post });



    }
    catch (err) {
        return res.status(400).json({
            error: true,
            message: "Something went wrong please try again"
        });
        console.log(err);
    }


})



// patch request to add a comment


router.post("/addcomment/:id", async function (req, res) {
    try {
        // console.log(req.body)
        const id = req.params.id;
        const body = req.body;
        const { userId, comment } = body;


        const isUserExist = await UsersData.findById(userId).lean().exec();

        const isPostExist = await PostsData.findById(id).lean().exec();

        if (!userId || !comment) {
            return res.status(400).json({ error: 'Sorry! Invalid syntax' });
        } else if (!isUserExist) {
            return res.status(400).json({ error: 'Sorry! This user does not exist' });
        } else if (!isPostExist) {
            return res.status(400).json({ error: 'Sorry! This post does not exist' });
        }

        const post = await PostsData.findOneAndUpdate(
            { _id: id },
            { $addToSet: { comments: { ...body, commentTime: Date.now() } } },
            {
                new: true,
            }
        ).populate("userId").lean().exec();

        // notification part
        // const postByUserId = post.userId;

        // const commentedBy = await UsersData.findOne(
        //     { _id: userId },
        //     { password: 0, tokens: 0 }
        // ).populate("userId")
        //     .lean()
        //     .exec();

        // if (userId.toString() === postByUserId.toString()) {
        //     return res.status(200).json({
        //         message: 'Comment placed by yourself successfully',
        //         data: post,
        //     });
        // }


        // await UsersData.findOneAndUpdate(
        //     { _id: postByUserId },
        //     {
        //         $addToSet: {
        //             notifications: {
        //                 notification: `${commentedBy.username} commented on your post`,
        //                 fromUserSrc: isUserExist.profilePic,
        //                 postSrc: post.src,
        //                 timestamp: Date.now(),
        //             },
        //         },
        //     },
        //     {
        //         new: true,
        //     }
        // ).populate("userId").lean().exec();

        // updating isNewNotification
        // await UsersData.findByIdAndUpdate(postByUserId, {
        //     isNewNotification: true,
        // });

        return res.status(200).json({
            error: false,
            message: 'Comment added successfully',
            data: post
        });
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({
            error: true,
            message: 'something went wrong'
        });
    }
})

module.exports = router