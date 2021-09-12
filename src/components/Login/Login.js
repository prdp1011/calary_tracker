import React, { useState } from 'react';
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
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInput = (value, field) => {
    setLoginInfo(loginInfo => ({ ...loginInfo, [field]: value }));
  }


  const handleLogin = () => {
    setSubmitted(true);
    if (loginInfo.email && loginInfo.password) {
      if(isLogin){
        dispatch(action_login(loginInfo, history));
      } else {
        dispatch(action_signup(loginInfo, history));

      }
    }
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
                            <input type="email" name="email" id="email"
                            className={'form-control' + (submitted && !loginInfo.email ? ' is-invalid' : '')}
                            value={loginInfo.email}
                            onChange={(e) => handleInput(e.target.value, "email")}
                            />
                            {submitted && !loginInfo.email &&
                                <div className="invalid-feedback">Email is required</div>
                            }
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-info">Password:</label><br/>
                            <input type="password" name="password" id="password" 
                            className={'form-control' + (submitted && !loginInfo.password ? ' is-invalid' : '')}
                            value={loginInfo.password}
                            onChange={(e) => handleInput(e.target.value, "password")}
                            />
                            {submitted && !loginInfo.password &&
                                <div className="invalid-feedback">Password is required</div>
                            }
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



