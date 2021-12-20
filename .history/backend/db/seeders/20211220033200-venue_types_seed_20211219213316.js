'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venue_types', [
      {
      d: 1,
      },
      {
      d: 2,
      },

      {
      d: 3,
      },

      {
      d: 4,0
      },

      {
      d: 5,
      },

      {
      d: 6,
      },

      {
      d: 7,
      },

      {
      d: 8,
      },
      {
      d: 8,
      },
      {
      d: 8,
      },
      {
      d: 8,
      },
      {
      d: 8,
      },
      {
      d: 9,
      },

      {
        : 10,
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Venue_types', {}, {});
  }
};
