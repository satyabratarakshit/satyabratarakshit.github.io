const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');


const app = express();

//passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

//index Route
app.get('/', (req, res) => {
    res.send("it works!");
});


//use Routes ===middleware
app.use('/auth', auth);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
});