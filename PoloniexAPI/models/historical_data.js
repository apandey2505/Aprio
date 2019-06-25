'use strict';
module.exports = (sequelize, DataTypes) => {
  const historical_data = sequelize.define('historical_data', {
    date: DataTypes.STRING,
    high: DataTypes.FLOAT,
    low: DataTypes.FLOAT,
    open: DataTypes.FLOAT,
    close: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    quoteVolume: DataTypes.FLOAT,
    weightedAverage: DataTypes.FLOAT
  }, {});
  historical_data.associate = function (models) {
    // associations can be defined here
  };
  return historical_data;
};
