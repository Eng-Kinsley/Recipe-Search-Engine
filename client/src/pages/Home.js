import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

function Home() {
  const [ingredients, setIngredients] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/search/${ingredients}`);
  };

  return (
    <Box>
      <TextField
        label="Enter ingredients"
        variant="outlined"
        fullWidth
        margin="normal"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default Home;