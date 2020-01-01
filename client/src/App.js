// app.js
//
// This version is my first iteration of the app in one single js file.
// Doing this helps me structure my components and context providers.
// I'm also using function components to allow for react hooks.

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import uuid from 'uuid/v1';
import Moment from 'react-moment';
import SendIcon from '@material-ui/icons/Send';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

// components
const Message = (props) => {
  const { message, user } = props;
  const { authId } = useContext(AuthContext);

  const isAuth = message.user === authId;
  const avatar = isAuth ? 'better-icon.svg' : `${user.username}.jpg`;

  const [ showCard, setShowCard ] = useState(false);
  
  return (
    <>
      {message &&
        <li className="chat__message" onClick={() => setShowCard(!showCard)} data-id={message.id} data-is-auth={isAuth} data-card-flip={showCard} >           
            <div className="chat__message-avatar">
                <img className="chat__message-avatar-img" src={`/images/${avatar}`} alt={user.real_name} />
            </div>
            <div className="chat__message-wrapper">
                <Moment className="chat__message-timestamp" fromNow date={message.ts} interval={30000}></Moment>
                <div className="chat__message-user">
                  <span className="chat__message-realname">{user.real_name}</span>
                  <span className="chat__message-username">@{user.username}</span>
                </div>
                <div className="chat__card">
                    <div className="chat__card-container" >
                        <div className="chat__card-flipper" data-flip={showCard}>

                            <div className="chat__card-front">
                                <div className="chat__message-content">{message.message}</div>
                            </div>

                            <div className="chat__card-back">
                                <div className="chat__card-content">
                                    <CalendarTodayIcon></CalendarTodayIcon> Active Since &nbsp;<Moment date={message.ts} format="MMM YYYY"></Moment>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </li>
      }
    </>
  )
}

const Messages = () => {
  const { users, messages } = useContext(ChatContext);
  
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
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

const MessageForm = () => {
  const { postMessage } = useContext(ChatContext);
  const { authId } = useContext(AuthContext);
  const [ message, setMessage ] = useState('');
  
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
    console.log('handleSubmit message', message, message.trim().length);
    // Message must include alphanumeric characters; whitespaces only not allower.
    if(message.trim().length > 0) {
        const msg = {
          "id": uuid(),
          "user": authId,
          "message": message,
          "ts": Date.now(),
        };
        postMessage(msg);
        setMessage('')
        setCharsLeft(maxLength);
    } else {
      console.log('Form error: New message must include characters other than whitespace.');
      setMessage('');
      setCharsLeft(maxLength);
    }
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

// contexts providers
const AuthContext = createContext();
const AuthContextProvider = (props) => {
  const authId = 0; // user id of default "logged in" user
  return (
    <AuthContext.Provider value={{ isAuthenticated: true, authId }}>
      {props.children}
    </AuthContext.Provider>
  )
}

const ChatContext = createContext();
const ChatContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // express server is running on a different address (localhost:5000)
  //    I added a proxy in package.json which allows me to use 
  //    relative path in the fetch url.
  const GET_URL = '/api/get/chat';
  const POST_URL = '/api/post/chat';

  // useEffect to fetch on first render
  useEffect(() => {
    // express api endpoint for fetching chat data
    fetch(GET_URL)
      .then(res => res.json())
      .then(data => {
        setUsers([...data.users]);
        setMessages([...data.posts]);
        console.log('data fetched', data);
      })
      .catch(error => {
        console.log('get error,', error.message);
      });
  }, [])

  const postMessage = (message) => {
      fetch(POST_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message)
      })
      .then(res => {
        if (res.ok) {
          setMessages([...messages, { ...message }])
        } else {
          throw new Error('Oops! Something went wrong with the fetch.');
        }
      })
      .catch(error => {
        console.log('POST error:', error.message);
      });
  }

  return (
    <ChatContext.Provider value={{ users, messages, postMessage }}>
      <div className="chat">
        {props.children}
      </div>
    </ChatContext.Provider>
  )
}

const App = () => {
  return (
    <div className="App">
      <ChatContextProvider>
        <AuthContextProvider>
          <Messages />
          <MessageForm />
        </AuthContextProvider>
      </ChatContextProvider>
    </div>
  );
}

export default App;
