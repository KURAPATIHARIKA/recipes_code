# 🍳 Recipes App

## 📌 Overview
This project is a **full-stack Recipes application** built using Node.js, Express, PostgreSQL, and React.  

It demonstrates:
1. Parsing JSON recipe data  
2. Storing recipes in PostgreSQL  
3. Exposing REST APIs (with pagination, sorting, and search)  
4. Displaying recipes on a React frontend  

---

## 📂 Project Structure
recipes_code/
├── backend/ # Node.js + Express + PostgreSQL backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── app.js
│ ├── US_recipes.json
│ ├── import_recipes.js
│ ├── package.json
│ └── README.md
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ └── index.js
│ ├── package.json
│ └── README.md
├── database/ # Database setup
│ └── schema.sql
└── README.md # Main instructions


---

## 🚀 Setup Instructions

### 🔹 Backend Setup
```bash
cd backend
npm install
node import_recipes.js   # Import recipes from JSON into PostgreSQL
node server.js           # Start backend on http://localhost:5000

🔹 Frontend Setup
cd frontend
npm install
npm start                # Start frontend on http://localhost:3000
