
const express = require('express');
const router = express.Router();

const vipController = require('../controllers/vipController');

router.get('/', vipController.index);

module.exports = router;
 