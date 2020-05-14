import { createSlice } from "@reduxjs/toolkit";

const [circles, tasks] = ["circles", "tasks"];

export const setViewSlice = createSlice({
  name: "homeView",
  initialState: {
    view: tasks,
  },
  reducers: {
    setView: (state, action) => {
      console.log(action.payload);
      state.view = action.payload
        ? action.payload
        : state.view === tasks
        ? circles
        : tasks;
    },
  },
});

export const { setView } = setViewSlice.actions;

export const viewState = (state) => state.homeView;

export default setViewSlice.reducer;
