-- Creates Tables
USE cs4111;

CREATE TABLE users (
	uid INTEGER UNIQUE,
	user_name CHAR(15),
	money_range INTEGER,
	interests CHAR(20),
	PRIMARY KEY (uid)
);

CREATE TABLE neighborhood (
	nid INTEGER,
	area_name CHAR(25),
	geolocation CHAR(20),
	safety_rating INTEGER,
	PRIMARY KEY (nid)
);

CREATE TABLE users_visit (
	uid INTEGER,
	nid INTEGER,
	PRIMARY KEY (uid),
	FOREIGN KEY (uid) REFERENCES users (uid),
	FOREIGN KEY (nid) REFERENCES neighborhood (nid)
);

CREATE TABLE area_restaurants (
	rest_id INTEGER,
	restaurant_name CHAR(40),
	address CHAR(30),
	cuisine CHAR(10),
	price_range INTEGER,
	rating INTEGER,
	open TIME,
	close TIME,
	nid INTEGER,
	PRIMARY KEY (rest_id),
	FOREIGN KEY (nid) REFERENCES neighborhood (nid)
);

CREATE TABLE area_food_truck (
	food_id INTEGER,
	truck_name CHAR(50),
	cuisine CHAR(10),
	trajectory CHAR(80),
	price_range INTEGER,
	rating INTEGER,
	open TIME,
	close TIME,
	nid INTEGER,
	PRIMARY KEY (food_id),
	FOREIGN KEY (nid) REFERENCES neighborhood (nid)
);

CREATE TABLE area_museum (
	museum_id INTEGER,
	museum_name CHAR (40),
	style CHAR (20),
	ticket_price INTEGER,
	open TIME,
	close TIME,
	nid INTEGER,
	PRIMARY KEY (museum_id),
	FOREIGN KEY (nid) REFERENCES neighborhood (nid)
);


CREATE TABLE gallery (
	gallery_id INTEGER,
	gallery_name CHAR(20),
	number_works INTEGER,
	PRIMARY KEY (gallery_id)
);

CREATE TABLE gallery_showcases (
	gallery_id INTEGER,
	museum_id INTEGER,
	PRIMARY KEY (museum_id, gallery_id),
	FOREIGN KEY (museum_id) REFERENCES area_museum (museum_id),
	FOREIGN KEY (gallery_id) REFERENCES gallery (gallery_id)
);


CREATE TABLE owner (
	owner_id INTEGER,
	owner_name CHAR(20),
	PRIMARY KEY (owner_id)
);

CREATE TABLE owner_food_truck (
	owner_id INTEGER,
	food_id INTEGER,
	PRIMARY KEY (food_id),
	FOREIGN KEY (owner_id) REFERENCES owner (owner_id),
	FOREIGN KEY (food_id) REFERENCES area_food_truck (food_id) ON DELETE CASCADE
);

CREATE TABLE owner_restaurant (
	owner_id INTEGER,
	rest_id INTEGER,
	PRIMARY KEY (rest_id),
	FOREIGN KEY (owner_id) REFERENCES owner (owner_id),
	FOREIGN KEY (rest_id) REFERENCES area_restaurants (rest_id) ON DELETE CASCADE
);

CREATE TABLE owner_museum (
	owner_id INTEGER,
	museum_id INTEGER,
	PRIMARY KEY (museum_id),
	FOREIGN KEY (owner_id) REFERENCES owner (owner_id),
	FOREIGN KEY (museum_id) REFERENCES area_museum (museum_id) ON DELETE CASCADE
);


-- Constraints

CREATE ASSERTION NoEmptyMuseums
	CHECK (
		NOT EXISTS (
			SELECT museum_id 
			FROM area_museum
			WHERE museum_id NOT IN(
				SELECT museum_id 
				FROM gallery_showcases
			)
		)
	);

CREATE ASSERTION MuseumsInNeighborhood
	CHECK (
		NOT EXISTS (
			SELECT nid 
			FROM neighborhood
			WHERE nid NOT IN(
				SELECT nid 
				FROM area_museum
			)
		)
	);

CREATE ASSERTION OwnerFoodTruckExists
	CHECK (
		NOT EXISTS (
			SELECT food_id 
			FROM area_food_truck
			WHERE food_id NOT IN(
				SELECT food_id 
				FROM owner_food_truck
			)
		)
	);

CREATE ASSERTION OwnerMuseumExists
	CHECK (
		NOT EXISTS (
			SELECT museum_id 
			FROM area_museum
			WHERE museum_id NOT IN(
				SELECT museum_id 
				FROM owner_museum
			)
		)
	);

CREATE ASSERTION OwnerRestaurantExists
	CHECK (
		NOT EXISTS (
			SELECT rest_id 
			FROM area_restaurants
			WHERE rest_id NOT IN(
				SELECT rest_id 
				FROM owner_restaurant
			)
		)
	);

CREATE ASSERTION NeighborhoodHasFood
	CHECK (
		NOT EXISTS (
			SELECT nid 
			FROM neighborhood
			WHERE nid NOT IN(
				SELECT nid 
				FROM neighborhood N, area_restaurants A 
				WHERE N.nid = A.nid
			)

			INTERSECT

			SELECT nid 
			FROM neighborhood
			WHERE nid NOT IN(
				SELECT nid 
				FROM neighborhood N, area_food_truck A 
				WHERE N.nid = A.nid
			)
		)
	);


