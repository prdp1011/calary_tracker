import { ACTION } from "./types";
import {Get, Post, Delete, Patch} from "../config/api";
import { ROUTES } from "../constants";
import { modifiedMeals } from "../helpers";



export const fetchMeals = (history) => {
  return (dispatch) => {
    Get('users/items')(dispatch, history)
      .then(response => {
        const res = response.data;
        const items = modifiedMeals(res);
        dispatch(fetchMeal(items));
      }).catch(e => console.log(e));
  }
}
export const createMeal = (payload, history) => {
  return (dispatch) => {
    Post('users/items', payload)(dispatch, history)
    .then(() => {
      history.push(ROUTES.MAIN)
    }).catch(e => console.log(e));
    
  }
}
export const updateMeal = (payload, id, history) => {
 return (dispatch) => {
  Patch('users/items/' + id, payload)(dispatch, history)
  .then(response => {
    history.push(ROUTES.MAIN)
  }).catch(e => console.log(e));
}
}

export const removeMeal = (id, history) => {
  return (dispatch) => {
   Delete('users/items/'+ id)(dispatch, history)
   .then((response) => {
    const res = response.data;
    const items = modifiedMeals(res);
    dispatch(fetchMeal(items))
   }).catch(e => console.log(e));
 }
 }


export const fetchMeal = all => {
  return {
    type: ACTION.FETCH_MEALS,
    payload: all
  }
}

export const fetchSelectedMeal = meal => {
  return {
    type: ACTION.SELECTED_MEAL,
    payload: meal
  }
}

