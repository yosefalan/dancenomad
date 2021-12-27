'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: DataTypes.INTEGER,
    name: DataTypes.STRING(255),
    description: DataTypes.STRING(2200),
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    image_url: DataTypes.STRING,
    video_url: DataTypes.STRING,
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.User, { foreignKey: 'hostId' });
    Event.hasMany(models.Venue, { foreignKey: 'eventId' });
    Event.belongsToMany(models.User, {
      through: 'Registration',
      as: 'registration',
      foreignKey: 'eventId',
      otherKey: 'userId'
    });
    Event.belongsToMany(models.Type, {
      through: 'Event_type',
      as: 'event_type',
      foreignKey: 'eventId',
      otherKey: 'typeId'
    });
    Event.belongsToMany(models.Genre, {
      through: 'Event_genre',
      as: 'event_genre',
      foreignKey: 'eventId',
      otherKey: 'genreId'
    });
  };


  return Event;
};
