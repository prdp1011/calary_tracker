import { ACTION } from "./types";
import { Post } from "../config/api";
import { ROUTES } from "../constants";

export const action_login = (payload, history) => {
    return (dispatch) => {
        Post('login', payload)(dispatch)
        .then(response => {
            const countries = response.data
            localStorage.setItem('isAuthenticated', 'true');
            dispatch({type: ACTION.LOGIN});
            history.push(ROUTES.MAIN);
        });
    }
  }
  export const action_logout = (payload, history) => {
    return (dispatch) => {
      Post('logout', payload)(dispatch)
        .then(response => {
          const countries = response.data;
          localStorage.setItem('isAuthenticated', 'false');
          dispatch({type: ACTION.LOGOUT});
          history.push(ROUTES.LOGIN);
          
        });
      
    }
  }

  export const action_signup = (payload, history) => {
    return (dispatch) => {
      Post('users', payload)(dispatch)
        .then(response => {
          localStorage.setItem('isAuthenticated', 'true');
          const countries = response.data;
          dispatch({type: ACTION.SIGN_UP});
          console.log(ROUTES);
          history.push(ROUTES.MAIN);
        });
      
    }
  }

  
  

  
  
  
  