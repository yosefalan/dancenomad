'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Venues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING(255)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      state: {
        type: Sequelize.STRING(255)
      },
      zip: {
        type: Sequelize.STRING(255)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      // lat: {
      //   type: Sequelize.DECIMAL
      // },
      // lng: {
      //   type: Sequelize.DECIMAL
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Venues');
  }
};
