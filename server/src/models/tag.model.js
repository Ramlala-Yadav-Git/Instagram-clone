const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema(
    {
        tagName: {
            type: String,
            required: true,
            trim: true,
        },
        postIds: [{ type: mongoose.Schema.Types.ObjectId }],
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const TagData = mongoose.model('tag', tagSchema);

module.exports = TagData;