import { createStore  } from "redux";
import movieReducer from "../reducers/movieReducer";
//import allReducers from '../reducers'

const store = createStore(movieReducer);
export default store;