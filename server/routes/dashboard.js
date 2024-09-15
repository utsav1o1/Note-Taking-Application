const express = require('express');

const router = express.Router();
const dashboardController = require('../controllers/dashboardController');


router.get('/', dashboardController.dashboard);
// router.get('/about', dashboardController.about);


module.exports = router;