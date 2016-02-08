'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test', function(err, res){
  if(err){
    console.log('Error connecting to the database: ' + err);
  } else{
    console.log('Connected to database: mongodb://localhost/test');
  }
});

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
module.exports = app; // for testing
