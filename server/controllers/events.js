const { v1: uuid } = require('uuid');
const faker = require('faker');

const generateRandomMembers = () => {
  const members = [];
  // generate from 3 to 9 members
  for (let i = 0; i < faker.random.number({ min: 3, max: 9 }); i += 1) {
    members.push(faker.name.findName());
  }
  return members;
};

let events = [
  {
    id: uuid(),
    name: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    date: faker.date.future(0.1),
    duration: faker.random.number({ min: 1, max: 4 }),
    address: `${faker.address.streetAddress('###')}, ${faker.address.city()}`,
    type: 'TRAINING',
    members: generateRandomMembers(),
  },
  {
    id: uuid(),
    name: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    date: faker.date.future(0.1),
    duration: faker.random.number({ min: 1, max: 4 }),
    address: `${faker.address.streetAddress('###')}, ${faker.address.city()}`,
    type: 'TRAINING',
    members: generateRandomMembers(),
  },
  {
    id: uuid(),
    name: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    date: faker.date.future(0.1),
    duration: faker.random.number({ min: 1, max: 4 }),
    address: `${faker.address.streetAddress('###')}, ${faker.address.city()}`,
    type: 'TRAINING',
    members: generateRandomMembers(),
  },
];

exports.getEvents = (req, res) => {
  res.json(events);
};

exports.addEvent = (req, res) => {
  const newEvent = req.body;
  newEvent.id = uuid();
  events.push(newEvent);
  res.status(201).json({ message: 'Event created' });
};

exports.deleteEvent = (req, res) => {
  const { id } = req.body;
  events = events.filter(event => event.id !== id);
  res.status(204).json({ message: 'Event deleted' });
};

exports.getEvent = (req, res) => {
  const { id } = req.params;
  const event = events.find(item => item.id === id);
  return event
    ? res.json(event)
    : res.status(404).json({ message: 'Event not found' });
};

exports.updateEvent = (req, res) => {
  const { id } = req.params;
  const updatedEvent = req.body;
  const updatedEventsIndex = events.findIndex(event => event.id === id);
  if (updatedEventsIndex === -1) {
    res.status(404).json({ message: 'Event not found' });
  }
  events[updatedEventsIndex] = { ...updatedEvent };
  res.json(events[updatedEventsIndex]);
};
