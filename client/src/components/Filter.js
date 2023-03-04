import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  /*Checkbox,
  ListItemText,*/
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = ({ filter, setFilter }) => {
  const classes = useStyles();

  const handleCuisineChange = (event) => {
    setFilter({ ...filter, cuisine: event.target.value });
  };

  const handleMealTypeChange = (event) => {
    setFilter({ ...filter, mealType: event.target.value });
  };

  const handleDietChange = (event) => {
    setFilter({ ...filter, diet: event.target.value });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Cuisine</InputLabel>
        <Select
          multiple
          value={filter.cuisine}
          onChange={handleCuisineChange}
          renderValue={(selected) => selected.join(', ')}
        >
          <MenuItem value="American">American</MenuItem>
          <MenuItem value="Chinese">Chinese</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Indian">Indian</MenuItem>
          <MenuItem value="Italian">Italian</MenuItem>
          <MenuItem value="Japanese">Japanese</MenuItem>
          <MenuItem value="Mediterranean">Mediterranean</MenuItem>
          <MenuItem value="Mexican">Mexican</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Thai">Thai</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Meal Type</InputLabel>
        <Select
          multiple
          value={filter.mealType}
          onChange={handleMealTypeChange}
          renderValue={(selected) => selected.join(', ')}
        >
          <MenuItem value="Breakfast">Breakfast</MenuItem>
          <MenuItem value="Lunch">Lunch</MenuItem>
          <MenuItem value="Dinner">Dinner</MenuItem>
          <MenuItem value="Dessert">Dessert</MenuItem>
          <MenuItem value="Snack">Snack</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Diet</InputLabel>
        <Select
          multiple
          value={filter.diet}
          onChange={handleDietChange}
          renderValue={(selected) => selected.join(', ')}
        >
          <MenuItem value="Gluten Free">Gluten Free</MenuItem>
          <MenuItem value="Ketogenic">Ketogenic</MenuItem>
          <MenuItem value="Vegetarian">Vegetarian</MenuItem>
          <MenuItem value="Lacto-Vegetarian">Lacto-Vegetarian</MenuItem>
          <MenuItem value="Ovo-Vegetarian">Ovo-Vegetarian</MenuItem>
          <MenuItem value="Vegan">Vegan</MenuItem>
          <MenuItem value="Pescetarian">Pescetarian</MenuItem>
          <MenuItem value="Paleo">Paleo</MenuItem>
          <MenuItem value="Whole30">Whole30</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;