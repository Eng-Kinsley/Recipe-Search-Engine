const express = require('express');
const axios = require('axios');
const { Recipe } = require('../models/recipe');

const router = express.Router();

router.get('/', async (req, res) => {
  const { ingredients, cuisine, mealType, diet } = req.query;

  const params = {
    apiKey: process.env.SPOONACULAR_API_KEY,
    includeNutrition: false,
    fillIngredients: false,
  };

  if (ingredients) {
    params.ingredients = ingredients;
  }

  if (cuisine) {
    params.cuisine = cuisine;
  }

  if (mealType) {
    params.type = mealType;
  }

  if (diet) {
    params.diet = diet;
  }

  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', { params });
    const recipes = response.data;

    const recipeIds = recipes.map(recipe => recipe.id);

    const existingRecipes = await Recipe.find({ recipeId: { $in: recipeIds } });

    const existingRecipeIds = existingRecipes.map(recipe => recipe.recipeId);

    const newRecipes = recipes.filter(recipe => !existingRecipeIds.includes(recipe.id));

    const savedRecipes = await Recipe.insertMany(newRecipes);

    const allRecipes = [...existingRecipes, ...savedRecipes];

    res.json(allRecipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
