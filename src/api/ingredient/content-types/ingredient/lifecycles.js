module.exports = {
    async beforeCreate(event) {
      const { params } = event;
  
      // Ensure params.data is defined before accessing its properties
      if (params.data && params.data.name) {
        params.data.name = params.data.name.trim().toLowerCase();
  
        // Check if an ingredient with the same name already exists
        const existingIngredient = await strapi.entityService.findMany("api::ingredient.ingredient", {
          filters: { name: params.data.name }
        });
  
        if (existingIngredient.length > 0) {
          throw new Error(`Ingredient "${params.data.name}" already exists.`);
        }
      }
    }
  };