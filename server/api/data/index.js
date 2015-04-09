'use strict';

var express = require('express');
var controller = require('./data.controller');

var router = express.Router();


router.get('/neighborhoodmuseums', controller.neighborhoodMuseums);
router.get('/neighborhoodfoodtruck', controller.neighborhoodFoodTruck);
router.get('/neighborhoodrestaurant', controller.neighborhoodRestaurant);
router.get('/museumgallery', controller.museumGallery);
router.get('/gallerylist', controller.gallery);
router.get('/visits', controller.visits);
router.get('/cuisines', controller.cuisine);
router.post('/basicsearch', controller.basicsearch);
router.get('/:item', controller.allRows);

module.exports = router;
