// server.js

// modules
var express		 = require('express');
var app		 = express();
var bodyParser	 = require('body-parser');
var methodOverride = require('method-override');

// config
var db = require('./config/db');

// set our port
var port = process.env.PORT || 3030;

// connect to our mongoDB database 
//mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'applicaion/vnd.api+json'}));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

// shoutout to user
console.log('starting on port '+ port);

// expose app           
exports = module.exports = app;