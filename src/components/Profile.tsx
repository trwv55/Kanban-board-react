import React, { useState, useEffect, useRef } from 'react';
import Avatar from '../assets/user-avatar.svg';


type BodyClick = MouseEvent & {
  path: Node[];
}

const  Profile: React.FC = () =>  {
  const [isLogged, setIsLogged] = useState(true);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsLogged(!isLogged);
  };

  useEffect(() => {
    const handleClickBody = (event: MouseEvent) => { 
      const _event = event as BodyClick;
      if (profileRef.current && !_event.path.includes(profileRef.current)) {
        setIsLogged(true);
      }
    };
    document.body.addEventListener('click', handleClickBody);
    return () => {
      document.body.removeEventListener('click', handleClickBody);
    };
  }, []);

  const popUpList = ['Profile', 'Log-out'];

  const profilePopupOpen = (
    <div className='profile__popup'>
      <div className='profile__label' onClick={handleClick}>
        <img src={Avatar} alt='' />
        <span>&#8743;</span>
      </div>
      <div className='profile__list'>
        <ul>
          {popUpList.map((str, i) => (
            <li key={i}>{str}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const profilePopupClose = (
    <div className='profile__label' onClick={handleClick}>
      <img src={Avatar} alt='' />
      <span>&#8744;</span>
    </div>
  );

  return (
    <div ref={profileRef} className='profile'>
      {isLogged ? profilePopupClose : profilePopupOpen}
    </div>
  );
}

export default Profile;
