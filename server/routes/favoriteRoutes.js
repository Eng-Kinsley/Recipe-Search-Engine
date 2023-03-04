const express = require('express');
const { Favorite } = require('../models/favorite');

const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.query;

  try {
    const favorites = await Favorite.find({ userId });
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  const { recipeId, userId } = req.body;

  try {
    const existingFavorite = await Favorite.findOne({ recipeId, userId });

    if (existingFavorite) {
      return res.status(400).json({ message: 'Recipe already saved to favorites' });
    }

    const favorite = new Favorite({ recipeId, userId });

    await favorite.save();

    res.json(favorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const favorite = await Favorite.findById(id);

    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    await favorite.remove();

    res.json({ message: 'Favorite removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;