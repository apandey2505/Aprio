'use strict';
module.exports = (sequelize, DataTypes) => {
  const historicalTables = sequelize.define('historicalTables', {
    date: DataTypes.DATE,
    open: DataTypes.FLOAT,
    high: DataTypes.FLOAT,
    low: DataTypes.FLOAT,
    close: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    closeTime: DataTypes.FLOAT,
    assetVolume: DataTypes.FLOAT,
    trades: DataTypes.FLOAT,
    buyBaseVolume: DataTypes.FLOAT,
    buyAssetVolume: DataTypes.FLOAT,
    ignored: DataTypes.FLOAT
  }, {});
  historicalTables.associate = function(models) {
    // associations can be defined here
  };
  return historicalTables;
};
