const router = require('express').Router();
const ImageController = require('./../controllers/image.controller');

router.get('/randomimage', ImageController.getRandomImage);

module.exports = router;
