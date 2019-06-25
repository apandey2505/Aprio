let {
  converterEpochToDate
} = require('../converterOfDate/converterEpochToDate')

var request = require("request");

let {
  insertDataIntoDatabse
} = require("../databaseInsertion/insertDataIntoDatabse")


let getDataFromApiAndInsertIntoDatabase = async (options, callback) => {
  let st_time = options.qs.start
  let en_time = options.qs.end

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let obj = JSON.parse(body)
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        let objDateInLocalTime = converterEpochToDate(obj[prop]['date']);
        obj[prop]['date'] = objDateInLocalTime;
      }
    }
    //calling the insert method to insert the data into database
    insertDataIntoDatabse(obj)
    callback(en_time)
  });
}

exports.getDataFromApiAndInsertIntoDatabase = getDataFromApiAndInsertIntoDatabase;
