const axios = require('axios');
const { API_KEY } = process.env;
const BASE_URL = 'https://api.spoonacular.com/recipes';

// Controller function to handle recipe search
async function searchRecipes(req, res) {
  const { ingredients, cuisine, mealType, diet } = req.query;
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        includeIngredients: ingredients,
        cuisine,
        type: mealType,
        diet,
      },
    });
    const recipes = response.data.results;
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Controller function to handle recipe detail request
async function getRecipeDetails(req, res) {
  const { recipeId } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${recipeId}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    const recipeDetails = response.data;
    res.status(200).json(recipeDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = { searchRecipes, getRecipeDetails };
