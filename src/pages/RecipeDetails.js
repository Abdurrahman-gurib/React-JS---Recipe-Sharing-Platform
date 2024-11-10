import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();

  // For now, sample data (replace this with actual data fetching later)
  const recipe = {
    id: id,
    title: 'Sample Recipe',
    description: 'This is a sample recipe.',
    ingredients: ['1 cup flour', '2 eggs', '1/2 cup milk'],
    steps: ['Mix ingredients', 'Cook on medium heat', 'Serve hot'],
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetails;
