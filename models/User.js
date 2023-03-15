const { Schema, model } = require("mongoose");
const Thoughts = require("./Thoughts");

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
    ref: "Thought"
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = model("User", userSchema);

