import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import Avatar from '../assets/user-avatar.svg';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogged: true,
        };
        this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick = () => {
        this.setState({
            isLogged: !this.state.isLogged
        });
    }

    render(){
        const popUpList = ['Profile', 'Log-out'];
        
        const profilePopupOpen = (
            <div className='profile__popup' >
                 <div className='profile__label' onClick={this.handleClick}>
                    <img src={Avatar}  alt=''/>
                    <span>&#8743;</span>
                 </div>
                 <div className='profile__list'>
                 <ul>
                    {popUpList.map((str, i) => (
                        <li 
                        key={i}
                        >
                            {str}
                        </li>
                    ))}
                </ul>

                 </div>
            </div> 
        );

        const profilePopupClose = (
            <div className='profile__label' onClick={this.handleClick}>
                <img src={Avatar}  alt=''/>
                <span>&#8744;</span>
            </div>
        ); 

        return(

            <div className='profile'>
                {this.state.isLogged ? profilePopupClose : profilePopupOpen}
            </div>   
        )
    }
}

export default Profile;