// reducers/index.js

import { combineReducers } from 'redux';
import orderReducer from './orderReducer'; // Importe seu reducer existente
import userReducer from './authenticationReducer';

const rootReducer = combineReducers({
  orderState: orderReducer, //[] array
  userState: userReducer, //{} object
});

export default rootReducer;
