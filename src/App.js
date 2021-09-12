import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ROUTES } from './constants';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch';
import Loader from './components/Loader';
import Header from './components/Header';
import ApplicationError from './components/ErrorPages/ApplicationError';
import ApiLoader from './components/ApiLoader/ApiLoader';
import {  useSelector } from "react-redux";


const DashComp = React.lazy(() => import('./components/Dashboard'));
const AddMeal = React.lazy(() => import('./components/AddMeal'));

const  Dashboard = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <DashComp/>
      </Suspense>
    </div>
  );
}
const  ChangeMeal = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <AddMeal/>
      </Suspense>
    </div>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  let isAuthenticated = localStorage.getItem('isAuthenticated');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated === "true" ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: ROUTES.LOGIN,
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function App() {
  const isLoading = useSelector((state) =>  state.meal.loading);
 console.log(isLoading)
  return (
    <>
      { isLoading && <ApiLoader/>}
      <div style = {{display: isLoading ? 'none': 'block'}}>
      <Router>
      <Switch>
        <PrivateRoute exact path={ROUTES.MAIN}>
          <Header></Header>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.ADD_MEAL}>
          <ChangeMeal/>
        </PrivateRoute>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route exact path={ROUTES.APPLICATION_ERROR}>
          <ApplicationError />
        </Route>
        <Route path={ROUTES.NO_MATCH}>
          <NoMatch />
        </Route>
      </Switch>
    </Router></div>
    </>
  );
}

export default App;
