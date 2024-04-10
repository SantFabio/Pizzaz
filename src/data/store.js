// store.js

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

// Recupera o estado do armazenamento local, se disponível
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// Cria a store do Redux com o middleware Redux Thunk
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

// Salva o estado no armazenamento local sempre que ele mudar
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  console.log(persistedState);
});

export default store;
