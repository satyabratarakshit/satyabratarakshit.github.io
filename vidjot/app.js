const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose' );
const app = express();

//Load Routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');

// passport config
require('./config/passport')(passport);

//DB COnfig
const db = require('./config/database');


//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// connect to mongoose
mongoose.connect(db.mongoURI, {
    useMongoClient: true
})  //local database created
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


//handlebars middlewere
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body perse middlewere
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//static folder middleware
app.use(express.static(path.join(__dirname, 'public')));

//method override middleware
app.use(methodOverride('_method'));

//Express Session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true    
  }));
//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//flash middleware
app.use(flash());

//Gloabal Variable
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

// How middlewere works
// app.use(function(req, res, next){
//     //console.log(Date.now());
//     req.data = Date.now();
//     next();

// });


//install nodemon for continously monitor our application.
// index route

    // Routing refers to determining how an application responds to a client request to a particular endpoint, 
        //which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
    // Each route can have one or more handler functions, which are executed when the route is matched.
    
    //app.METHOD(PATH, HANDLER)===========format
    // app is an instance of express.
    // METHOD is an HTTP request method, in lowercase.
    // PATH is a path on the server.
    // HANDLER is the function executed when the route is matched.

app.get('/', (req, res) =>{
    const title = "welcome";
    res.render('index', {
        title: title
    });  
});

// ABOUT Route
app.get('/about', (req, res) =>{
    res.render('about');
});

//Use Routes
app.use('/ideas', ideas);   //directed to ideas.js 
app.use('/users', users);   //directed to users.js


// normal code
// app.listen(port, function(){
//     console.log("server started on port" + port);
// });

// ES6 code
const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`server started on port ${port}`);
});