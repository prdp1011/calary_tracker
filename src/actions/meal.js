import { ACTION } from "./types";
import {Get, Post, Delete, Patch} from "../config/api";



export const fetchMeals = () => {
  return (dispatch) => {
    Get('users/items')(dispatch)
      .then(response => {
        const countries = response.data
        dispatch(fetchMeal(countries))
      });
  }
}
export const createMeal = (payload) => {
  return (dispatch) => {
    Post('meal', payload)(dispatch)
      .then(response => {
        const countries = response.data
        dispatch(fetchMeal(countries))
      });
    
  }
}
export const updateMeal = (payload) => {
 return (dispatch) => {
  Patch('meal', payload)(dispatch)
  .then(response => {
    const countries = response.data
    dispatch(fetchMeal(countries))
  });
}
}

export const removeMeal = (payload) => {
  return (dispatch) => {
   Delete('meal')(dispatch)
   .then(response => {
     const countries = response.data
     dispatch(fetchMeal(countries))
   });
 }
 }


export const fetchMeal = countries => {
  return {
    type: ACTION.FETCH_MEALS,
    payload: countries
  }
}


