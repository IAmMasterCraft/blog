const BlogPost = require("../../models/BlogPost");

exports.newLikes = async(request, response) => {
    try {
        //get data
        const authenticatedUser = request.user;
        const id = request.body.post_id;
        //check if required exist
        if (id && authenticatedUser) {
            const myLikes = await BlogPost.updateOne({ _id: id }, {
                $addToSet: {
                    likes: {
                        id: authenticatedUser._id,
                        fullname: authenticatedUser.fullname,
                    },
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
            const myLikes = await BlogPost.updateOne({ _id: id }, {
                $pull: {
                    likes: {
                        id: authenticatedUser._id,
                        fullname: authenticatedUser.fullname,
                    },
                },
            });
            myLikes.success = true;
            response.status(201).json(myLikes);
        }
    } catch (error) {
        response.status(500).json(error);
    }
}