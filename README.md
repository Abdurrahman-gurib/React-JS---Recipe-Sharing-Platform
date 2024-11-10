# React-JS---Recipe-Sharing-Platform

# Recipe Sharing Platform

A simple Recipe Sharing Platform built with React, allowing users to browse, add, edit, and save favorite recipes. This platform demonstrates React fundamentals, including component structuring, state management, routing, and form handling.

---

## Overview

- **Home Page**: Displays a list of all recipes.
- **Recipe Details Page**: Shows details for a specific recipe, including ingredients and steps.
- **Add Recipe Page**: Allows users to add a new recipe (data logs to console).
- **Edit Recipe Page**: Allows users to edit an existing recipe.
- **Favorites**: Users can mark recipes as favorites for easy access.

---

## Navigation

- **Home Page**: View the full list of recipes.
- **Recipe Details Page**: Click on a recipe on the Home Page to view its details.
- **Add Recipe Page**: Add a new recipe via the form (console logs on submit).
- **Favorites**: Toggle recipes as favorites for easy retrieval.

---

## Installation Steps

1. **Install Node.js and npm** (if not already installed): [Node.js Download](https://nodejs.org/)
2. **Initialize React App**:
    ```bash
    npx create-react-app recipe-sharing-platform
    cd recipe-sharing-platform
    ```
3. **Install React Router** (for navigation):
    ```bash
    npm install react-router-dom
    ```
4. **Folder Structure**:
    - Organize components in `/src/components` and pages in `/src/pages`.
5. **Setup SCSS** (optional, if using SCSS for styling):
    ```bash
    npm install sass
    ```
6. **Run the Application**:
    ```bash
    npm start
    ```

---

## Key Learnings

1. **React Basics**: Setting up components, props, and state.
2. **React Router**: Navigating between pages with `react-router-dom`.
3. **State Management**: Using React's `useState` and `useEffect` hooks to manage data.
4. **Form Handling**: Building and submitting forms with controlled components.
5. **Component Reusability**: Reusing components across different pages.
6. **Styling with SCSS**: Applying styles using SCSS to improve the visual design.
7. **Responsive Design**: Ensuring components adapt to different screen sizes.
8. **Debugging & Logging**: Using `console.log` for debugging form data (e.g., in Add Recipe).

---

## Future Improvements

- **API Integration**: Connect the app to a backend to save recipe data.
- **Database**: Store recipe information in a database instead of using local state.
- **Enhanced Favorites**: Implement a favorites filter for easier access.

---

## License

This project is licensed under the MIT License.
