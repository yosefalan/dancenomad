'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [
      {
        type: 'Class'
      },
      {
        type: 'Competition'
      },
      {
        type: 'Congress'
      },
      {
        type: 'Dance Cruise'
      },
      {
        type: 'Flash Mob'
      },
      {
        type: 'Marathon'
      },
      {
        type: 'Nightclub Event'
      },
      {
        type: 'Retreat'
      },
      {
        type: 'Social'
      },
      {
        type: 'Weekender'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Types', {}, {});
  }
};
