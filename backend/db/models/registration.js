'use strict';
module.exports = (sequelize, DataTypes) => {
  const registration = sequelize.define('Registration', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  registration.associate = function(models) {
    // associations can be defined here
  };
  return registration;
};
