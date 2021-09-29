const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true,
    trim: true,
};

const postsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        caption: { type: String, trim: true, required: true },
        img: { type: String, required: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId }],
        comments: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'user',
                    required: true,
                },
                comment: reqString,
                commentTime: reqString,
                likes: [{ type: mongoose.Schema.Types.ObjectId }],
            },
        ],
        tagUser: [{ type: mongoose.Schema.Types.ObjectId }],
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'tags',
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false

    }
);

const PostsData = mongoose.model("post", postsSchema);

module.exports = PostsData;