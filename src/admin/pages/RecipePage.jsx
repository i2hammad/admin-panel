// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   TextInput,
//   Typography,
//   Flex,
//   SingleSelect,
//   SingleSelectOption,
//   MultiSelectNested,
//   MultiSelectOption,
// } from "@strapi/design-system";
// import { Select } from "@strapi/ui-primitives"; // ✅ Correct Select import

// const RecipePage = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [cookingTime, setCookingTime] = useState("");
//   const [servings, setServings] = useState("");
//   const [instructions, setInstructions] = useState("");

//   // Ingredients
//   const [ingredients, setIngredients] = useState([]);
//   const [selectedIngredients, setSelectedIngredients] = useState([]);
//   const [customIngredients, setCustomIngredients] = useState([]);

//   // Nutrients
//   const [nutrients, setNutrients] = useState([]);

//   // Recipe Categories
//   const [recipeCategories, setRecipeCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [recipeSubcategories, setRecipeSubcategories] = useState([]);
//   const [selectedSubcategories, setSelectedSubcategories] = useState([]);

//   useEffect(() => {
//     fetchIngredients();
//     fetchRecipeCategories();
//   }, []);

//   // Fetch Ingredients
//   const fetchIngredients = async () => {
//     try {
//       const response = await fetch("/api/ingredients");
//       const data = await response.json();
//       setIngredients(data.data || []);
//     } catch (error) {
//       console.error("Error fetching ingredients:", error);
//     }
//   };

//   // Fetch Recipe Categories
//   const fetchRecipeCategories = async () => {
//     try {
//       const response = await fetch("/api/recipe-categories");
//       const data = await response.json();
//       setRecipeCategories(data.data || []);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   // Fetch Recipe Subcategories
//   const fetchRecipeSubcategories = async (categoryId) => {
//     try {
//       const response = await fetch(`/api/recipe-subcategories?category=${categoryId}`);
//       const data = await response.json();
//       setRecipeSubcategories(data.data || []);
//     } catch (error) {
//       console.error("Error fetching subcategories:", error);
//     }
//   };

//   // Add Custom Ingredient
//   const addCustomIngredient = () => {
//     setCustomIngredients([...customIngredients, { name: "", quantity: "" }]);
//   };

//   // Handle Ingredient Change
//   const handleCustomIngredientChange = (index, field, value) => {
//     const updatedIngredients = [...customIngredients];
//     updatedIngredients[index][field] = value;
//     setCustomIngredients(updatedIngredients);
//   };

//   // Remove Custom Ingredient
//   const removeCustomIngredient = (index) => {
//     const updatedIngredients = [...customIngredients];
//     updatedIngredients.splice(index, 1);
//     setCustomIngredients(updatedIngredients);
//   };

//   // Add Nutrient
//   const addNutrient = () => {
//     setNutrients([...nutrients, { name: "", value: "" }]);
//   };

//   // Handle Nutrient Change
//   const handleNutrientChange = (index, field, value) => {
//     const updatedNutrients = [...nutrients];
//     updatedNutrients[index][field] = value;
//     setNutrients(updatedNutrients);
//   };

//   // Remove Nutrient
//   const removeNutrient = (index) => {
//     const updatedNutrients = [...nutrients];
//     updatedNutrients.splice(index, 1);
//     setNutrients(updatedNutrients);
//   };

//   // Handle Submit
//   const handleSubmit = async () => {
//     const payload = {
//       data: {
//         title,
//         description,
//         cooking_time: parseInt(cookingTime),
//         servings: parseInt(servings),
//         instructions,
//         ingredients: [
//           ...selectedIngredients.map((id) => ({ id })), // Selected ingredients
//           ...customIngredients, // Custom ingredients
//         ],
//         nutrients,
//         recipe_category: selectedCategory,
//         recipe_subcategories: selectedSubcategories,
//       },
//     };

//     try {
//       const response = await fetch("/api/recipes", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         alert("Recipe added successfully!");
//       } else {
//         alert("Failed to add recipe");
//       }
//     } catch (error) {
//       console.error("Error adding recipe:", error);
//     }
//   };

//   return (
//     <Box padding={8}>
//       <Typography variant="alpha">Add New Recipe</Typography>

//       {/* Title */}
//       <Box marginTop={4}>
//         <TextInput label="Title" placeholder="Enter recipe title" value={title} onChange={(e) => setTitle(e.target.value)} />
//       </Box>

//       {/* Description */}
//       <Box marginTop={4}>
//         <TextInput label="Description" placeholder="Enter short description" value={description} onChange={(e) => setDescription(e.target.value)} />
//       </Box>

//       {/* Cooking Time */}
//       <Box marginTop={4}>
//         <TextInput label="Cooking Time (min)" type="number" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
//       </Box>

//       {/* Servings */}
//       <Box marginTop={4}>
//         <TextInput label="Servings" type="number" value={servings} onChange={(e) => setServings(e.target.value)} />
//       </Box>

//       {/* Recipe Category */}
//       <Box marginTop={4}>
//         <SingleSelect label="Recipe Category" placeholder="Select a category" onChange={(val) => {
//           setSelectedCategory(val);
//           fetchRecipeSubcategories(val);
//         }} value={selectedCategory}>
//           {recipeCategories.map((category) => (
//             <SingleSelectOption key={category.id} value={category.id}>{category.attributes.name}</SingleSelectOption>
//           ))}
//         </SingleSelect>
//       </Box>

//       {/* Ingredients Selection */}
//       <Box marginTop={4}>
//         <Select label="Select Ingredients" multiple value={selectedIngredients} onChange={setSelectedIngredients}>
//           {ingredients.map((ingredient) => (
//             <option key={ingredient.id} value={ingredient.id}>
//               {ingredient.attributes.name}
//             </option>
//           ))}
//         </Select>
//       </Box>

//       {/* Custom Ingredients */}
//       <Box marginTop={4}>
//         <Typography variant="beta">Add Custom Ingredients</Typography>
//         {customIngredients.map((ingredient, index) => (
//           <Flex key={index} gap={4} marginTop={2}>
//             <TextInput label="Ingredient Name" value={ingredient.name} onChange={(e) => handleCustomIngredientChange(index, "name", e.target.value)} />
//             <TextInput label="Quantity" value={ingredient.quantity} onChange={(e) => handleCustomIngredientChange(index, "quantity", e.target.value)} />
//             <Button variant="danger-light" onClick={() => removeCustomIngredient(index)}>Remove</Button>
//           </Flex>
//         ))}
//         <Button variant="secondary" onClick={addCustomIngredient}>+ Add Ingredient</Button>
//       </Box>

//       {/* Submit */}
//       <Flex justifyContent="flex-end" marginTop={4}>
//         <Button onClick={handleSubmit}>Add Recipe</Button>
//       </Flex>
//     </Box>
//   );
// };

// export default RecipePage;