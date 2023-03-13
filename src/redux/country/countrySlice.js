import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    covidData:[],
    isLoading:true,
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
})

console.log(countrySlice)

export default countrySlice.reducer