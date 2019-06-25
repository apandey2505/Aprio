const models = require("../models").historicalTables;
let createHistoricalData = (obj) => {
  models.bulkCreate(obj).then(() => console.count("inserted"))
}
module.exports = {
  createHistoricalData
};
