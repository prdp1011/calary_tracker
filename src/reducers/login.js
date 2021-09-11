import { ACTION } from "../actions/types";

const initialState = {
  isAuthorised: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTION.LOGIN:
      return {
        ...state,
        loading: false,
        isAuthorised: true
    }
    case ACTION.SIGN_UP:
      return {
        ...state,
        isAuthorised: true,
        loading: false,
    }
    case ACTION.LOGOUT:
      return {
        ...state,
        isAuthorised: false,
        loading: false,
    }

    default: return state
  }
}

export default loginReducer;
