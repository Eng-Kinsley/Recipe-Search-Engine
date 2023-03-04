import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, CircularProgress } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import { searchRecipes } from '../api';

function SearchResults() {
  const { ingredients } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchRecipes(ingredients)
      .then((data) => {
        setRecipes(data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [ingredients]);

  return (
    <Box>
      <Typography variant="h5">Search Results for {ingredients}</Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" mt={4}>
          {recipes.map((recipe) => (
            <Box key={recipe.id} m={2}>
              <RecipeCard recipe={recipe} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default SearchResults;
