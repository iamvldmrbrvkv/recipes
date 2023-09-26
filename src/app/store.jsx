import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import favoriteRecipesReducer from '../features/favoriteRecipes/favoriteRecipesSlice.jsx';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.jsx';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.jsx';

export const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  },
})