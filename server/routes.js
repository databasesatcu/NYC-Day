/**
 * Main application routes
 */

'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : "cs4111.clq7wmdnlcyp.us-west-2.rds.amazonaws.com" ,
  user     : "gml2153" ,
  password : "cs4111cs4111" ,
  database : "cs4111"
});

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));

  // MySQL routes
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
