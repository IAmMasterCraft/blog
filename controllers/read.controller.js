const BlogPost = require("../models/BlogPost");

exports.readPost = async(request, response) => {
    try {
        const id = request.params.postId;
        const myBlogPost =
            (id) ?
            await BlogPost
            .findOne({ _id: id })
            .populate({
                path: "likes",
                model: "Likes",
            }) :
            await BlogPost
            .find()
            .populate({ path: "likes", })
            .sort({ dateGenerated: -1 });
        if (myBlogPost) response.status(200).json(myBlogPost);
        else response.status(404).json({
            success: false,
            message: "No blog post available",
        });
    } catch (error) {
        response.status(400).json(error);
    }
}