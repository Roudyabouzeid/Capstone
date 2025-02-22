const express = require('express');

const router = express.Router();

const crashControllers = require('../controllers/crash-controllers');

router.get('/', crashControllers.getCrashes);
router.post('/', crashControllers.createdCrash);

module.exports = router;
