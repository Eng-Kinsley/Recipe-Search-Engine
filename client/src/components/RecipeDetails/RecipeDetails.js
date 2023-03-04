import React from 'react';

function RecipeDetails(props) {
  const { title, image, ingredients, instructions } = props.recipe;

  return (
    <div className="recipe-details">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <button onClick={props.handleSaveClick}>Save Recipe</button>
    </div>
  );
}

export default RecipeDetails;
