import { useEffect, useState } from "react";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <h2>
        🍳 Recipe List
        <br />
        Loading recipes...
      </h2>
    );

  return (
    <div>
      <h2>🍳 Recipe List</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <strong>{recipe.title}</strong> — {recipe.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
