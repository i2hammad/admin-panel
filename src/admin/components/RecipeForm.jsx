import React, { useState } from "react";
import { TextInput, Button, Box, Typography } from "@strapi/design-system";
import { request } from "@strapi/helper-plugin";

const RecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await request("/recipes", {
        method: "POST",
        body: { title, cooking_time: cookingTime },
      });

      alert("Recipe added successfully!");
      onSubmit(response);
    } catch (error) {
      alert("Error adding recipe.");
      console.error(error);
    }
  };

  return (
    <Box padding={4}>
      <Typography variant="h2">Add Recipe</Typography>
      <TextInput label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextInput label="Cooking Time" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default RecipeForm;