import { createSlice } from "@reduxjs/toolkit";

export const selectCircleSlice = createSlice({
  name: "selectCircle",
  initialState: {
    circle: null,
  },
  reducers: {
    selectedCircle: (state, action) => {
      state.circle = action.payload;
    },
  },
});

export const { selectedCircle } = selectCircleSlice.actions;
export const circleState = (state) => state.circle;
export const selectCircle = (data) => (dispatch) => {
  dispatch(selectedCircle(data));
};

export default selectCircleSlice.reducer;
