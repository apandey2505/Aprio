var historicaldata_model = require('../../models').historical_data
let insertDataIntoDatabse = (obj) => {
  obj.forEach(function (obj) {
    //console.count()
    historicaldata_model.create({
      'date': obj.date,
      'high': obj.high,
      'low': obj.low,
      'open': obj.open,
      'close': obj.close,
      'volume': obj.volume,
      'quoteVolume': obj.quoteVolume,
      'weightedAverage': obj.weightedAverage
    }).then(() => console.count("inserted"))
  });
}


// let insertDataIntoDatabse = (obj) => {


//   historicaldata_model.bulkCreate(obj).then(() => console.count("inserted"))

// }




exports.insertDataIntoDatabse = insertDataIntoDatabse;
