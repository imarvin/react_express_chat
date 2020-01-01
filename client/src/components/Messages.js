import React, { useContext, useEffect, useRef } from 'react';   
import Message from './Message';
import { ChatContext } from '../contexts/ChatContext';

const Messages = () => {
    const { users, messages } = useContext(ChatContext);

    // scroll chat container to bottom to see the latest chat entry
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    };
    useEffect(scrollToBottom, [messages]);

    return (
        <>
            <ul className="chat__messages">
                {messages &&
                    messages.map(msg => {
                        // get user info
                        const user = users.find(user => user.id === msg.user);
                        return (
                            <Message key={msg.id} message={msg} user={user} />
                        )
                    })
                }
            </ul>
            <div ref={messagesEndRef} />
        </>
    )
}

export default Messages;
