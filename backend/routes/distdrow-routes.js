const express = require('express');

const router = express.Router();

const distdrowController = require('../controllers/distdrow-controllers');

router.get('/', distdrowController.getDistDrowInstances);
router.post('/', distdrowController.createdFatigue);

module.exports = router;
