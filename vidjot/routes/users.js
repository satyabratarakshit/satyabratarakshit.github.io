const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();

//Load User Modal
require('../models/User');
const User = mongoose.model('users');

//User Login Route
router.get('/login', (req, res) =>{
    res.render("users/login");
});

//User Register Route
router.get('/register', (req, res) =>{
    res.render("users/register");
});

// Login Form Post
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/ideas',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

//Register form Post
router.post('/register', (req, res) =>{
    // console.log(req.body);
    // res.send("Register");
    let errors =[];
    if (req.body.password != req.body.confirm){
        errors.push({text: 'Password Mismatch'});
    }
    if(req.body.password.length <4){
        errors.push({text: 'Password must be atleast 4 character'});
    }
    if(errors.length > 0){
        res.render('users/register',{
            errors : errors,
            name : req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirm: req.body.confirm
        });
    } else{
        User.findOne({email : req.body.email})
            .then(user => {
                if(user){
                    req.flash('error_msg', 'Email alrady taken, Choose another Email ID');
                    res.redirect('/users/register');
                } else {
                    const newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    });
                    bcrypt.genSalt(10, (err, salt) =>{
                        bcrypt.hash(newUser.password, salt, (err, hash) =>{
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user =>{
                                    req.flash('success_msg', "You are now registered and can login");
                                    res.redirect('/users/login');
                                })
                                .catch(err =>{
                                    console.log(err);
                                    return;
                                });
                        });
                    });
                }
            });        
        // console.log(newUser)
        // res.send("passed");
    }
});

//User Logout 

router.get('/logout', (req, res) =>{
    req.logout();
    req.flash('success_msg', 'You are successfully Logout!');
    res.redirect('/users/login');
});
module.exports = router;