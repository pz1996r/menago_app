const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router();

router.get('/events', eventsController.getEvents);

module.exports = router;
