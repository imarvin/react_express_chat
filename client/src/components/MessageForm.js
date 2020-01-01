import React, { useContext, useState } from 'react';
import uuid from 'uuid/v1';
import SendIcon from '@material-ui/icons/Send';
import { ChatContext } from '../contexts/ChatContext';
import { AuthContext } from '../contexts/AuthContext';

const MessageForm = () => {
    const { postMessage } = useContext(ChatContext);
    const { authId } = useContext(AuthContext);
    const [ message, setMessage ] = useState('');
    
    // maximum number of characters for new chat entry
    const maxLength = 140;
    const [ charsLeft, setCharsLeft ] = useState(maxLength);

    const onChangeHandler = (e) => {
        e.preventDefault()
        const { value } = e.target;
        setCharsLeft(maxLength - value.length);
        setMessage(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Message must include alphanumeric characters.
        if (message.trim().length > 0) {
            const msg = {
                id: uuid(),
                user: authId,
                message: message,
                ts: Date.now(),
            };
            postMessage(msg);
        } else {
            console.log('Form error: New message must include characters other than whitespace.');
        }
        // reset message
        setMessage('');
        setCharsLeft(maxLength);
    }

    return (
        <div className="chat__form">
            <form className="chat__form-form" onSubmit={handleSubmit} >
                <span className="chat__form-chars">{charsLeft}</span>
                <input className="chat__form-input" name="message" placeholder="Whats happening?" onChange={onChangeHandler} value={message} maxLength={maxLength} required />
                <button className="chat__form-button" type="submit"><SendIcon></SendIcon></button>
            </form>
        </div>
    )
}

export default MessageForm;
