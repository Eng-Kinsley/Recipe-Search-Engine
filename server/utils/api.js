const axios = require('axios');

const API_KEY = process.env.SPOONACULAR_API_KEY;
const API_BASE_URL = 'https://api.spoonacular.com';

const searchRecipesByIngredients = async (ingredients) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/findByIngredients`, {
      params: {
        apiKey: API_KEY,
        ingredients: ingredients.join(','),
        number: 10,
        ignorePantry: true
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getRecipeDetails = async (recipeId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes/${recipeId}/information`, {
      params: {
        apiKey: API_KEY,
        includeNutrition: true
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  searchRecipesByIngredients,
  getRecipeDetails
};
