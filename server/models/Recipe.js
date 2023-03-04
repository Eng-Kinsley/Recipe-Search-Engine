const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  recipeId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  servings: {
    type: Number,
  },
  readyInMinutes: {
    type: Number,
  },
  sourceUrl: {
    type: String,
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = { Recipe };
