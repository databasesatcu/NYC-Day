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

exports.newusers = function (req, res) {
    var query = "select count(*) as num from users;";
    var post = "";
    console.log("GARYGARYGARY1");
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('neighborhoodMuseums requested!');
    		res.json(rows);
    		console.log(rows);
    		var number = rows[0].num;
    		post = "INSERT INTO users VALUES ("+ number+1 + ", '" + req.body.username + "', " + 20 + " '" + req.body.interests + "');";
    		
    		pool.query(post, function(err, rows, field){
				if (err) {
					console.log("error in the post of newusers");
				}
				else {
					console.log("GARYGARYGARY2");
				}
			});
    		

  		} else
    		console.log('Error while performing Query.');
 
  	});

 //  	pool.query(post, function(err, rows, field){
	// 	if (err) {
	// 		console.log("error in the post of newusers");
	// 	}
	// });
};


exports.neighborhoodMuseums = function (req, res) {
    var query = "SELECT area_name, museum_name, style FROM neighborhood N, area_museum M WHERE N.nid = M.nid";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('neighborhoodMuseums requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.searchgallery = function (req, res) {
    var query = "SELECT museum_name, gallery_name FROM area_museum M, gallery G, gallery_showcases S WHERE G.gallery_id = S.gallery_id and M.museum_id = S.museum_id and museum_name = \"" + req.body.museum + "\"";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('searchgallery requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.searchmuseum = function (req, res) {
    var query = "SELECT area_name, museum_name, gallery_name, style FROM area_museum M, gallery G, gallery_showcases S, neighborhood N  WHERE G.gallery_id = S.gallery_id and M.museum_id = S.museum_id and N.nid = M.nid AND area_name = \"" + req.body.neighborhood.area_name + "\"";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('searchmuseum requested!');

    		console.log(rows);

    		res.json(rows);
  		} else {
    		console.log('Error while performing Query.');
    		console.log(req.body);
    		console.log(" break break break");
    		console.log(req.body.neighborhood.area_name);
    	}
 
  	});
};

exports.searchmuseumgallery = function (req, res) {
    var query = "SELECT area_name, museum_name, gallery_name, style FROM area_museum M, gallery G, gallery_showcases S, neighborhood N  WHERE G.gallery_id = S.gallery_id and M.museum_id = S.museum_id and N.nid = M.nid AND area_name = \"" + req.body.neighborhood.area_name + "\" and gallery_name = '" + req.body.gallery.gallery_name + "'";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('searchmuseumgallery requested!');

    		console.log(rows);

    		res.json(rows);
  		} else {
    		console.log('Error while performing Query.');
    		console.log(req.body);
    		console.log(" break break break");
    		console.log(req.body.neighborhood.area_name);
    	}
 
  	});
};

exports.searchrestaurant = function (req, res) {
    var query = "SELECT area_name, restaurant_name, cuisine, address FROM neighborhood N, area_restaurants R WHERE N.nid = R.nid AND area_name = \"" + req.body.neighborhood.area_name + "\"";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('searchrestaurant requested!');

    		console.log(rows);

    		res.json(rows);
  		} else {
    		console.log('Error while performing Query.');
    		console.log(req.body);
    		console.log(" break break break");
    		console.log(req.body.neighborhood.area_name);
    	}
 
  	});
};

exports.searchrestaurantcuisine = function (req, res) {
    var query = "SELECT area_name, restaurant_name, cuisine, address FROM neighborhood N, area_restaurants R WHERE N.nid = R.nid AND area_name = \"" + req.body.neighborhood.area_name + "\" and cuisine = '" + req.body.cuisine.cuisine + "'";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('searchrestaurantcuisine requested!');

    		console.log(rows);

    		res.json(rows);
  		} else {
    		console.log('Error while performing Query.');
    		console.log(req.body);
    		console.log(" break break break");
    		console.log(req.body.neighborhood.area_name);
    	}
 
  	});
};

exports.searchfoodtruckcuisine = function (req, res) {
    var query = "SELECT area_name, truck_name, cuisine, trajectory FROM neighborhood N, area_food_truck F WHERE N.nid = F.nid AND area_name = \"" + req.body.neighborhood.area_name + "\" and cuisine = '" + req.body.cuisine.cuisine + "'";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('searchfoodtruckcuisine requested!');

    		console.log(rows);

    		res.json(rows);
  		} else {
    		console.log('Error while performing Query.');
    		console.log(req.body);
    		console.log(" break break break");
    		console.log(req.body.neighborhood.area_name);
    	}
 
  	});
};

exports.searchfoodtruck = function (req, res) {
    var query = "SELECT area_name, truck_name, cuisine, trajectory FROM neighborhood N, area_food_truck F WHERE N.nid = F.nid AND area_name = \"" + req.body.neighborhood.area_name + "\"";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('searchfoodtruck requested!');

    		console.log(rows);

    		res.json(rows);
  		} else {
    		console.log('Error while performing Query.');
    		console.log(req.body);
    		console.log(" break break break");
    		console.log(req.body.neighborhood.area_name);
    	}
 
  	});
};


exports.neighborhoodMuseumsSpecific = function (req, res) {
    var query = "SELECT area_name, museum_name, style FROM neighborhood N, area_museum M WHERE N.nid = M.nid AND area_name = " + req.params.neighborhood;
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('neighborhoodMuseumsSpecific requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.neighborhoodFoodTruck = function (req, res) {
    var query = "SELECT area_name, truck_name, cuisine, trajectory FROM neighborhood N, area_food_truck F WHERE N.nid = F.nid;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('neighborhoodFoodTruck requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};


exports.neighborhoodRestaurant = function (req, res) {
    var query = "SELECT area_name, restaurant_name, cuisine, address FROM neighborhood N, area_restaurants R WHERE N.nid = R.nid;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('neighborhoodRestaurant requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.museumGallery = function (req, res) {
    var query = "SELECT museum_name, gallery_name FROM area_museum M, gallery G, gallery_showcases S WHERE G.gallery_id = S.gallery_id and M.museum_id = S.museum_id;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('museumGallery requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.cuisine = function (req, res) {
    var query = "SELECT DISTINCT F.cuisine FROM area_food_truck F, area_restaurants R;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('cuisine requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.gallery = function (req, res) {
    var query = "SELECT gallery_name as gallery FROM gallery;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('gallery requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

exports.visits = function (req, res) {
    var query = "SELECT user_name as user, area_name as neighborhood FROM users U, users_visit V, neighborhood N WHERE U.uid = V.uid AND N.nid = V.nid;";
    pool.query(query, function(err, rows, field) {
    	if (!err) {
    		console.log('visits requested!');
    		res.json(rows);
  		} else
    		console.log('Error while performing Query.');
 
  	});
};

