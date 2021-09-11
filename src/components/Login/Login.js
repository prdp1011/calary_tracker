import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';
import { ROUTES } from '../../constants';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const history = useHistory();

  useEffect(() => {
   
  }, []);
  
  const handleInput = (value, field) => {
    setLoginInfo(loginInfo => ({ ...loginInfo, [field]: value }));
  }

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');

    history.push(ROUTES.MAIN);

    let authToken = JSON.parse(localStorage.getItem('authToken'));
    if (authToken && authToken.userName === loginInfo.userName) {
      if (authToken.password === loginInfo.password) {
        localStorage.setItem('isAuthenticated', 'true');
        history.push(ROUTES.MAIN);
      } else {
        localStorage.setItem('isAuthenticated', 'false');
        history.push('/login');
      }
    } else {
      localStorage.setItem('isAuthenticated', 'false');
      history.push('/login');
    }
  }

  const registerNavigate = () => {

  }

  return (
    <div id="login">
        <h3 className="text-center text-white pt-5">Calories Login form</h3>
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form" action="" method="post">
                        <h3 className="text-center text-info">Login</h3>
                        <div className="form-group">
                            <label htmlFor="email" className="text-info">Email:</label><br/>
                            <input type="email" name="email" id="email" className="form-control"
                            value={loginInfo.email}
                            onChange={(e) => handleInput(e.target.value, "email")}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-info">Password:</label><br/>
                            <input type="text" name="password" id="password" className="form-control"
                            value={loginInfo.password}
                            onChange={(e) => handleInput(e.target.value, "password")}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={handleLogin} name="submit" className="btn btn-info btn-md" value="submit"/>
                        </div>
                        <div id="register-link" className="text-right">
                            <button className="text-info" onClick={() => registerNavigate()}>Register here</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>  </div>
  
  
  
  
  
  );
};

export default Login;



