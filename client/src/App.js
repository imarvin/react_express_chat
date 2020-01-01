//
// app.js
//
// This version is my first iteration of the app in one single js file.
// Doing this helps me structure my components and context providers.
// I'm also using function components to allow for react hooks.

import React, { createContext } from 'react';

// components
const Message = () => {
  return (
    <>
    </>
  )
}

const Messages = () => {
  return (
    <>
    </>
  )
}

const MessageForm = () => {
  return (
    <>
    </>
  )
}

// context providers
const AuthContext = createContext();
const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider value={}>
      {props.children}
    </AuthContext.Provider>
  )
}

const ChatContext = createContext();
const ChatContextProvider = (props) => {
  return (
    <ChatContext.Provider value={}>
        {props.children}
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
