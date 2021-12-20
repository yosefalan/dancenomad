'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.STRING(255),
    address: DataTypes.STRING(255),
    city: DataTypes.STRING(255),
    state: DataTypes.STRING(255),
    country: DataTypes.STRING(255),
    zip: DataTypes.STRING(255),
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL,
  }, {});
  Venue.associate = function(models) {
    Venue.belongsTo(models.Event, { foreignKey: 'venueId' });
    Venue.belongsToMany(models.Venue_type, {
      through: 'Venue_venue_type',
      as: 'venue_type',
      foreignKey: 'id',
      otherKey: 'venue_typeId'
    });
  };
  return Venue;
};
