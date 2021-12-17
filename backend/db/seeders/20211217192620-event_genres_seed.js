"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Event_genres",
      [
        {
          eventId: 1,
          genreId: 6,
        },
        {
          eventId: 2,
          genreId: 21,
        },

        {
          eventId: 2,
          genreId: 3,
        },

        {
          eventId: 2,
          genreId: 6,
        },

        {
          eventId: 2,
          genreId: 14,
        },

        {
          eventId: 2,
          genreId: 17,
        },

        {
          eventId: 3,
          genreId: 6,
        },

        {
          eventId: 4,
          genreId: 3,
        },
        {
          eventId: 4,
          genreId: 6,
        },
        {
          eventId: 4,
          genreId: 14,
        },
        {
          eventId: 4,
          genreId: 17,
        },
        {
          eventId: 4,
          genreId: 9,
        },
        {
          eventId: 5,
          genreId: 6,
        },
        {
          eventId: 6,
          genreId: 6,
        },

        {
          eventId: 7,
          genreId: 3,
        },
        {
          eventId: 7,
          genreId: 6,
        },
        {
          eventId: 7,
          genreId: 14,
        },
        {
          eventId: 7,
          genreId: 17,
        },
        {
          eventId: 8,
          genreId: 1,
        },
        {
          eventId: 9,
          genreId: 3,
        },
        {
          eventId: 9,
          genreId: 6,
        },
        {
          eventId: 9,
          genreId: 14,
        },
        {
          eventId: 9,
          genreId: 17,
        },
        {
          eventId: 10,
          genreId: 3,
        },
        {
          eventId: 10,
          genreId: 6,
        },
        {
          eventId: 10,
          genreId: 14,
        },
        {
          eventId: 10,
          genreId: 17,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Event_genres", {}, {});
  },
};
