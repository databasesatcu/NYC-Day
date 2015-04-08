'use strict';

var pool = require('../../components/database');
var errors = require('../../components/errors')

exports.allRows = function (req, res) {
  
  var query = "SELECT * FROM " + req.params.item;
  // var query = "SELECT * FROM neighborhood N, area_museum M WHERE N.nid = M.nid";
  pool.query(query, function(err, rows, field) {
  
  if (!err) {
    console.log(req.params.item + ' requested!');
    res.json(rows);
  } else
    console.log('Error while performing Query.');
  
  });

};

exports.neighborhoodMuseums = function (req, res) {
    var query = "SELECT area_name, museum_name, style FROM neighborhood N, area_museum M WHERE N.nid = M.nid";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('Museums within neighborhood requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.neighborhoodFoodTruck = function (req, res) {
    var query = "SELECT area_name, truck_name, cuisine, trajectory FROM neighborhood N, area_food_truck F WHERE N.nid = F.nid;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('Food within neighborhood requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};


exports.neighborhoodRestaurant = function (req, res) {
    var query = "SELECT area_name, restaurant_name, cuisine, address FROM neighborhood N, area_restaurants R WHERE N.nid = R.nid;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('Food within neighborhood requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.museumGallery = function (req, res) {
    var query = "SELECT museum_name, gallery_name FROM area_museum M, gallery G, gallery_showcases S WHERE G.gallery_id = S.gallery_id and M.museum_id = S.museum_id;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('Galleries within museum requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

