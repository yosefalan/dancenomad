'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genre: DataTypes.STRING(255)
  }, {});
  Genre.associate = function(models) {
    Genre.belongsToMany(models.Event, {
      through: 'Event_genre',
      as: 'event_genre',
      foreignKey: 'genreId',
      otherKey: 'eventId'
    });
  };
  return Genre;
};
