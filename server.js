// This is a basic express server with two routes
//
// app.get - for fetching data.json
// app.post - for posting new messages (doesn't persist)
// 
// test api end points on localhost:5000

const express = require('express');
const data = require('../better_chat_app/data.json');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/get/chat/', (req, res) => {
    res.json(data);
});

app.post('/api/post/chat/', (req, res) => {
    console.log('req.body', req.body)
    res.send('Post success!');
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));