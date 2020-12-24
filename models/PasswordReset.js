const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const PasswordReset = new Schema({
    user_id: {
        type: String,
        required: true,
        index: { unique: true },
    },
    reset_token: {
        type: String,
        required: true,
    },
    token_expires: {
        type: Date,
        required: true,
        default: Date.now() + 86400000,
    },
    dateGenerated: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("PasswordReset", PasswordReset);