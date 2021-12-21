'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venue_types', [
      {
      type: 'Ballroom'
      },

      {
      type: 'Conference Center'
      },

      {
      type: 'Cruise Ship '
      },

      {
      type: 'Dance Studio '
      },

      {
      type: 'Hotel'
      },

      {
      type: 'Night Club'
      },

      {
      type: 'Park / Beach (Public)'
      },

      {
      type: 'Private Residence'
      },

      {
        type: 'Private Residence'
        },






    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Venue_types', {}, {});
  }
};
