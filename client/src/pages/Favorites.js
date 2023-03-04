import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import { getFavorites } from '../api';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFavorites()
      .then((data) => {
        setFavorites(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box>
      <Typography variant="h5">Favorites</Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flexWrap="wrap" mt={4}>
          {favorites.map((recipe) => (
            <Box key={recipe._id} m={2}>
              <RecipeCard recipe={recipe} isFavorite />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Favorites;
