'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event_genre = sequelize.define('Event_genre', {
    eventId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  Event_genre.associate = function(models) {
    // associations can be defined here
  };
  return Event_genre;
};