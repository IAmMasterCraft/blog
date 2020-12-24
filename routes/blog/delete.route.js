const express = require("express");
const router = express.Router();
const middleware = require("../../middlewares/auth.middleware")

const controller = require("../../controllers/blog/delete.controller");

router.delete("/blog-post/delete", middleware.verifyToken, controller.deletePost);

module.exports = router;