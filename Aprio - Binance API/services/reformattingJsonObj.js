const constants = require("../config/constants.json")
let array = constants.array;
let jsonObj = [];

let assigningKeyValuePairs = ticks => {
  for (i = 0; i < ticks.length; i++) {
    let temp = {};
    ticks[i].map((tick, i) => {
      temp[array[i]] = tick;
    });
    jsonObj.push(temp);
  }
  return jsonObj;
};

module.exports = {
  assigningKeyValuePairs
}
