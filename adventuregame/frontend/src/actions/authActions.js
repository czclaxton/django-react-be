import axios from 'axios';
import axiosWithAuth from '../utilities/axiosWithAuth';
import { ERROR } from './types.js';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  ERROR_CLEAN
} from './types.js';
export const loginUser = (data, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
      .post('api/auth/login', data)
      .then(res => {
        console.log("LoginUser", res.data.user)
        // localStorage.setItem("token", res.data.key);
        //Mixpanel.track('Login Success');
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
        return res.data.user;
      })
      .catch(err => {
        console.log('error:', err);
        //Mixpanel.track('Login Error');
        dispatch({
          type: LOGIN_FAILURE,
          payload: err ? err : ERROR
        });
      });
  };
};
export const registerUser = (data, history) => dispatch => {
  // CHANGE
  dispatch({ type: REGISTER_USER_START });
  return axiosWithAuth()
    .post('api/auth/register', data)
    .then(res => {
      // Mixpanel.track('Register Success');
      //   localStorage.setItem("token", res.data.key);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
      history.push(`/`);
      return res.data;
    })
    .catch(err => {
      // Mixpanel.track('Login Failed');
      dispatch({ type: REGISTER_USER_FAILURE, payload: err });
    });
};
export const errorClean = () => {
  return dispatch => dispatch({ type: ERROR_CLEAN });
};
