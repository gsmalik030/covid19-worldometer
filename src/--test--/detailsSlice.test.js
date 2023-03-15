import { getDetailsData } from '../redux/details/detailsSlice';

describe('Should test detailsReducer', () => {
  it('Should return an array', async () => {
    const arr = getDetailsData;
    expect(arr.length).toBe(1);
  });
});
