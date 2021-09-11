import { ACTION } from "../actions/types";
const selected_meal = {
   description: '',
   noOfCal: '',
   created_on: '',
   color: '' // RED, Green 
}
const initialState = {
  loading: false,
  meals: [],
  selected_meal,
  error: '',
  isAuthorised: false
}

const mealReducer = (state = initialState, action) => {
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
        selected_meal: action.payload || {...selected_meal},
    }
    case ACTION.ERROR:
      return {
        loading: false,
        error: action.payload
      }
    default: return state
  }
}

export default mealReducer;
