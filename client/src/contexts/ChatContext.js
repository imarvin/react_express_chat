import React, { createContext, useState, useEffect } from 'react';
//import { chatData } from '../chat_json';

export const ChatContext = createContext();

const ChatContextProvider = (props) => {
  // by default this app uses backend express server to fetch and post data
  // this can be changed to false in .env 
  const isExpress = process.env.REACT_APP_EXPRESS_SERVER === "true" ? true : false;

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  // express server is running on a different address (localhost:5000)
  //    I added a proxy in package.json which allows me to use 
  //    relative path in the fetch url.
  const GET_URL = '/api/get/chat';
  const POST_URL = '/api/post/chat';

  // useEffect to fetch on first render
  useEffect(() => {
    if (isExpress) {
      //express api endpoint for fetching chat data
      const fetchData = async () => {
        try {
          // express api endpoint for fetching chat data
          const res = await fetch(GET_URL);
          const data = await res.json();
          setUsers([...data.users]);
          setMessages([...data.posts]);
          console.log('data fetched', data);
        } catch (error) {
          // error message for bad get request
          console.log('GET error,', error.message);
        }
      };
      fetchData();
    } else {
      // fallback for client only with no backend api for get
      //const data = chatData;
      const { data } = require('../chat_json');
      setUsers([...data.users]);
      setMessages([...data.posts]);
      console.log('data imported', data);
    }
  }, [isExpress]);

  const postMessage = (message) => {
    if (isExpress) {
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
          // error message for bad get request
          console.log('POST error:', error.message);
        });
    } else {
      // fall back for client-only with no backend api for post
      setMessages([...messages, { ...message }])
    }
  };

  return (
    <ChatContext.Provider value={{ users, messages, postMessage }}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatContextProvider;
