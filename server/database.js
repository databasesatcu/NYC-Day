'use strict';

var mysql = require('mysql');

// local host
// var pool = mysql.createPool({
//   host     : 'localhost',
//   user     : 'local',
//   database : 'cs4111'
// });


var pool = mysql.createPool({
  host     : 'cs4111.clq7wmdnlcyp.us-west-2.rds.amazonaws.com',
  user     : 'gml2153',
  database : 'cs4111',
  password : 'cs4111cs4111'
});

module.exports = pool;
