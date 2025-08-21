// backend/models/Recipe.js
import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js"; // connection file

const Recipe = sequelize.define(
  "Recipe",
  {
    Contient: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Country_State: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cuisine: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    URL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    total_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prep_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cook_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Recipe;
