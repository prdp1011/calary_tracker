import { ACTION } from "../actions/types";
import { deepCopy } from "../helpers";

const initialState = {
  isAuthorised: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return deepCopy({
        ...state,
        isAuthorised: true
    })
    case ACTION.SIGN_UP:
      return deepCopy({
        ...state,
        isAuthorised: true
    })
    case ACTION.LOGOUT:
      return {
        ...state,
        isAuthorised: false
    }
    default: return state
  }
}

export default loginReducer;
