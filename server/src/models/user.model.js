const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const reqString = {
    type: String,
    required: true,
    trim: true,
};

const usersSchema = new mongoose.Schema(
    {
        username: reqString,
        fullname: reqString,
        email: reqString,
        gender: { type: String, default: null },
        bio: { type: String, default: null },
        password: reqString,
        profilePic: { type: String, default: null },
        followers: [mongoose.Schema.Types.ObjectId],
        following: [mongoose.Schema.Types.ObjectId],
        notifications: [
            {
                notification: reqString,
                fromUserSrc: reqString,
                postSrc: reqString,
                timestamp: reqString,
            },
        ],
        savedPosts: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true },
        ],
        tagedPosts: [
            { type: mongoose.Schema.Types.ObjectId, ref: 'post', required: true },
        ],
        isNewNotification: { type: Boolean, default: false },
        isPrivateAccount: { type: Boolean, default: false },
        tokens: [
            {
                token: reqString,
            },
        ],
    },
    {
        versionKey: false,
        timestamps: true,

    }
);

// hashing the password
usersSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});

// generating auth token
usersSchema.methods.generateAuthToken = async function () {
    try {
        // jwt.sign(payload, secretOrPrivateKey,[optional,callback])
        const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};

// collection creation
const UsersData = mongoose.model('user', usersSchema);

module.exports = UsersData;