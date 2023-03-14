import { configureStore } from "@reduxjs/toolkit";
import countryReducer from '../redux/country/countrySlice'
import detailsReducer from '../redux/details/detailsSlice'
const store= configureStore({
    reducer:{
        country: countryReducer,
        details:detailsReducer,
    }
})

export default store;