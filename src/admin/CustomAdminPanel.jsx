// import React, { useState, useEffect } from "react";
// // import { Box, Typography, Button, TextInput, Option } from "@strapi/design-system";
// import { Button } from '@strapi/design-system';
// import { TextInput } from '@strapi/design-system';
// import { Typography } from '@strapi/design-system';
// import { Box } from '@strapi/design-system';
// import { Option } from '@strapi/design-system';
// import { Select } from '@strapi/design-system';

// export default function CustomAdminPanel() {
//   const [ingredients, setIngredients] = useState([]);
//   const [recipe, setRecipe] = useState({
//     title: "",
//     cookingTime: "",
//     servingSize: "",
//     recipeIngredients: [],
//   });

//   useEffect(() => {
//     fetch("/api/ingredients")
//       .then((res) => res.json())
//       .then((data) => setIngredients(data.data));
//   }, []);

//   const addIngredient = (ingredientId) => {
//     const selectedIngredient = ingredients.find((ing) => ing.id === ingredientId);
//     if (selectedIngredient) {
//       setRecipe({
//         ...recipe,
//         recipeIngredients: [
//           ...recipe.recipeIngredients,
//           { ingredientId: ingredientId, name: selectedIngredient.name, replaceableIngredients: [] },
//         ],
//       });
//     }
//   };

//   const handleSaveRecipe = () => {
//     fetch("/api/recipes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(recipe),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log("Recipe saved!", data));
//   };

//   return (
//     <Box padding={8} background="neutral100">
//       <Typography variant="alpha">Strapi Admin Panel - Recipe Management</Typography>

//       <TextInput
//         label="Recipe Title"
//         placeholder="Enter recipe title"
//         value={recipe.title}
//         onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
//       />

//       <TextInput
//         label="Cooking Time (minutes)"
//         type="number"
//         value={recipe.cookingTime}
//         onChange={(e) => setRecipe({ ...recipe, cookingTime: e.target.value })}
//       />

//       <TextInput
//         label="Serving Size"
//         type="number"
//         value={recipe.servingSize}
//         onChange={(e) => setRecipe({ ...recipe, servingSize: e.target.value })}
//       />

//       <Typography variant="beta" marginTop={4}>Ingredients</Typography>
//       <Select label="Select Ingredient" onChange={(e) => addIngredient(Number(e.target.value))}>
//         <Option value="">Choose an ingredient</Option>
//         {ingredients.map((ingredient) => (
//           <Option key={ingredient.id} value={ingredient.id}>{ingredient.name}</Option>
//         ))}
//       </Select>

//       <ul>
//         {recipe.recipeIngredients.map((ing, index) => (
//           <li key={index}>{ing.name}</li>
//         ))}
//       </ul>

//       <Button onClick={handleSaveRecipe} variant="default">Save Recipe</Button>
//     </Box>
//   );
// }
