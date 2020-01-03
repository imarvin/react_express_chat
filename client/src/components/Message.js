import React, { useContext, useState } from 'react';
import MessageCard from './MessageCard';
import Moment from 'react-moment';
import { AuthContext } from '../contexts/AuthContext';

const Message = (props) => {
    const { message, user } = props;
    const { authId } = useContext(AuthContext);

    const isAuth = message.user === authId;
    const avatar = isAuth ? 'better-icon.svg' : `${user.username}.jpg`;

    const [showCard, setShowCard] = useState(false);

    return (
        <>
            {message &&
                <li className="chat__message" onClick={() => setShowCard(!showCard)} data-id={message.id} data-is-auth={isAuth} data-flip={showCard} >
                    <div className="chat__message-avatar">
                        <img className="chat__message-avatar-img" src={`./images/${avatar}`} alt={user.real_name} />
                    </div>
                    <div className="chat__message-wrapper">
                        <Moment className="chat__message-timestamp" fromNow date={message.ts} interval={30000}></Moment>
                        <div className="chat__message-user">
                            <span className="chat__message-realname">{user.real_name}</span>
                            <span className="chat__message-username">@{user.username}</span>
                        </div>
                        <MessageCard message={message} showCard={showCard} />
                    </div>
                </li>
            }
        </>
    )
}

export default Message;