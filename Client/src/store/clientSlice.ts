// clientSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface ClientState {
  theme: string;
}
// khởi tạo 
const initialState: ClientState = {
  theme: 'light',
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  // viết reducer
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

// hành động
export const { toggleTheme } = clientSlice.actions;

export default clientSlice.reducer;
