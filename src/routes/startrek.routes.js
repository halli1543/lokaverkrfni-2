const express = require('express');
const router = express.Router();
const startrekController = require('../controllers/startrek.controller');

router.get('/', startrekController.getHomePage);
router.get('/shows', startrekController.getShows);

module.exports = router;