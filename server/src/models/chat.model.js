const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        },
    },
    { timestamps: true }
);

const ChatData = mongoose.model("conversation", ChatSchema);

module.exports = ChatData