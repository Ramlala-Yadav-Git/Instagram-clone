const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true,
    trim: true,
};
const sample = "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"

const storySchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        userProfile: { type: String, default: sample },
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