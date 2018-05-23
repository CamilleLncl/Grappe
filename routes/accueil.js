var express = require('express');
var bodyParser = require("body-parser");
var router = express.Router();
var app = express();

router.post('/', function(req, res, next) {
	
  res.render('accueil');
	
});

module.exports = router;