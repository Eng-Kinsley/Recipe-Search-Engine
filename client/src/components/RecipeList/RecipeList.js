import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.js';

function RecipeList(props) {
  return (
    <div className="recipe-list">
      {props.recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          handleClick={props.handleRecipeClick}
        />
      ))}
    </div>
  );
}

export default RecipeList;
