var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8080;
var db = 'mongodb://localhost:27017/DB_URI';

var books = require('./routes/books');
//Api changes 
var users = require('./routes/users');


mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/booksDeva', books);
app.use('/venueuser', users);

app.get('/', function(req, res){
    console.log('app starting on port: '+port)
    res.send('tesdevaa express nodejs mongodb');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});