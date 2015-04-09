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



INSERT INTO area_food_truck VALUES (11, "Souvlaki GR", "Greek", "116 Stanton St", 10, 4, "09:00:00", "20:00:00", 7);
INSERT INTO area_food_truck VALUES (12, "Mexicue", "Mexican", "345 7th Ave", 10, 4, "09:00:00", "20:00:00", 8);
INSERT INTO area_food_truck VALUES (13, "Uncle Gussy's", "American", "Park Ave", 10, 4, "09:00:00", "20:00:00", 9);
INSERT INTO area_food_truck VALUES (14, "Bistro Truck", "Italian", "124 Ridge St", 10, 4, "09:00:00", "20:00:00", 10);
INSERT INTO area_food_truck VALUES (15, "Treats Truck Stop", "American", "521 Court St", 10, 4, "09:00:00", "20:00:00", 1);
INSERT INTO area_food_truck VALUES (16, "The Taco Truck", "Mexican", "62 Newark St", 10, 4, "09:00:00", "20:00:00", 2);
INSERT INTO area_food_truck VALUES (17, "Asian Station", "Chinese", "155 E 52nd St", 10, 4, "09:00:00", "20:00:00", 3);
INSERT INTO area_food_truck VALUES (18, "Rhong-Tiam", "Thai", "31 E 21st St", 10, 4, "09:00:00", "20:00:00", 4);
INSERT INTO area_food_truck VALUES (19, "Korilla", "Korean", "23 3rd Ave", 10, 4, "09:00:00", "20:00:00", 5);
INSERT INTO area_food_truck VALUES (20, "Mamak", "Thai", "174 2nd Ave", 10, 4, "09:00:00", "20:00:00", 6);
INSERT INTO area_food_truck VALUES (21, "Akebono Fusion Sushi", "Japanese", "252 Broadway", 10, 4, "09:00:00", "20:00:00", 7);

INSERT INTO area_museum VALUES (11, "Metropolitan Museum of Art", "Classical", 10, "09:00:00", "20:00:00", 7);
INSERT INTO area_museum VALUES (12, "Museum of Modern Art", "Modern", 10, "09:00:00", "20:00:00", 8);
INSERT INTO area_museum VALUES (13, "Solomon R. Guggenheim Museum", "Classical", 10, "09:00:00", "20:00:00", 9);
INSERT INTO area_museum VALUES (14, "Whitney Museum of American Art", "Art", 10, "09:00:00", "20:00:00", 10);
INSERT INTO area_museum VALUES (15, "Intrepid Sea, Air & Space Museum", "Military", 10, "09:00:00", "20:00:00", 1);
INSERT INTO area_museum VALUES (16, "Morgan Library & Museum", "Research", 10, "09:00:00", "20:00:00", 2);
INSERT INTO area_museum VALUES (17, "Frick Collection", "Culture", 10, "09:00:00", "20:00:00", 3);
INSERT INTO area_museum VALUES (18, "Jewish Museum New York", "Jewish", 10, "09:00:00", "20:00:00", 4);
INSERT INTO area_museum VALUES (19, "New York Hall of Science", "Science", 10, "09:00:00", "20:00:00", 5);
INSERT INTO area_museum VALUES (20, "National September 11 Memorial & Museum", "History", 10, "09:00:00", "20:00:00", 6);

INSERT INTO area_restaurants VALUES (11, "Le Bernardin", "155 W 51st St", "Seafood", 10, 4, "09:00:00", "20:00:00", 7);
INSERT INTO area_restaurants VALUES (12, "Gramercy Tavern", "42 E 20th St", "American", 10, 4, "09:00:00", "20:00:00", 8);
INSERT INTO area_restaurants VALUES (13, "Eleven Madison Park", "11 Madison Ave", "Spanish", 10, 4, "09:00:00", "20:00:00", 9);
INSERT INTO area_restaurants VALUES (14, "Daniel", "60 E 65th St", "French", 10, 4, "09:00:00", "20:00:00", 10);
INSERT INTO area_restaurants VALUES (15, "Jean-Georges", "1 Central Park West", "French", 10, 4, "09:00:00", "20:00:00", 1);
INSERT INTO area_restaurants VALUES (16, "Union Square Cafe", "21 E 16th St", "American", 10, 4, "09:00:00", "20:00:00", 2);
INSERT INTO area_restaurants VALUES (17, "Cafe Boulud", "20 E 76th St", "French", 10, 4, "09:00:00", "20:00:00", 3);
INSERT INTO area_restaurants VALUES (18, "The Modern", "9 W 53rd St", "Italian", 10, 4, "09:00:00", "20:00:00", 4);
INSERT INTO area_restaurants VALUES (19, "ABC Kitchen", "35 E 18th St", "American", 10, 4, "09:00:00", "20:00:00", 5);
INSERT INTO area_restaurants VALUES (20, "Buddakan", "75 9th Ave", "Chinese", 10, 4, "09:00:00", "20:00:00", 6);
INSERT INTO area_restaurants VALUES (21, "Sushi Yasuda", "204 E 43rd St", "Japanese", 10, 4, "09:00:00", "20:00:00", 7);

