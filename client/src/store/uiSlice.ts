import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isMenuOpen: boolean;
  activeSection: string;
}

const initialState: UIState = {
  isMenuOpen: false,
  activeSection: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMenu, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
