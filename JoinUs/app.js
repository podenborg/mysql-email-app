var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host      : 'localhost',
    user      : 'podenborg',
    database  : 'join_us'
});

app.get("/", function(req, res){
    // find count of users in database
    var q = 'SELECT COUNT(*) AS count FROM users';
    
    connection.query(q, function(err, results){
        if (err) throw err;
        var count = results[0].count;
        
        //respond with count
        res.render("home", {count: count});
    });
    
});

app.post("/register", function(req, res){
    // post route
    var person = {
        email: req.body.email
    }
   
    connection.query('INSERT INTO users SET ?', person, function(err, results){
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('App is listening on Cloud 9\'s ports.');
});