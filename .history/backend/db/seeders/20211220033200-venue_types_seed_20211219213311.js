'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venue_types', [
      {
        eventId: 1,
      },
      {
        eventId: 2,
      },

      {
        eventId: 3,
      },

      {
        eventId: 4,0
      },

      {
        eventId: 5,
      },

      {
        eventId: 6,
      },

      {
        eventId: 7,
      },

      {
        eventId: 8,
      },
      {
        eventId: 8,
      },
      {
        eventId: 8,
      },
      {
        eventId: 8,
      },
      {
        eventId: 8,
      },
      {
        eventId: 9,
      },

      {
        eventId: 10,
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Venue_types', {}, {});
  }
};
