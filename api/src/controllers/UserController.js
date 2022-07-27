const mongoose = require("mongoose");
const User = require("../models/User");

function createUser(req, res){
  var name = req.body.name
  var mail = req.body.mail
  var dob = req.body.dob
  const user = new User({
    name: name,
    mail: mail,
    dob: dob
   });
  user.save(function(err, user){

    if(err){
      res.send({status: 500, message: "Unable to add user!"});
    }
    else {
      res.send({status: 200, message: "Successful!", userDetail: user});
    }

  });
};

// Get all causes
async function getAllUser(req,res){
  try{
    const users = await User.find().limit(5);
    res.json(users)
  }catch(err){
    res.json({message:err});
  }
}

// function getAllUser(req, res, next) {

//   User.find(function(err, userListResponse){

//     if(err){
//       res.send({status: 500, message: "Unable to find users!"});
//     }
//     else {
//       const length = userListResponse.length;
//       res.send({status: 200, recordCount: length, results: userListResponse});
//     }

//   });

// }

/* GET user detail. */
async function getUser(req,res){
  try{
    const userId = req.params.id;
    const user = await User.findById({_id: userId});
    res.json(user)
  }catch(err){
    res.json({message:err});
  }
}

function deleteUser(req, res) {
  User.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted"});
  })
}

// function updateUser(req, res, next) {

//   const userId = req.body.userId;

//   let name =  req.body.name;
//   let mail =  req.body.mail;
//   let dob =  req.body.dob;

//   let newUserObj = {
//     name: name,
//     mail: mail,
//     dob: dob
//   };
//   userModel.findByIdAndUpdate(userId, newUserObj, function(err, userResponse){

//     if(err){
//       res.send({status: 500, message: "Unable to update user!"});
//     }
//     else {
//       res.send({status: 200, message: 'User Updated!', results: newUserObj});
//     }

//   });

// }

function updateUser(req, res) {
  const id = req.params.id;
  const updateObject = req.body;
  User.update({ _id:id }, { $set:updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'User is updated',
        updateUser: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.'
      });
    });
}

module.exports = { createUser, getAllUser, getUser, deleteUser, updateUser };
