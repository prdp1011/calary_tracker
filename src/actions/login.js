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
          dispatch({type: ACTION.LOGOUT});
          dispatch({type: ACTION.LOADED});
          
          localStorage.setItem('isAuthenticated', 'false');
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
          history.push(ROUTES.MAIN);
        });
      
    }
  }

  
  

  
  
  
  