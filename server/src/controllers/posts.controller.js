

const express = require("express");
const router = express.Router()
const fs = require("fs")
const upload = require("../utils/fileupload")

const PostsData = require("../models/post.model")

router.get("/", async function (req, res) {

    try {

        const page = +req.query.page || 1;
        const size = +req.query.limit || 10;
        const offset = (page - 1) * size;

        const post = await PostsData.find().sort({ createdAt: 'desc' }).skip(offset).limit(size).lean().exec()

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

router.post("/", upload.single("img"), async function (req, res) {

    try {
        // const files = req.files.map((file) => file.path);
        const post = await PostsData.create({
            ...req.body,
            img: req.file.path
        });
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

module.exports = router