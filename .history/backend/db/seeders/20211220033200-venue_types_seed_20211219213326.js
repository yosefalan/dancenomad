'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venue_types', [
      {
      type: ,
      },
      {
      type: ,
      },

      {
      type: ,
      },

      {
      type: ,0
      },

      {
      type: ,
      },

      {
      type: ,
      },

      {
      type: ,
      },

      {
      type: ,
      },
      {
      type: ,
      },
      {
      type: ,
      },
      {
      type: ,
      },
      {
      type: ,
      },
      {
      type: ,
      },

      {
        type 1,
      },


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Venue_types', {}, {});
  }
};
