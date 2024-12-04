import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProduits } from '../api/api';

export const fetchProduitsAsync = createAsyncThunk('produits/fetchAll', async () => {
  const response = await fetchProduits();
  return response.data;
});

const produitsSlice = createSlice({
  name: 'produits',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduitsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default produitsSlice.reducer;
