import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

function Header() {
  return (
    <div className="header-wrapper">
      <Link to={'/'}>
        <h2>Awesome Kanban Board</h2>
      </Link>
      <Profile />
    </div>
  );
}

export default Header;
