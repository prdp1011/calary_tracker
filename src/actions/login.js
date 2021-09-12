import { ACTION } from "./types";
import { Post } from "../config/api";
import { ROUTES } from "../constants";

export const action_login = (payload, history) => {
    return (dispatch) => {
        Post('login', payload)(dispatch)
        .then(() => {
            localStorage.setItem('isAuthenticated', 'true');
            dispatch({type: ACTION.LOGIN});
            history.push(ROUTES.MAIN);
        }).catch(e => console.log(e));
    }
  }
  export const action_logout = (payload, history) => {
    return (dispatch) => {
      Post('logout', payload)(dispatch, history)
        .then(() => {
          localStorage.setItem('isAuthenticated', 'false');
          dispatch({type: ACTION.LOGOUT});
          history.push(ROUTES.LOGIN);
        }).catch(e => console.log(e));
      
    }
  }

  export const action_signup = (payload, history) => {
    return (dispatch) => {
      Post('users', payload)(dispatch)
        .then(() => {
          localStorage.setItem('isAuthenticated', 'true');
          dispatch({type: ACTION.SIGN_UP});
          console.log(ROUTES);
          history.push(ROUTES.MAIN);
        });
      
    }
  }

  
  

  
  
  
  