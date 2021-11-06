import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons/';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input,setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random*5));
    }, []);

    const sendMessage = (e) => {
        console.log("You Entered : ", input);

        setInput("");
    }

    return (
        <div className = "chat">
            <div className = "chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className = "chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at ...</p>
                </div>
                <div className = "chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className = "chat_body">
                <div className={`chat_message ${true && "chat_receiver"}`}>
                    <p> 
                        <span className="chat_name">Arpit Saxena</span>
                        Hey Guys
                        <span className="chat_timestamp">4:42pm</span>
                    </p>
                </div>
            </div>

            <div className = "chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                    type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;