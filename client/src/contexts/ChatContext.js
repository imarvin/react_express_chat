import React, { createContext, useState, useEffect } from 'react';

export const ChatContext = createContext();

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
        {props.children}
    </ChatContext.Provider>
  )
}

export default ChatContextProvider;
