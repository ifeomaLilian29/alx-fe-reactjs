import { create } from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],

  searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),

  updateRecipe: (updatedRecipe) => set(state => ({ 
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe) 
  })),

  setRecipes: (recipes) => set({ recipes }),
  
  favorites: [],

  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [],

  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );

    return { recommendations: recommended };
  }),
  
}));