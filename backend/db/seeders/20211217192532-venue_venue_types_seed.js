'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venue_venue_types', [
      {
        venueId: 1,
        venue_typeId: 1
      },
      {
        venueId: 2,
        venue_typeId: 5
      },
      {
        venueId: 3,
        venue_typeId: 4
      },
      {
        venueId: 4,
        venue_typeId: 3
      },
      {
        venueId: 5,
        venue_typeId: 5
      },
      {
        venueId: 6,
        venue_typeId: 5
      },
      {
        venueId: 7,
        venue_typeId: 5
      },
      {
        venueId: 8,
        venue_typeId: 4
      },
      {
        venueId: 8,
        venue_typeId: 5
      },
      {
        venueId: 8,
        venue_typeId: 6
      },
      {
        venueId: 8,
        venue_typeId: 7
      },
      {
        venueId: 8,
        venue_typeId: 9
      },
      {
        venueId: 8,
        venue_typeId: 10
      },
      {
        venueId: 9,
        venue_typeId: 5
      },
      {
        venueId: 10,
        venue_typeId: 5
      },
      // {
      //   venueId: 0,
      //   venue_typeId: 0
      // },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Venue_venue_types', {}, {});
  }
};
