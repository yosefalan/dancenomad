'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venue_types', [
      {
        eventId: 1,
        typeId: 6
      },
      {
        eventId: 2,
        typeId: 1
      },

      {
        eventId: 3,
        typeId: 6
      },

      {
        eventId: 4,
        typeId: 10
      },

      {
        eventId: 5,
        typeId: 1
      },

      {
        eventId: 6,
        typeId: 1
      },

      {
        eventId: 7,
        typeId: 1
      },

      {
        eventId: 8,
        typeId: 1
      },
      {
        eventId: 8,
        typeId: 2
      },
      {
        eventId: 8,
        typeId: 7
      },
      {
        eventId: 8,
        typeId: 8
      },
      {
        eventId: 8,
        typeId: 3
      },
      {
        eventId: 9,
        typeId: 1
      },

      {
        eventId: 10,
        typeId: 1
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Venue_types', {}, {});
  }
};
