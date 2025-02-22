const express = require('express');

const router = express.Router();

const parkingControllers = require('../controllers/park-lot-controllers');

// router.get('/:pid', parkingControllers.getParkingById);

router.get('/', parkingControllers.getParkings);

module.exports = router;
