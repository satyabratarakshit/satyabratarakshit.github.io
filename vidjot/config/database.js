if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI : 'mongodb://satya1234:satya1234@ds129796.mlab.com:29796/ideavid-prod'}  //cloud database
} else {
    module.exports = {mongoURI : 'mongodb://localhost/vidjot-dev'}  //local database
}