import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://disease.sh/v3/covid-19/countries/';

const initialState = {
  covidData: [],
  isLoading: true,
};

export const getCountryData = createAsyncThunk(
  'country/getCountryData',
  async () => {
    const url = `https://disease.sh/v3/covid-19/countries`
    try {
        const resp = await axios(url);
        const data = resp.data;
        const countriesData = [];
      data.forEach((element) => {
        countriesData.push({
          id: element.countryInfo._id,
          country: element.country,
          population:element.population,
          flag: element.countryInfo.flag,
          cases: element.cases,
          deaths: element.deaths,
          recovered: element.recovered,
          continent: element.continent,
          tests: element.tests,
          iso: element.countryInfo.iso2,
        });
      });
    return countriesData;
    } catch (error) {}
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: {
    [getCountryData.pending]: (state) => {
      state.isLoading = true;
    },
    [getCountryData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.covidData = action.payload;
    },
    [getCountryData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default countrySlice.reducer;
