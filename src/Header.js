import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar, IconButton } from '@material-ui/core'; 
import { useStateValue } from './StateProvider';
import AssignmentIcon from '@material-ui/icons/Assignment';


function Header() {

    const [{ user }, dispatch]= useStateValue();


    return (
        <div className="header">
            <div className="header__left">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png"  alt="" /> 

                
            </div>

            <div className="header__center">
                <div className="header__option">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="header__option header__option--active">
                    <AssignmentIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <ChatIcon fontSize="large" />
                </div>

            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                
                
                <IconButton>
                    <ExitToAppIcon />
                </IconButton>

                

            </div>

        </div>
    )
}

export default Header;
