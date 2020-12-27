const express = require("express");
const router = express.Router();

const controller = require("../controllers/read.controller");

router.get("/blog-post", controller.readPost);

router.get("/blog-post/:postId", controller.readPost);

module.exports = router;