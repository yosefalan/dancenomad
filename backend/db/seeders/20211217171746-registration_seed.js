'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Registrations', [
      {
        eventId: 2,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition'
      },
      {
        eventId: 9,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition'
      },
      {
        eventId: 8,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition'
      },
      {
        eventId: 3,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition'
      },
      {
        eventId: 10,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition'
      },
      {
        eventId: 0,
        userId: 18,
        firstName: 'Demo',
        lastName: 'Lition'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Registrations', {}, {});
  }
};
