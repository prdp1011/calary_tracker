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
        loading: false,
        isAuthorised: true
    })
    case ACTION.SIGN_UP:
      return deepCopy({
        ...state,
        isAuthorised: true,
        loading: false,
    })
    case ACTION.LOGOUT:
      return deepCopy({
        ...state,
        isAuthorised: false,
        loading: false,
    })
    default: return state
  }
}

export default loginReducer;
