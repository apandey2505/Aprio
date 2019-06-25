let {
  fillDateInOptionParameter
} = require('../fillDateinOptionParameter/fillDateInOptionParameter')
let {
  getDataFromApiAndInsertIntoDatabase
} = require('../getDataFromApiAndInsertIntoDatabase/getDataFromApiAndInsertIntoDatabase')

// let {option} = require('../../poloniexOptions/options')

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

exports.mainFunctionToPerformTask = mainFunctionToPerformTask
