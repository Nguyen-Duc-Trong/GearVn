import { CategoryState } from '@/interface/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CategoryState = {
  hoveredCategory: null,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setHoveredCategory: (state, action: PayloadAction<string | null>) => {
      state.hoveredCategory = action.payload;
    },
  },
});

export const { setHoveredCategory } = categorySlice.actions;

export default categorySlice.reducer;
