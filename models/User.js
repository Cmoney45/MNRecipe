// models.User.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // All unique info for the user
  info: {
    userName: {
      type: String,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
  },
  userRecipe: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipes"
    }
  ],
  watchList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Show"
    }
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
