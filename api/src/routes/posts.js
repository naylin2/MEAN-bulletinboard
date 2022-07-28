const express = require("express");
const router = express.Router();
const { createPost,getAllPost,updatePost,getSinglePost,deletePost} = require('../controllers/PostController');
router.get('/', getAllPost);
router.get('/:postId', getSinglePost);
router.put('/:postId', updatePost);
router.post('/', createPost);
router.delete('/:postId', deletePost);

module.exports = router;
