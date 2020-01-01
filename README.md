# React Express Chat App

> Full stack app with React and Express. Run client and server concurrently. 

## Quick Start

```
Open terminal and run the following commands inside the app folder(/better_chat)

1. npm install 
2. npm run client-install
3. npm run dev

On your browser go to this address to see the app: 
http://localhost:3000


bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## App Info

This is a simple chat app that fetches data from a json file.  New chat messages does not persist.

Express Server - ./server.js
React - ./client/App.js

## Notes and comments

The backend is using Express server (server.js) which has a very basic setup with two routes: app.get, app.post.
app.get('/api/get/chat') - for fetching data.json
app.post('/api/post/chat') - for posting new messages (doesn't persist) returns success status(200)

For the client/frontend, I decided to use React, which is inside the '/client' folder.

React can run indepently regardless of the framework or library in the stack.
React allows for state management, and with the new React hooks it makes it easier to share 
states/data in different components without the dreaded prop-drilling.  

I structured my folders into components and contexts to keep like-files together.

The chat code starts in app.js and the rest are modularized by components and contexts.

All the data from data.json is fetched in ChatContext which provides the users and posts.

I created an AuthContext to show what it would look like if there was a real authentication.
For this app, Auth is faked by hard coding the authentication variables.

Another great reason to use React is it uses ES6, which has a lot of new features.
With es6 I can use arrow functions, spread operators, destructuring, promises, all of which can be seen 
throughout the different js files.  All together it creates a more cleaner and more readable code.

React also has jsx templating which makes it easier to integrate html into the react code.

For CSS (index.scss), I am using BEM naming convention as to keep a low specificity on the css selectors.
I used SASS for my css preprocessor to allow for css variables, mixins, and nested rules.
For the layout I decided to use CSS grid, which initially I used a traditional float and absolute position.
However, I thought it would be nice to show some of the newer CSS technologies avaialable.

I made the layout to be mobile-first meaning all default css rules are for mobile, and then media queries
for medium to large screen sizes.

As for requirements, I checked off the required specs but I could have added extra features.
I wanted to add an initial login page with pre-filled username and password, which then transitions 
to the main chat page. This would've added a nice user experience.

### Author

Marvin Orendain

### Version

1.0.0

### License

This project is licensed under the MIT License