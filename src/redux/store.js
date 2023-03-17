import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
    details: detailsReducer,
  },
});

export default store;
