import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';
import db from './firebase';

function Feed() {

    //real time firestore connection

    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))  
        ));
    }, [])

    return (
        <div className="feed">
            {/* stories row */}
            <StoryReel />
            {/* message sender */}
            <MessageSender />

            {posts.map((post) => (
                <Post 
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                    rate={post.data.rate}
                    />
            ))}
            
        </div>
    )
}

export default Feed;
