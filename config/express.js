var express = require('express');
var compress = require('compression');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


module.exports = function() {
	var app = express();

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev')); //logger
	};
	if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	};

	app.use(bodyParser.urlencoded( {
		extended : true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	app.set('views', './server/views');
	app.set('view engine', 'ejs');

	app.use(express.static('./dist'));

	app.all('/*', function(req, res, next) {
	    // Just send the index.html for other files to support HTML5Mode
	    res.sendFile('index.html', {
	    	root: './dist'
	    });
	});

	return app;
};