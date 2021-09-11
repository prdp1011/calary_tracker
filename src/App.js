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
import AddMeal from './components/AddMeal';
import NoMatch from './components/NoMatch';
import Loader from './components/Loader';
import Header from './components/Header';
import ApplicationError from './components/ErrorPages/ApplicationError';


const DashComp = React.lazy(() => import('./components/Dashboard'));

const  Dashboard = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
        <DashComp/>
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
  return (
      <Router>
      <Switch>
        <PrivateRoute exact path={ROUTES.MAIN}>
          <Header></Header>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.ADD_MEAL}>
          <AddMeal/>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path={ROUTES.APPLICATION_ERROR}>
          <ApplicationError />
        </Route>
        <Route path={ROUTES.NO_MATCH}>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
