// app.js

import React from 'react';
import Messages from './components/Messages';
import MessageForm from './components/MessageForm';
import ChatContextProvider from './contexts/ChatContext';
import AuthContextProvider from './contexts/AuthContext';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <ChatContextProvider>
        <AuthContextProvider>
          <div className="chat">
            <Messages />
            <MessageForm />
          </div>
        </AuthContextProvider>
      </ChatContextProvider>
    </div>
  );
}

export default App;
