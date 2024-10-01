
// store.ts
import { configureStore } from '@reduxjs/toolkit';
import clientSlice, { ClientState } from './clientSlice'; 

const store = configureStore({
  reducer: {
    client: clientSlice,
  },
});

export type RootState = {
  client: ClientState; 
};

export default store;

