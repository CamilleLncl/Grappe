var mysql = require('mysql');

var con = mysql.createConnection({
  host: "root@localhost",
  user: "root",
  password: "grappe2018",
  database : "grappe"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});