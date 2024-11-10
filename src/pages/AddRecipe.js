import React, { useState } from 'react';
import './AddRecipe.css';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      ingredients: ingredients.split('\n'),
      steps: steps.split('\n'),
    });
    setTitle('');
    setDescription('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="add-recipe-container">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe title"
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description of the recipe"
        />
        <label>Ingredients (one per line)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="List ingredients, each on a new line"
        />
        <label>Steps (one per line)</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="List cooking steps, each on a new line"
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
