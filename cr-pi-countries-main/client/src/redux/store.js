import { applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;