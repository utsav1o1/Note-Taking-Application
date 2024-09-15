const express = require('express');

const router = express.Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.homepage);
router.get('/about', mainController.about);

//   router.get('/', mainController.homepage (req, res) => {
//     const locals = {
//       title:'NodeJs Notes',
//       description:'This is a simple note taking app built with NodeJs and ExpressJs',
//     }
//     res.render('index', locals);
//   });


module.exports = router;