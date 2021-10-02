

const express = require('express')
const StoryData = require("../models/story.model")
const FileData = require("../models/file.model")
const fs = require("fs")
// const upload = require("../utils/fileupload")
require("../utils/cloudinary.config")
const upload = require("../utils/multer")


const router = express.Router()

router.post("/", upload.single("img"), async (req, res) => {
    // console.log(req.body)
    const image = await FileData.create({
        img: req.file.path,

    });

    try {
        if (image) {
            return res.status(201).json({ error: "false", message: 'Story added successfully', data: image });
        } else {
            return res.status(500).json({ error: "true", message: 'Failed to add new story' });
        }
    }
    catch (error) {
        return res.status(400).json({
            error: "true",
            message: "Something went went wrong please try again"
        })
    }
})

module.exports = router
