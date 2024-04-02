// store.js

import { createStore } from 'redux';
import orderReducer from './reducers/orderReducer';

// Recupera o estado do armazenamento local, se disponível
const initialState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : [];

// Cria a store do Redux
const store = createStore(orderReducer, initialState);

// Salva o estado no armazenamento local sempre que ele mudar
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
