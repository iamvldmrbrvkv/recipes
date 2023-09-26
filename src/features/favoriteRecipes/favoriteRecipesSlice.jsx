import { createSlice } from "@reduxjs/toolkit";

export const favoriteRecipesSlice = createSlice({
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload)
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
})

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions
export default favoriteRecipesSlice.reducer