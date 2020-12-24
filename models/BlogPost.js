const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create User Schema
const BlogPost = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
    },
    category: {
        type: String,
    },
    dateGenerated: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
    },
});

module.exports = mongoose.model("BlogPost", BlogPost);