

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lat: null,
  lng: null,
  pickup: null,
  destination: null,
};

const parametersSlice = createSlice({
  name: 'parameters',
  initialState,
  reducers: {
    storeParameters: (state, action) => {
      // Store three parameters received from action.payload
      const { lat, lng, pickup, destination } = action.payload;
      state.lat = lat;
      state.lng = lng;
      state.pickup = pickup;
      state.destination = destination;
    },
    updateParameters: (state, action) => {
      // Update the stored parameters with new values received from action.payload
      const { lat, lng, pickup, destination } = action.payload;
      state.lat = lat;
      state.lng = lng;
      state.pickup = pickup;
      state.destination = destination;
    },
  },
});

export const { storeParameters, updateParameters } = parametersSlice.actions;
export default parametersSlice.reducer;
