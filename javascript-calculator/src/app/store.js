
import { configureStore } from '@reduxjs/toolkit';
import { buttonReducer } from '../components/buttons/buttons';

export const store = configureStore({
  reducer: {
    buttons: buttonReducer
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
