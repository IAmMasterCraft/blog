const BlogPost = require("../models/BlogPost");

exports.readPost = async(request, response) => {
    try {
        const id = request.body.id;
        const myBlogPost = (id) ? await BlogPost.find({ _id: id }) : await BlogPost.find();
        if (myBlogPost) response.status(200).json(myBlogPost);
        else response.status(404).json({
            success: false,
            message: "No blog post available",
        });
    } catch (error) {
        response.status(400).json(error);
    }
}