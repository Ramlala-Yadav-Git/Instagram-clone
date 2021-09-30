
const express = require('express')
const userData = require("../models/user.model")
const StoryData = require("../models/story.model")
const fs = require("fs")
// const upload = require("../utils/fileupload")
require("../utils/cloudinary.config")
const upload = require("../utils/multer")

const router = express.Router()

router.get("/", async (req, res) => {
    const story = await StoryData.find().lean().exec();

    return res.status(200).json({ data: story })

})

router.post("/", upload.single("img"), async (req, res) => {
    const story = await StoryData.create({
        img: req.file.path,
        userProfile: req.body.userProfile,
        username: req.body.username,
        id: req.body.id,
        view: req.body.view,
    });

    try {
        if (story) {
            return res.status(201).json({ error: "false", message: 'Story added successfully', data: story });
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
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { userId } = req.body;
        const story = await StoryData.findOneAndUpdate(
            { _id: id },
            { $addToSet: { view: userId } },
            {
                new: true,
            }
        );
        res.status(200).json({ message: 'Changed viewer successfully', data: story });


    } catch (err) {
        res.status(400).json({ error: 'Sorry! something went wrong' });
    }
});

module.exports = router;