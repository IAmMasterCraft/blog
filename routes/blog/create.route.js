const express = require("express");
const router = express.Router();
const middleware = require("../../middlewares/auth.middleware")

const controller = require("../../controllers/blog/create.controller");

router.post("/blog-post/new", middleware.verifyToken, controller.createPost);

module.exports = router;