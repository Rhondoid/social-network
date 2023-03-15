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
    ref: "Thoughts"
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
}, {
  // Adds a virtual field to the schema
  toJSON: {
    virtual: true
  },
  id: false
});

// Defined the virtual field
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = model("User", userSchema);

