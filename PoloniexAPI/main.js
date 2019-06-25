function poloniexapifunction() {

  let {
    variable
  } = require('../aprio_getDataFromApi/config/config.json')
  let start_date_input = variable.start_date;
  let end_date_input = variable.end_date;

  var request = require("request");
  var {
    insertDataIntoDatabse
  } = require('../aprio_getDataFromApi/insertpostgres')

  var val = 0;

  var options = {
    method: 'GET',
    url: 'https://poloniex.com/public',
    qs: {
      command: 'returnChartData',
      currencyPair: 'BTC_ETH',
      start: "",
      end: "",
      period: '300'
    },
    headers: {
      'postman-token': '821d8332-55c5-d5e7-5332-9f3200d5cbdb',
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    }
  };


  let converterDateToEpoch = (starting_date, ending_date) => {
    let sd_epoch = new Date(starting_date).getTime() / 1000;
    let ed_epoch = new Date(ending_date).getTime() / 1000;
    let myEpochObj = {
      "start_date": sd_epoch,
      "end_date": ed_epoch
    }
    return (myEpochObj);
  }

  let converterEpochToDate = (epoch) => {
    let localtime = new Date(parseInt(epoch * 1000))
    var date_string = localtime.toLocaleString('en-GB');
    return (date_string);
  }

  let fillDateInOptionParameter = (fillStartDate, fillEndDate) => {
    options.qs.start = fillStartDate;
    options.qs.end = fillEndDate;
    return options;
  }


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

  let functionToGetInput = async (startdate_input, enddate_input) => {
    let returnobject = await converterDateToEpoch(startdate_input, enddate_input);
    let m_startdate = returnobject.start_date;
    let m_enddate = returnobject.end_date;
    mainFunctionToPerformTask(m_startdate, m_enddate);
  }

  let mainFunctionToPerformTask = async (m_startdate, m_enddate) => {
    let interval = (m_enddate - m_startdate);
    if (interval > 7948800) {
      startdate = m_startdate;
      enddate = startdate + 7948800;
      let theoption = await fillDateInOptionParameter(startdate, enddate);

      getDataFromApiAndInsertIntoDatabase(theoption, function (start_date) {
        startdate = start_date;
        enddate = m_enddate;
        mainFunctionToPerformTask(startdate, enddate)
      })
    } else {
      let theoption = await fillDateInOptionParameter(m_startdate, m_enddate);
      await getDataFromApiAndInsertIntoDatabase(theoption, function (start_date, end_date) {})
    }
  }



  functionToGetInput(start_date_input, end_date_input)

}

poloniexapifunction()
exports.poloniexapifunction = poloniexapifunction;
