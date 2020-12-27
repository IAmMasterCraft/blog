const BlogPost = require("../../models/BlogPost");

exports.createPost = async(request, response) => {
    try {
        //get data
        const authenticatedUser = request.user;
        const { title, image, content, tags, category } = request.body;
        //check if required exist
        if (title && content && authenticatedUser) {
            const newBlogPost = new BlogPost({
                title,
                image,
                content,
                author: authenticatedUser.fullname,
                user_id: authenticatedUser._id,
                tags,
                category,
            });
            const myBlogPost = await newBlogPost.save();
            myBlogPost.success = true;
            response.status(201).json(myBlogPost);
        }
    } catch (error) {
        response.status(500).json(error);
    }
}