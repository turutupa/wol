import { connectRouter } from "connected-react-router";
import counterReducer from "containers/features/counter/counterSlice";
import loginReducer from "containers/Login/loginSlice";
import homeViewReducer from "containers/Home/setViewSlice";
import selectCircleReducer from "utils/selectCircleSlice";

export default (history) => {
  return {
    router: connectRouter(history),
    counter: counterReducer,
    user: loginReducer,
    homeView: homeViewReducer,
    circle: selectCircleReducer,
  };
};
