import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories, addCategorie, updateCategorie, deleteCategorie } from '../api/api';

// Thunks pour les appels API
export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchAll',
  async () => {
    const response = await fetchCategories();
    return response.data; // Retourne les catégories depuis l'API
  }
);

export const addCategorieAsync = createAsyncThunk(
  'categories/add',
  async (newCategorie) => {
    const response = await addCategorie(newCategorie);
    return response.data; // Retourne la catégorie ajoutée
  }
);

export const updateCategorieAsync = createAsyncThunk(
  'categories/update',
  async ({ id, updatedCategorie }) => {
    const response = await updateCategorie(id, updatedCategorie);
    return response.data; // Retourne la catégorie mise à jour
  }
);

export const deleteCategorieAsync = createAsyncThunk(
  'categories/delete',
  async (id) => {
    await deleteCategorie(id);
    return id; // Retourne l'ID de la catégorie supprimée
  }
);

// Création du slice Redux
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [], // Liste des catégories
    loading: false, // Indicateur de chargement
    error: null, // Gestion des erreurs
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Gestion des catégories - Fetch
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Ajouter une catégorie
      .addCase(addCategorieAsync.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // Mettre à jour une catégorie
      .addCase(updateCategorieAsync.fulfilled, (state, action) => {
        const index = state.list.findIndex((cat) => cat.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })

      // Supprimer une catégorie
      .addCase(deleteCategorieAsync.fulfilled, (state, action) => {
        state.list = state.list.filter((cat) => cat.id !== action.payload);
      });
  },
});

export default categoriesSlice.reducer;
