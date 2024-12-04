import { configureStore } from '@reduxjs/toolkit';
import produitsReducer from './produitsSlice';
import categoriesReducer from './categoriesSlice';

export const store = configureStore({
  reducer: {
    produits: produitsReducer,
    categories: categoriesReducer,
  },
});
