/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app, connection) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));

  // MySQL routes
  app.route('/data')
    .get(function(req, res) {
      connection.connect(function(err){
        if(!err) {
          console.log("Database is connected ... \n\n");  
        } else {
          console.log("Error connecting database ... \n\n");  
        }
      });
      connection.query("SELECT * FROM neighborhood", function(err, rows, field) {
        connection.end();
        if (!err)
                console.log('The solution is: ', rows);
        else
                console.log('Error while performing Query.');
        });
    });
 
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
