const express = require("express");
const router = express.Router();
const middleware = require("../../middlewares/auth.middleware")

const controller = require("../../controllers/blog/likes.controller");

router.post("/blog-post/like/new", middleware.verifyToken, controller.newLikes);

router.delete("/blog-post/like/remove", middleware.verifyToken, controller.removeLikes);

module.exports = router;