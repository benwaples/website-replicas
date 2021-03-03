import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header(): JSX.Element {
  return (
    <header>
      <h1>Website Replicas</h1>
      <div className="navbar">
        <NavLink to="blockbuster" activeClassName="currentLink">
          BlockBuster
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
