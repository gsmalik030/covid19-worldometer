import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  detailsData: [],
  isLoading: true,
};

export const getDetailsData = createAsyncThunk(
  'country/getDetailsData',
  async (country) => {
    const url = `https://disease.sh/v3/covid-19/countries/${country}`;
    try {
      const resp = await axios(url);
      const { data } = resp;
      return data;
    } catch (error) {
      <h3>{error}</h3>;
    }
    return null;
  },
);

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: {
    [getDetailsData.pending]: (state) => {
      state.isLoading = true;
    },
    [getDetailsData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detailsData = action.payload;
    },
    [getDetailsData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default detailsSlice.reducer;
