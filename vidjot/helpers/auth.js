module.exports = {
    ensureAuthenticated : function(req, res, next){
        if(req.isAuthenticated()){      //with passport
            return next();
        }
        req.flash('error_msg', 'Not Authorized');
        res.redirect('/users/login');
    }
}