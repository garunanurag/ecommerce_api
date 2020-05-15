const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

const db = require('./config/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//all the routes through routers/index.js file
app.use('/', require('./routes'));





//start listening on the specified port
app.listen(port, function(err){
    if(err){
        console.log("Error in running the server ", err);
    }
    console.log(`Server up and running. Listening on port ${port}`);
});