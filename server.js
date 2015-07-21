process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 8000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var mongoose = require('./config/mongoose.js');
var express = require('./config/express.js');

var db = mongoose();

var app = express();

console.log('Server running');
app.listen(process.env.PORT);
console.log(process.env.PORT);

module.exports = app;