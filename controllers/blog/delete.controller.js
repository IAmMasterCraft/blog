const BlogPost = require("../../models/BlogPost");

exports.deletePost = async(request, response) => {
    try {
        //get data
        const id = request.body.id;
        //check if required exist
        if (id) {
            await BlogPost.findByIdAndDelete(id);
            response.status(201).json({ success: true, message: `Blog post deleted Successfully` });
        }
    } catch (error) {
        response.status(500).json(error);
    }
}