INSERT INTO gallery VALUES (11, "van Gogh", 100);
INSERT INTO gallery VALUES (12, "Dali", 100);
INSERT INTO gallery VALUES (13, "Renoir", 100);
INSERT INTO gallery VALUES (14, "Warhol", 100);
INSERT INTO gallery VALUES (15, "Pollock", 100);
INSERT INTO gallery VALUES (16, "Degas", 100);
INSERT INTO gallery VALUES (17, "Rembrandt", 100);
INSERT INTO gallery VALUES (18, "Raphael", 100);
INSERT INTO gallery VALUES (19, "Titian", 100);
INSERT INTO gallery VALUES (20, "Magritte", 100);
INSERT INTO gallery VALUES (21, "Cezanne", 100);
INSERT INTO gallery VALUES (22, "Goya", 100);

-- gallery id, museum id
INSERT INTO gallery_showcases VALUES (11, 1);
INSERT INTO gallery_showcases VALUES (12, 2);
INSERT INTO gallery_showcases VALUES (13, 3);
INSERT INTO gallery_showcases VALUES (14, 4);
INSERT INTO gallery_showcases VALUES (15, 5);
INSERT INTO gallery_showcases VALUES (16, 6);
INSERT INTO gallery_showcases VALUES (17, 7);
INSERT INTO gallery_showcases VALUES (18, 8);
INSERT INTO gallery_showcases VALUES (19, 9);
INSERT INTO gallery_showcases VALUES (20, 10);
INSERT INTO gallery_showcases VALUES (11, 11);
INSERT INTO gallery_showcases VALUES (12, 12);
INSERT INTO gallery_showcases VALUES (13, 13);
INSERT INTO gallery_showcases VALUES (14, 14);
INSERT INTO gallery_showcases VALUES (15, 15);
INSERT INTO gallery_showcases VALUES (16, 16);
INSERT INTO gallery_showcases VALUES (17, 17);
INSERT INTO gallery_showcases VALUES (18, 18);
INSERT INTO gallery_showcases VALUES (19, 19);
INSERT INTO gallery_showcases VALUES (20, 20);

INSERT INTO gallery_showcases VALUES (1, 1);
INSERT INTO gallery_showcases VALUES (3, 2);
INSERT INTO gallery_showcases VALUES (5, 3);
INSERT INTO gallery_showcases VALUES (4, 4);
INSERT INTO gallery_showcases VALUES (8, 5);
INSERT INTO gallery_showcases VALUES (9, 6);
INSERT INTO gallery_showcases VALUES (11, 7);
INSERT INTO gallery_showcases VALUES (12, 8);
INSERT INTO gallery_showcases VALUES (14, 9);
INSERT INTO gallery_showcases VALUES (15, 10);
INSERT INTO gallery_showcases VALUES (17, 11);
INSERT INTO gallery_showcases VALUES (18, 12);
INSERT INTO gallery_showcases VALUES (19, 13);
INSERT INTO gallery_showcases VALUES (21, 14);
INSERT INTO gallery_showcases VALUES (21, 15);
INSERT INTO gallery_showcases VALUES (18, 16);
INSERT INTO gallery_showcases VALUES (15, 17);
INSERT INTO gallery_showcases VALUES (13, 18);
INSERT INTO gallery_showcases VALUES (15, 19);
INSERT INTO gallery_showcases VALUES (12, 20);