'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue_type = sequelize.define('Venue_type', {
    type: DataTypes.STRING
  }, {});
  Venue_type.associate = function(models) {
    Venue_type.belongsToMany(models.Venue, {
      through: 'Venue_venue_type',
      as: 'venue_type',
      foreignKey: 'venue_typeId',
      otherKey: 'venueId'
    });
  };
  return Venue_type;
};
