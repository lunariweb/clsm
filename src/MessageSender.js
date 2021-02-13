import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmojiconIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase";
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  });  




function MessageSender() {
    

    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    const [value, setValue] = React.useState("");
    const [hover, setHover] = React.useState("");
    const classes = useStyles();


    // might have to chnage the prevemt default function
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            rate: value,
        });

        //db magic

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form type="POST">
                    <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                     className="messageSender__input" placeholder={`What do you think about our library, ${user.displayName}? `} required/>
                    
                    
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL (Optional) " />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">

                <div className="messageSender__option">

                <Rating
                     className="classes"
                     name="hover-feedback"
                     value={value}
                     precision={0.5}
                     onChange={(event, newValue) => {
                         setValue(newValue);
                     }}
                         onChangeActive={(event, newHover) => {
                             setHover(newHover);
                         }}
                />
                {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}

                </div>
                


                
                <div className="messageSender__option">

                <IconButton onClick={handleSubmit} style={{ display: "flex", flexDirection: "column" , marginLeft: "80%" }}>
                    <SendIcon fontSize="large"/>
                </IconButton>


                </div>
                
            </div>
        </div>
    )
}

export default MessageSender;
