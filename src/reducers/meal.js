import { ACTION } from "../actions/types";
import { SELECTED_MEAL, INTIAL_STATE } from "../constants";
import { deepCopy } from "../helpers";

const mealReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ACTION.LOADING:
      return deepCopy({
        ...state,
        loading: true
      })
    case ACTION.FETCH_MEALS:
      return deepCopy({
        ...state,
        loading: false,
        meals: action.payload
    })
    case ACTION.SELECTED_MEAL:
      return deepCopy({
        ...state,
        loading: false,
        selected_meal: action.payload || {...SELECTED_MEAL},
    })
    case ACTION.ERROR:
      return deepCopy({
        ...state,
        loading: false,
        error: action.payload
      })
      case ACTION.LOADED:
      return deepCopy({
        ...state,
        loading: false
      })
    default: return state
  }
}

export default mealReducer;
