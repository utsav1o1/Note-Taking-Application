const express = require('express');

const router = express.Router();

const {isLoggedIn} = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');


router.get('/', isLoggedIn, dashboardController.dashboard);
router.get('/add', isLoggedIn, dashboardController.add);
router.post('/add', isLoggedIn, dashboardController.addNote);
// router.get('/about', dashboardController.about);


module.exports = router;