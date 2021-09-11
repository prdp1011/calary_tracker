import axios from 'axios';

import { startloading, apiFailure } from "../actions/common";


const Api = axios;
// .create({
//   baseURL: 'http://localhost:9000/'
// });
const Get =  (url) => async (dispatch) => {
    dispatch(startloading())
    try {
      const response = await Api.get(url);
      return response;
    } catch (error) {
      dispatch(apiFailure(error.message));
      return Promise.reject(error);
    }
}

const Post = (url, data) => async (dispatch) => {
    dispatch(startloading())
    try {
      const response = await Api.post(url, data);
      return response;
    } catch (error) {
      dispatch(apiFailure(error.message));
      return Promise.reject(error);
    }
}

const Patch = (url, data) => async (dispatch) => {
    dispatch(startloading())
    try {
      const response = await Api.patch(url, data);
      return response;
    } catch (error) {
      dispatch(apiFailure(error.message));
      return Promise.reject(error);
    }
}
const Delete = (url) => async (dispatch) => {
    dispatch(startloading())
    try {
      const response = await Api.delete(url);
      return response;
    } catch (error) {
      dispatch(apiFailure(error.message));
      return Promise.reject(error);
    }
}
export {Get, Post, Patch, Delete}  ;