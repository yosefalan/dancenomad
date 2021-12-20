'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venue_types', [
      {
      type: 1,
      },
      {
      type: 2,
      },

      {
      type: 3,
      },

      {
      type: 4,0
      },

      {
      type: 5,
      },

      {
      type: 6,
      },

      {
      type: 7,
      },

      {
      type: 8,
      },
      {
      type: 8,
      },
      {
      type: 8,
      },
      {
      type: 8,
      },
      {
      type: 8,
      },
      {
      type: 9,
      },

      {
        type 10,
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Venue_types', {}, {});
  }
};
