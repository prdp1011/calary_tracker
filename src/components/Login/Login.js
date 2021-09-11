import React, { useState, useEffect } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux'
import { action_login, action_signup } from '../../actions/login'
import { useHistory } from 'react-router-dom';
 

const Login = () => {
  const intial = {
    email: '', password: ''
  }
  const [loginInfo, setLoginInfo] = useState(intial);
  const [isLogin, setLoginPage] = useState(true);
  // const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleInput = (value, field) => {
    setLoginInfo(loginInfo => ({ ...loginInfo, [field]: value }));
  }

  const handleLogin = () => {

    if(isLogin){
      dispatch(action_login(loginInfo, history));
    } else {
      dispatch(action_signup(loginInfo, history));

    }
    // localStorage.setItem('isAuthenticated', 'true');

    // history.push(ROUTES.MAIN);

    // let authToken = JSON.parse(localStorage.getItem('authToken'));
    // if (authToken && authToken.userName === loginInfo.userName) {
    //   if (authToken.password === loginInfo.password) {
    //     localStorage.setItem('isAuthenticated', 'true');
    //     history.push(ROUTES.MAIN);
    //   } else {
    //     localStorage.setItem('isAuthenticated', 'false');
    //     history.push('/login');
    //   }
    // } else {
    //   localStorage.setItem('isAuthenticated', 'false');
    //   history.push('/login');
    // }
  }

  const registerNavigate = () => {
    setLoginInfo({...intial})
    setLoginPage((st) => !st);
  }

  return (
    <div id="login">
        <h3 className="text-center text-white pt-5">Check Your Calories</h3>
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form" action="" method="post">
                        <h3 className="text-center text-info">{isLogin ? 'Login' : 'Register'}</h3>
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
                            <input type="button" onClick={handleLogin} name="submit" className="btn btn-info btn-md" value="submit"/>
                        </div>
                        <div id="register-link" className="text-right">
                              <button type="button" className="text-info" onClick={() => registerNavigate()}>
                                {isLogin ? 'Register here' : 'Login' } 
                              </button>
                            </div>
                          
                        
                    </form>
                </div>
            </div>
        </div>
    </div>  </div>
  
  
  
  
  
  );
};

export default Login;



