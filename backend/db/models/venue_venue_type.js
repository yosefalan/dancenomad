'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue_venue_type = sequelize.define('Venue_venue_type', {
    venueId: DataTypes.INTEGER,
    venue_typeId: DataTypes.INTEGER
  }, {});
  Venue_venue_type.associate = function(models) {
    // associations can be defined here
  };
  return Venue_venue_type;
};