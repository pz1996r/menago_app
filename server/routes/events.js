const express = require('express');

const eventsController = require('../controllers/events');

const router = express.Router();

router.get('/events', eventsController.getEvents);
router.post('/events', eventsController.addEvent);
router.delete('/events', eventsController.deleteEvent);
router.get('/events/:id', eventsController.getEvent);
router.put('/events/:id', eventsController.updateEvent);

module.exports = router;
