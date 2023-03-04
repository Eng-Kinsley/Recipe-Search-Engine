import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard.js';

function FavoritesList(props) {
  return (
    <div className="favorites-list">
      {props.favorites.map((favorite) => (
        <RecipeCard
          key={favorite._id}
          recipe={favorite}
          handleClick={props.handleFavoriteClick}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
