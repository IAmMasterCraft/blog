const BlogPost = require("../../models/BlogPost");

exports.newLikes = async(request, response) => {
    try {
        //get data
        const authenticatedUser = request.user;
        const id = request.body.post_id;
        //check if required exist
        if (id && authenticatedUser) {
            const myLikes = await BlogPost.update({ _id: id }, {
                $addToSet: {
                    likes: authenticatedUser._id,
                },
            });
            myLikes.success = true;
            response.status(201).json(myLikes);
        }
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
}

exports.removeLikes = async(request, response) => {
    try {
        //get data
        const authenticatedUser = request.user;
        const id = request.body.post_id;
        //check if required exist
        if (id && authenticatedUser) {
            const myLikes = await BlogPost.update({ _id: id }, {
                $pull: {
                    likes: authenticatedUser._id,
                },
            });
            myLikes.success = true;
            response.status(201).json(myLikes);
        }
    } catch (error) {
        response.status(500).json(error);
    }
}