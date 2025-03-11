import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextInput } from "@strapi/design-system";
import { Select } from "@strapi/design-system/Select";
import { useNotification } from "@strapi/helper-plugin";

const RecipeForm = () => {
  const toggleNotification = useNotification();
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState({ title: "", cookingTime: "", servingSize: "", recipeIngredients: [] });

  useEffect(() => {
    fetch("/api/ingredients")
      .then((res) => res.json())
      .then((data) => setIngredients(data.data));
  }, []);

  const addIngredient = (ingredientId) => {
    const selectedIngredient = ingredients.find((ing) => ing.id === ingredientId);
    if (selectedIngredient) {
      setRecipe({
        ...recipe,
        recipeIngredients: [...recipe.recipeIngredients, { ingredientId: ingredientId, name: selectedIngredient.name }],
      });
    }
  };

  const handleSaveRecipe = async () => {
    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        toggleNotification({ type: "success", message: "Recipe saved successfully!" });
      } else {
        toggleNotification({ type: "warning", message: "Error saving recipe!" });
      }
    } catch (error) {
      toggleNotification({ type: "danger", message: "Something went wrong!" });
    }
  };

  return (
    <Box padding={8} background="neutral100">
      <Typography variant="alpha">Recipe Entry Form</Typography>
      <TextInput label="Recipe Title" placeholder="Enter title" value={recipe.title} onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
      <TextInput label="Cooking Time (minutes)" type="number" value={recipe.cookingTime} onChange={(e) => setRecipe({ ...recipe, cookingTime: e.target.value })} />
      <TextInput label="Serving Size" type="number" value={recipe.servingSize} onChange={(e) => setRecipe({ ...recipe, servingSize: e.target.value })} />
      <Typography variant="beta" marginTop={4}>Ingredients</Typography>
      <Select label="Select Ingredient" onChange={(e) => addIngredient(Number(e.target.value))}>
        <Select.Option value="">Choose an ingredient</Select.Option>
        {ingredients.map((ingredient) => (
          <Select.Option key={ingredient.id} value={ingredient.id}>{ingredient.name}</Select.Option>
        ))}
      </Select>
      <ul>{recipe.recipeIngredients.map((ing, index) => (<li key={index}>{ing.name}</li>))}</ul>
      <Button onClick={handleSaveRecipe} variant="default">Save Recipe</Button>
    </Box>
  );
};

export default RecipeForm;