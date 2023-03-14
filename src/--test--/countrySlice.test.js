import { getCountryData } from "../redux/country/countrySlice";

describe('Should test countries reducer', () => {
    it('Should return an array ', async () => {
      const arr = getCountryData;
      expect(arr.length).toBe(1);
    });
  });