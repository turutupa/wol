import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { push } from "connected-react-router";

export const loginSlice = createSlice({
  name: "user",
  initialState: {
    name: undefined,
    email: undefined,
    id: undefined,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = undefined;
      state.email = undefined;
      state.id = undefined;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export const loginAsync = (credentials) => (dispatch) => {
  setTimeout(() => {
    dispatch(login(credentials));
    dispatch(push("/home"));
  }, 500);
};

export const logoutAsync = () => (dispatch) => {
  dispatch(logout());
  dispatch(push("/login"));
};

export const userState = (state) => state.user;

export default loginSlice.reducer;
