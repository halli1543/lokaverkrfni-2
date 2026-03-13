const express = require('express');
const router = express.Rputer();
const startrekController = require('../controllers/startrek.controller');

router.get('/', startrekController.getHomePage);
router.get('/shows', startrekController.getShows);

router.exports = router;