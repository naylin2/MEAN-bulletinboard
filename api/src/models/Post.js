const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body:  {
    type: String,
    required: true
  },
  created_user_id: {
    type: String,
    ref: "user",
    autopopulate: true
  },
},
{
  timestamps: true
}
)

module.exports = mongoose.model('Posts',PostSchema);
