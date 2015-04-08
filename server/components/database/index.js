'use strict';

var mysql = require('mysql');

var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'local',
  database : 'cs4111'
});

module.exports = pool;
