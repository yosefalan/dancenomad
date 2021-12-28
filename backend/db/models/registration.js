"use strict";
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define(
    "Registration",
    {
      eventId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      firstName: DataTypes.STRING(255),
      lastName: DataTypes.STRING(255),
    },
    {}
  );
  Registration.associate = function (models) {
    Registration.belongsTo(models.Event, { foreignKey: 'eventId' })
    Registration.hasMany(models.User, { foreignKey: "id" });
  };
  return Registration;
};
