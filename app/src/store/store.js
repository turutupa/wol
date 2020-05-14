import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import { routerMiddleware } from "connected-react-router";
import createReducer from "./reducers";
import history from "utils/history";
import throttle from "lodash/throttle";

const initStore = () => {
  // load localStorage state - if it exists
  const preloadedState = loadState();

  let store = configureStore({
    reducer: createReducer(history),
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)],
    preloadedState,
  });

  // Max once every second =>  state is saved in localStorage
  store.subscribe(
    throttle(() => {
      saveState({
        counter: store.getState().counter,
        user: store.getState().user,
        homeView: store.getState().homeView,
        circle: store.getState().circle,
      });
    }, 1000)
  );

  return store;
};

export default initStore;
