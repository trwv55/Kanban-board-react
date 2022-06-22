import React from 'react';
import Profile from './Profile';

function Header () {
    return (
        <div className='header-wrapper'>
            <h2>Awesome Kanban Board</h2>
            <Profile />
        </div>
    )
}

export default Header;