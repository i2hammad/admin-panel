


const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};


// import RecipePage from "./pages/RecipePage";

// export default {
//   async register(app) {
//     app.addMenuLink({
//       to: "/recipes",
//       icon: "📖",
//       intlLabel: {
//         id: "menu.recipes",
//         defaultMessage: "Recipes",
//       },
//       Component: RecipePage,
//     });
//   },
// };

// export default {
//   register(app) {
//     app.addMenuLink({
//       id: "recipes",
//       icon: () => <span>🍽️</span>,
//       intlLabel: {
//         id: "recipe.menu",
//         defaultMessage: "Recipes",
//       },
//       to: "/plugins/recipe",
//       Component: async () => {
//         const component = await import("./pages/RecipePage");
//         return component;
//       },
//     });
//   },
// };