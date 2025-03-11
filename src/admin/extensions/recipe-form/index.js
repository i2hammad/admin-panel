export default {
  register(app) {
    app.addMenuLink({
      to: "/recipe-form",
      icon: null,
      intlLabel: {
        id: "recipe-form",
        defaultMessage: "Add Recipe",
      },
      Component: async () => {
        const component = await import("./RecipeForm.js");
        return component.default;
      },
    });
  },
};