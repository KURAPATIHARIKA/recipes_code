import fs from "fs";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function importData() {
  try {
    // Read JSON file
    const data = fs.readFileSync("./US_recipes.json", "utf-8");
    const parsed = JSON.parse(data);

    // Ensure it's an array
    const recipes = Object.values(parsed);
    console.log("Recipes count:", recipes.length);

    for (const recipe of recipes) {
      await pool.query(
        `INSERT INTO recipes 
        (cuisine, title, rating, prep_time, cook_time, total_time, description, nutrients, serves) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [
          recipe.cuisine,
          recipe.title,
          recipe.rating,
          recipe.prep_time,
          recipe.cook_time,
          recipe.total_time,
          recipe.description,
          JSON.stringify(recipe.nutrients || {}), // handle missing nutrients
          recipe.serves || null, // handle missing serves
        ]
      );
    }

    console.log("✅ Recipes imported successfully!");
  } catch (err) {
    console.error("❌ Error importing data:", err);
  } finally {
    await pool.end();
  }
}

importData();
