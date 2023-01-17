
import { configureStore } from '@reduxjs/toolkit';
import { drumPadReducer } from '../components/DrumPads';

export const store = configureStore({
  reducer: {
    drumPad: drumPadReducer
  },
});

/*

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

*/
