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

const events = [
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
