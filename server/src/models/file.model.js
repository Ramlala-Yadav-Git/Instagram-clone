const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
    },
    {

        timestamps: true,
        versionKey: false,


    }
);
const FileData = mongoose.model('file', fileSchema);

module.exports = FileData;