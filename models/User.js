const { Schema, model } = require("mongoose");
const User = require("./User");
const Thoughts = require('./Thoughts')

//schema to create username
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    //to validate email using regex pattern
    match: /^\S+@\S+\.\S+$/,
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});
const User = model("user", userSchema);

model.exports = User;
