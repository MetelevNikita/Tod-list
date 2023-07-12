import { createStore } from "redux";
import { combineReducers } from "redux";
import { postReducer } from "./poersonReducer";


const combineReducer = combineReducers({
  post: postReducer
})


 export const postStore = createStore(combineReducer)