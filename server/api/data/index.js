'use strict';

var express = require('express');
var controller = require('./data.controller');

var router = express.Router();

router.get('/:item', controller.allRows);

module.exports = router;
