// import { signInWithPassword } from "../service/authService";

// userActionTypes.js
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const loginUser = (user) =>  {
  return {type: LOGIN_USER_SUCCESS,
    payload: user,}
};
export const logoutUser = () => {
  return { type: LOGOUT_USER_SUCCESS };
};
// import { signInWithGoogle,  } from '../service/authService';


// export const loginWithGoogle = () => {
//   return async (dispatch) => {
//     try {
//       const user = await signInWithGoogle();
//       dispatch(loginUserSuccess(user));
//     } catch (error) {
//         setError(error);
//     }
//   };
// };


// export const logoutUser = () => {
//   return async (dispatch) => {
//     try {
//       // Implemente a lógica de logout aqui, se necessário
//       dispatch(logoutUserSuccess());
//     } catch (error) {
//       setError(error);
//       // Aqui você pode despachar uma ação para tratar o erro, se necessário
//     }
//   };
// };


// export const logoutUserSuccess = () => ({
//   type: LOGOUT_USER_SUCCESS,
// });
// export const setError = (error) => ({
//   type: SET_ERROR,
//   payload: error
// });
