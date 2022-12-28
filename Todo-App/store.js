import todosReducer from "./todosReducer";
import {applyMiddleware, createStore}from "redux"
import thunk from "redux-thunk"

const store=createStore(todosReducer, applyMiddleware(thunk));

export default store;