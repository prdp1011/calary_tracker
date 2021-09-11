import React from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../constants';

const Header = () => {

  const history = useHistory();

  const logout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    history.push(ROUTES.LOGIN);
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
