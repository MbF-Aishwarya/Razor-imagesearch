import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import imageReducer from "./reducer";
export default function configureStore(initialState = {}) {
  return createStore(imageReducer, applyMiddleware(thunk));
}
