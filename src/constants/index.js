//routes
export const ROUTES = {
    MAIN: '/',
    APP: '/app',
    ADD_MEAL: '/meal',
    LOGIN: '/login',
    DASHBOARD: '/app/dashboard',
    LOGS: '/app/administration/managelogs',
    USERS: '/app/administration/users',
    APPLICATION_ERROR: '/applicationError',
    NO_MATCH: '*'
  };
  
  export const SELECTED_MEAL = {
    _id: null,
     description: '',
     noOfCal: '',
     created_on: '',
     color: '' // RED, Green 
  }
  export const INTIAL_STATE = {
    loading: false,
    meals: [],
    selected_meal: {...SELECTED_MEAL},
    error: '',
    isAuthorised: false
  }