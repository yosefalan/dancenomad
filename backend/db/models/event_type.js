'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event_type = sequelize.define('Event_type', {
    eventId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER
  }, {});
  Event_type.associate = function(models) {
    // associations can be defined here
  };
  return Event_type;
};