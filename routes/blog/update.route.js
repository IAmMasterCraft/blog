const express = require("express");
const router = express.Router();
const middleware = require("../../middlewares/auth.middleware")

const controller = require("../../controllers/blog/update.controller");

router.put("/blog-post/update", middleware.verifyToken, controller.updatePost);

module.exports = router;