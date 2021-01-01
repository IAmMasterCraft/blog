const Likes = require("../../models/Likes");

exports.allLikes = async(request, response) => {
    try {
        //get data
        const authenticatedUser = request.user;
        const id = request.params.postId || false;
        //check if required exist
        if (authenticatedUser) {
            const myLikes = (id) ? await Likes.findOne({ _id: id }) : await Likes.find();
            myLikes.success = true;
            response.status(201).json(myLikes);
        }
    } catch (error) {
        response.status(500).json(error);
    }
}

exports.newLikes = async(request, response) => {
    try {
        //get data
        const authenticatedUser = request.user;
        const id = request.body.post_id;
        //check if required exist
        if (id && authenticatedUser) {
            const newLikes = new Likes({
                user_id: authenticatedUser._id,
                post_id: id,
            });
            const myLikes = await newLikes.save();
            myLikes.success = true;
            response.status(201).json(myLikes);
        }
    } catch (error) {
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
            await findOneAndDelete({
                user_id: authenticatedUser._id,
                post_id: id,
            });
            response.status(201).json({ success: true, message: `Likes removed Successfully` });
        }
    } catch (error) {
        response.status(500).json(error);
    }
}