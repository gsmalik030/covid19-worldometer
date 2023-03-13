import { configureStore } from "@reduxjs/toolkit";
import countryReducer from '../redux/country/countrySlice'
const store= configureStore({
    reducer:{
        country: countryReducer,
    }
})

export default store;