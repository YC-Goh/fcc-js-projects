
import { configureStore } from '@reduxjs/toolkit'
import { randomiserReducer } from '../comps/randomiserButton/randomiserButton';

const store = configureStore({
  reducer: {
    randomiser: randomiserReducer
  }
});

export default store;

/*

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

*/
