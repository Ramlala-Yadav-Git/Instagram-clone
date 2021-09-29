const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
    trim: true,
};

const storySchema = mongoose.Schema(
    {
        img: reqString,
        userProfile: reqString,
        username: reqString,
        id: { type: mongoose.Schema.Types.ObjectId, required: true },
        view: [mongoose.Schema.Types.String],
    },
    {

        timestamps: true,
        versionKey: false,


    }
);
const StoryData = mongoose.model('story', storySchema);

module.exports = StoryData;