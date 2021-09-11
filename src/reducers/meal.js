import { ACTION } from "../actions/types";
import { SELECTED_MEAL, INTIAL_STATE } from "../constants";

const mealReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ACTION.LOADING:
      return {
        ...state,
        loading: true
      }
    case ACTION.FETCH_MEALS:
      return {
        ...state,
        loading: false,
        meals: action.payload
    }
    case ACTION.SELECTED_MEAL:
      return {
        ...state,
        selected_meal: action.payload || {...SELECTED_MEAL},
    }
    case ACTION.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default mealReducer;
