import React, { useState } from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import RecipeList from './components/RecipeList/RecipeList.js';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.js';
import FavoritesList from './components/FavoritesList/FavoritesList.js';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [mealType, setMealType] = useState('');
  const [dietType, setDietType] = useState('');
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  return (
    <Router>
      <div className="app">
        <Header />
        <SearchBar
          setSearchQuery={setSearchQuery}
          setCuisineType={setCuisineType}
          setMealType={setMealType}
          setDietType={setDietType}
        />
        <Routes>
          <Route path="/" exact>
            <RecipeList
              searchQuery={searchQuery}
              cuisineType={cuisineType}
              mealType={mealType}
              dietType={dietType}
              favoriteRecipes={favoriteRecipes}
              setFavoriteRecipes={setFavoriteRecipes}
            />
          </Route>
          <Route path="/recipe/:id">
            <RecipeDetails
              favoriteRecipes={favoriteRecipes}
              setFavoriteRecipes={setFavoriteRecipes}
            />
          </Route>
          <Route path="/favorites">
            <FavoritesList
              favoriteRecipes={favoriteRecipes}
              setFavoriteRecipes={setFavoriteRecipes}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
