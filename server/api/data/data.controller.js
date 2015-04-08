'use strict';

var pool = require('../../database');

exports.index = function (req, res) {
  
  pool.query("SELECT * FROM neighborhood", function(err, rows, field) {
  
  if (!err) {
    console.log('Neighborhoods requested!');
    res.json(rows);
  } else
    console.log('Error while performing Query.');
  
  });

};
