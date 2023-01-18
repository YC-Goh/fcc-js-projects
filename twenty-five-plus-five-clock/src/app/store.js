
import { configureStore } from '@reduxjs/toolkit';
import { timerReducer, toggleCountDownMiddleware } from '../components/buttons';

export const store = configureStore({
  reducer: {
    timer: timerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(toggleCountDownMiddleware)
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
