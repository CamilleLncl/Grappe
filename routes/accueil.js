var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();





router.post('/', function(req, res, next) {
	/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created`, `modified`) VALUES (NULL, 'Luc', 'Bobby', 'luc.bobby@epf.de', 'lulu', 'NOW()', '');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});*/
	
//function validate (req, res, next){
  console.log('GOOD JOB');
var identifiant = req.body.username;
var mdp = req.body.password;

console.log("id : "+identifiant + " mdp : "+mdp);

if ( identifiant == "Camille" && mdp == "123"){
//alert ("Login successfully");
 res.render('accueil');
}
else{
  //alert("Mauvais identifiant ou mot de passe");

  console.log("mieux");
  res.render('fail');
}
});
 
module.exports = router;