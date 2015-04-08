'use strict';

var pool = require('../../components/database');
var errors = require('../../components/errors')

exports.allRows = function (req, res) {
  
  var query = "SELECT * FROM " + req.params.item;
  pool.query(query, function(err, rows, field) {
  
  if (!err) {
    console.log(req.params.item + ' requested!');
    res.json(rows);
  } else
    console.log('Error while performing Query.');
  
  });

};
