const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().limit(5);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
