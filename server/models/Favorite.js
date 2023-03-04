const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  recipeId: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite };
