const db = require("../services/mapping");
const constants = require("../config/constants.json")
const { variables} = require('../config/config.json');
const { development } = require('../config/config.json');
const convertingDateFormat = require("../services/convertingDateFormat");
const reformatJsonObj = require("../services/reformattingJsonObj");
const binance = require("node-binance-api")().options({
  APIKEY: development.APIKEY,
  APISECRET: development.APISECRET,
  useServerTime: true
});

const fetchingConvertedDates = (startDate, endDate) => {
  let fetchedDates = convertingDateFormat.convertDateToEpoch(startDate, endDate);
  let startTime = fetchedDates.startTime;
  let endTime = fetchedDates.endTime; 
  sendDataToDatabase(startTime, endTime);
}

const sendDataToDatabase = (startTime, endTime) => {
  
  if (endTime - startTime <= constants.oneDayInSecs) {
    // binance.candlesticks (currencySymbol, interval)
    binance.candlesticks(variables.currencySymbol, variables.interval, (error, ticks) => {
      if (error){
        throw(error);
      } else {
        let formattedObj = reformatJsonObj.assigningKeyValuePairs(ticks);
        for (var prop in formattedObj) {
          if (formattedObj.hasOwnProperty(prop)) {
            let timestamp = convertingDateFormat.convertEpochToDate(formattedObj[prop]['Date']);
            console.log(typeof timestamp)
            formattedObj[prop]['Date'] = timestamp;
          }
        }
        db.createHistoricalData(formattedObj);
      }
    }, { startTime: startTime, endTime: endTime });   
  } else {
    let endTime1 = startTime + constants.oneDayInSecs;
    binance.candlesticks(variables.currencySymbol, variables.interval, (error, ticks) => {
      if(error){
        throw(error);
      } else {
        reformatJsonObj.assigningKeyValuePairs(ticks)
        let startTime1 = startTime + constants.oneDayInSecs + 1;
        sendDataToDatabase(startTime1, endTime);
      }
    }, { startTime: startTime, endTime: endTime1 });
  }
};

module.exports = {
  fetchingConvertedDates
}
