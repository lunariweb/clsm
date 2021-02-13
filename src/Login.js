import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //signin fucntion
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            
        }).catch(error => alert(error.message))
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png" />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login;
