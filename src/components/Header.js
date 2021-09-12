import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { action_logout } from '../actions/login';

const Header = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    dispatch(action_logout(history))
  }
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark maroon-bg">
      

      <ul className="navbar-nav ml-auto">
        <li className={`nav-item dropdown`} >
          <div >
            <a  href="#" onClick={logout}>Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
