'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Registrations', [
      {
        eventId: 2,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 3,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 4,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 5,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 4
      },
      {
        eventId: 6,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 7,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 8,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 9,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 10,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition',
        quantity: 2
      },
      {
        eventId: 2,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 2
      },
      {
        eventId: 3,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 2
      },
      {
        eventId: 4,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 2
      },
      {
        eventId: 5,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 1
      },
      {
        eventId: 6,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 2
      },
      {
        eventId: 7,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 6
      },
      {
        eventId: 8,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 2
      },
      {
        eventId: 9,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 2
      },
      {
        eventId: 10,
        userId: 11,
        firstName: 'Grace',
        lastName: 'Zoukiera',
        quantity: 2
      },
      {
        eventId: 2,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 2
      },
      {
        eventId: 3,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 2,

      },
      {
        eventId: 4,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 2
      },
      {
        eventId: 5,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 8
      },
      {
        eventId: 6,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 2
      },
      {
        eventId: 7,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 2
      },
      {
        eventId: 8,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 1

      },
      {
        eventId: 9,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 1
      },
      {
        eventId: 10,
        userId: 12,
        firstName: 'P',
        lastName: 'Smooth',
        quantity: 2
      },
      {
        eventId: 2,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 1
      },
      {
        eventId: 3,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 1
      },
      {
        eventId: 4,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 1
      },
      {
        eventId: 5,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 4
      },
      {
        eventId: 6,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 3
      },
      {
        eventId: 7,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 1
      },
      {
        eventId: 8,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 1
      },
      {
        eventId: 9,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 2
      },
      {
        eventId: 10,
        userId: 13,
        firstName: 'Amanda',
        lastName: 'Love',
        quantity: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Registrations', {}, {});
  }
};
