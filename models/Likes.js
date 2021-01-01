const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Like Schema
const Likes = new Schema({
    user_id: {
        type: String,
        required: true,
    },
    post_id: {
        type: String,
        required: true,
    },
    dateGenerated: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Likes", Likes);