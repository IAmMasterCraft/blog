const BlogPost = require("../../models/BlogPost");

exports.updatePost = async(request, response) => {
    try {
        //get data
        const authenticatedUser = request.user;
        const { id, title, image, content, tags, category } = request.body;
        //check if required exist
        if (id && title && content && authenticatedUser) {
            const blogPostUpdate = {
                title,
                image,
                content,
                author: authenticatedUser.fullname,
                tags,
                category,
                dateUpdated: Date.now(),
            };
            const myBlogPost = await BlogPost.findByIdAndUpdate(id, blogPostUpdate, { new: true });
            myBlogPost.success = true;
            response.status(201).json(myBlogPost);
        }
    } catch (error) {
        response.status(500).json(error);
    }
}