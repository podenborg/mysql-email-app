var faker = require('faker');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host      : 'localhost',
    user      : 'podenborg',
    database  : 'join_us'
});

// var q = 'SELECT COUNT(*) AS total FROM users';

// connection.query(q, function(err, results, fields){
//     if (err) throw err;
//     console.log(results[0].total);
// });

// inserting data
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

// connection.query(q, function(err, results, fields){
//     if (err) throw err;
//     console.log(results);
// });

// inserting data round 2
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };

// connection.query('INSERT INTO users SET ?', person, function(err, result){
//     if (err) throw err;
//     console.log(result);
// });


// Insert LOTS of data
var data = [];

for (var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, result){
    console.log(err);
    console.log(result);
});


// end the mysql connection
connection.end();