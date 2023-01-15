
import { configureStore } from '@reduxjs/toolkit';
import { mdTextAreaReducer } from '../components/mdTextArea/mdTextArea';

const store = configureStore({
  reducer: {
    mdTextArea: mdTextAreaReducer,
  },
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
