const express = require("express");
const router = express.Router();

const controller = require("../controllers/read.controller");

router.get("/blog-post", controller.readPost);

// router.post("/forgot-password", controller.forgotPassword);

module.exports = router;