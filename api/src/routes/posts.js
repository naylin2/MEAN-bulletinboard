const express = require('express');
const router = express.Router();
const { createPost,getAllPost,updatePost,getSinglePost,deletePost, downloadCsv} = require('../controllers/post');
router.get('/', getAllPost);
router.get('/download', downloadCsv);
router.get('/:postId', getSinglePost);
router.put('/:postId', updatePost);
router.post('/', createPost);
router.delete('/:postId', deletePost);

module.exports = router;
