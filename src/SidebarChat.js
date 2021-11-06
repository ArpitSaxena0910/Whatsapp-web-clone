import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from "./firebase";

function SidebarChat( {id, name, addNewChat} ) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5));
    }, []);

    const createChat = () => {
        const roomname = prompt("Please enter the name for chat");

        if(roomname){
            // do some db action..
            db.collection('rooms').add({
                name : roomname,
            });
        }
    };

    return !addNewChat ? (
        <div className = "sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className = "sidebarChat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick = {createChat} className = "sidebarChat">
            <h2> Add New Chat</h2>
        </div>
    );
}

export default SidebarChat;