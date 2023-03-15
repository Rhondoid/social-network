const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJson: {
      virtual: true,
      getters: true,
    },
    id: false,
  }
);
 thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
 });

 module.exports = Thoughts;