import { ACTION } from "./types";
import {Get, Post, Delete, Patch} from "../config/api";
import { ROUTES } from "../constants";



export const fetchMeals = (history) => {
  return (dispatch) => {
    Get('users/items')(dispatch, history)
      .then(response => {
        const res = response.data;
        console.log(res);
        const items = res?.items || [];
        if(items?.length){
          let current = res.items[0];
          let count = +current.noOfCal;
          let refs = [current]; 
          for(let i = 1; i< items.length; i++){
            const next = items[i]; 
            if(current.created_on === next.created_on){
              count += +next.noOfCal;
              refs.push(next);
              if(count >= 2000){
                refs.forEach((ele) => {
                  ele.color = 'red';
                })
              }
            } else {
              current = next;
              refs = [current]; 
            }
          }

        }
        
        dispatch(fetchMeal(items))
      }).catch(e => console.log(e));
  }
}
export const createMeal = (payload, history) => {
  return (dispatch) => {
    Post('users/items', payload)(dispatch)
    .then(() => {
      history.push(ROUTES.MAIN)
    }).catch(e => console.log(e));
    
  }
}
export const updateMeal = (payload, id, history) => {
 return (dispatch) => {
  Patch('users/items/' +id, payload)(dispatch)
  .then(response => {
    history.push(ROUTES.MAIN)
  }).catch(e => console.log(e));
}
}

export const removeMeal = (id) => {
  return (dispatch) => {
   Delete('users/items/'+ id)(dispatch)
   .then(response => {
    //  const countries = response.data
    //  dispatch(fetchMeal(countries))
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

