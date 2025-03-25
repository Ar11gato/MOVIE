import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
