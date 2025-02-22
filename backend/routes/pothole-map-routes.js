const express = require('express');

const router = express.Router();

const potholeControllers = require('../controllers/pothole-map-controllers');

router.get('/', potholeControllers.getPotholes);
router.post('/', potholeControllers.createdPothole);

module.exports = router;

