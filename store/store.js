// store.js

import { configureStore } from '@reduxjs/toolkit';
import parametersReducer from '../util/addresses';

const store = configureStore({
  reducer: {
    parameters: parametersReducer,
  },
});

export default store;
