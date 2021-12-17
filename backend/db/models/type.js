'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    type: DataTypes.STRING(255)
  }, {});
  Type.associate = function(models) {
    Type.belongsToMany(models.Event, {
      through: 'Event_type',
      as: 'event_type',
      foreignKey: 'typeId',
      otherKey: 'eventId'
    });
  };
  return Type;
};
