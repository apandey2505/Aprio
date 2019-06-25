'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('historicalTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      open: {
        type: Sequelize.FLOAT
      },
      high: {
        type: Sequelize.FLOAT
      },
      low: {
        type: Sequelize.FLOAT
      },
      close: {
        type: Sequelize.FLOAT
      },
      volume: {
        type: Sequelize.FLOAT
      },
      closeTime: {
        type: Sequelize.FLOAT
      },
      assetVolume: {
        type: Sequelize.FLOAT
      },
      trades: {
        type: Sequelize.FLOAT
      },
      buyBaseVolume: {
        type: Sequelize.FLOAT
      },
      buyAssetVolume: {
        type: Sequelize.FLOAT
      },
      ignored: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('historicalTables');
  }
};