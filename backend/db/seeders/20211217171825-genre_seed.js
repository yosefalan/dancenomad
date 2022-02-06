'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {
        genre: 'Acro'
      },
      {
        genre: 'Afro Cuban'
      },
      {
        genre: 'Bachata'
      },
      {
        genre: 'Ballroom'
      },
      {
        genre: 'Blues'
      },
      {
        genre: 'Brazilian Zouk'
      },
      {
        genre: 'Breakdance'
      },
      {
        genre: 'Casino Rueda'
      },
      {
        genre: 'Cha Cha'
      },
      {
        genre: 'East Coast Swing'
      },
      {
        genre: 'Funkstyles / Popping'
      },
      {
        genre: 'Hip Hop'
      },
      {
        genre: 'House'
      },
      {
        genre: 'Kizomba'
      },
      {
        genre: 'Lambada'
      },
      {
        genre: 'Locking'
      },
      {
        genre: 'Salsa'
      },
      {
        genre: 'Semba'
      },
      {
        genre: 'Swing'
      },
      {
        genre: 'Tango'
      },
      {
        genre: 'Tarraxinha'
      },
      {
        genre: 'West Coast Swing'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Genres', {}, {});
  }
};
