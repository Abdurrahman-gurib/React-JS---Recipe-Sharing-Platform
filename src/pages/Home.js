import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Recipe Sharing Platform</h1>
        <p>Discover, share, and save your favorite recipes!</p>
        <button className="button">Explore Recipes</button>
      </section>

      <section className="recipes-section">
        {/* Example of Recipe Cards */}
        <div className="recipe-card">
          <h2>Spaghetti Carbonara</h2>
          <p>A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
        </div>
        <div className="recipe-card">
          <h2>Chicken Tikka Masala</h2>
          <p>Marinated chicken in a spiced curry sauce; a popular dish worldwide.</p>
        </div>
        {/* Add more recipe cards as needed */}
      </section>
    </div>
  );
}

export default Home;
