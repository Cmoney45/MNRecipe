// models.Recipes.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  usersWhoHaveSavedRecipe: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ],
  groupsWhoHaveSavedRecipe: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ],
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredients"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Recipe = mongoose.model("Show", recipeSchema);

module.exports = Recipe;
