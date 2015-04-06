USE cs4111;

INSERT INTO users VALUES (1, 'mike675', 20, 'Chinese');
INSERT INTO users VALUES (2, 'tom945', 100, 'Japanese');
INSERT INTO users VALUES (3, 'timothy66', 30, 'Indian');
INSERT INTO users VALUES (4, 'nyc4life', 20, 'Korean');
INSERT INTO users VALUES (5, 'lostnhungry', 20, 'French');
INSERT INTO users VALUES (6, 'funandgames', 20, 'German');
INSERT INTO users VALUES (7, 'amanda43', 30, 'Mexican');
INSERT INTO users VALUES (8, 'emily91', 40, 'Donuts');
INSERT INTO users VALUES (9, 'annie12', 30, 'Chinese');
INSERT INTO users VALUES (10, 'jorge55', 50, 'American');

LOAD DATA LOCAL INFILE './neighborhood.csv' INTO TABLE neighborhood FIELDS TERMINATED BY ';' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './users_visit.csv' INTO TABLE users_visit FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './area_restaurants.csv' INTO TABLE area_restaurants FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './area_foodtruck.csv' INTO TABLE area_food_truck FIELDS TERMINATED BY ';' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './area_museums.csv' INTO TABLE area_museum FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './gallery.csv' INTO TABLE gallery FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './gallery_showcases.csv' INTO TABLE gallery_showcases FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './owners.csv' INTO TABLE owner FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './owner_foodtruck.csv' INTO TABLE owner_food_truck FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './owner_restaurant.csv' INTO TABLE owner_restaurant FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
LOAD DATA LOCAL INFILE './owner_museum.csv' INTO TABLE owner_museum FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r';
