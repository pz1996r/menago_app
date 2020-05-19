const express = require('express');
const { body } = require('express-validator');

const eventsController = require('../controllers/events');

const router = express.Router();

const eventValidationRules = [
  body('name')
    .notEmpty()
    .withMessage('Name must not be empty'),
  body('date')
    .notEmpty()
    .withMessage('Date must not be empty'),
  body('type')
    .notEmpty()
    .withMessage('Type must not be empty'),
  body('duration')
    .notEmpty()
    .withMessage('Duration must not be empty')
    .isInt({ min: 1, max: 12 })
    .withMessage('Duration must be a number between 1 and 12'),
  body('address')
    .notEmpty()
    .withMessage('Address must not be empty'),
  body('description')
    .isLength({ max: 1024 })
    .withMessage('Description should be max 1024 characters long'),
];

router.get('/events', eventsController.getEvents);
router.post('/events', eventValidationRules, eventsController.addEvent);
router.delete('/events', eventsController.deleteEvent);
router.get('/events/:id', eventsController.getEvent);
router.put('/events/:id', eventValidationRules, eventsController.updateEvent);

module.exports = router;
