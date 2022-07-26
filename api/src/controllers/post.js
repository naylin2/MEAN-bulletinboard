const Post = require('../models/Post');

//get all post
async function getAllPost(req,res){
  try{
    const posts = await Post.find().limit(5);
    res.json(posts)
  }catch(err){
    res.json({message:err});
  }
}

// create new post
async function createPost(req, res){
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    created_user_id: req.body.created_user_id
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  }
  catch(err) {
    res.json({message: err});
  }
};
//find post
// async function findPost(req,res){
//   try{
//     let condition = req.params.condition;
//     const posts = await Post.find({$or:[{title: condition}, {description:condition}]});
//     res.json({ data: posts, status: 1 });
//   }catch(err){
//     res.json({message:err});
//   }
// }
//get single post
async function getSinglePost(req,res){
  try{
    const postId = req.params.postId;
    const post = await Post.findById({_id: postId});
    res.json(post)
  }catch(err){
    res.json({message:err});
  }
}
//update post
async function updatePost(req,res){
  try{
    const postId = req.params.postId;
    const updatedPost = await Post.updateOne({_id: postId} , {$set: {title: req.body.title}});
    res.json(updatedPost)
  }catch(err){
    res.json({message:err});
  }
}

//delete post
async function deletePost(req,res) {
  try{
    const postId = req.params.postId;
    const deletedPost = await Post.remove({_id: postId});
    res.json(deletedPost)
  }catch(err){
    res.json({message:err});
  }
}

module.exports = {getAllPost,updatePost,createPost,getSinglePost,deletePost}
