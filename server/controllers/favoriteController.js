const { Favorite } = require('../models/favorite');

// Controller function to handle saving a new favorite recipe
async function saveFavorite(req, res) {
  const { recipeId } = req.body;
  const { userId } = req.user; // Assumes user ID is stored in the request object
  try {
    const favorite = new Favorite({ recipeId, userId });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller function to handle retrieving all favorite recipes for a user
async function getFavorites(req, res) {
  const { userId } = req.user; // Assumes user ID is stored in the request object
  try {
    const favorites = await Favorite.find({ userId });
    res.status(200).json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller function to handle deleting a favorite recipe
async function deleteFavorite(req, res) {
  const { id } = req.params;
  try {
    await Favorite.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = { saveFavorite, getFavorites, deleteFavorite };
