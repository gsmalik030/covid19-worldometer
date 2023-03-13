import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://disease.sh/v3/covid-19/vaccine/coverage/countries';

const initialState = {
  covidData: [],
  isLoading: true,
};

export const getCountryData = createAsyncThunk('country/getCountryData', async () => {
  try{
    const resp =await axios(url);
    return resp.data
  }
  catch(error){}
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: {
    [getCountryData.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountryData.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.covidData = action.payload;
    },
    [getCountryData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default countrySlice.reducer;
