import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  details?: string[];
}

interface MenuCategory {
  id: string;
  title: string;
  items?: MenuItem[];
  subcategories?: {
    name: string;
    items: MenuItem[];
  }[];
}

interface MenuState {
  categories: MenuCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchMenu = createAsyncThunk('menu/fetchMenu', async () => {
  const response = await axios.get('http://localhost:5000/api/menu');
  return response.data;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch menu';
      });
  },
});

export default menuSlice.reducer;
