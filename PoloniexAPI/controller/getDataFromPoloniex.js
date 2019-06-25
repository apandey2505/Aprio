let {
  variable
} = require('../config/config.json')

let startdate_input = variable.start_date;
let enddate_input = variable.end_date;
let {
  options
} = require('../poloniexOptions/options')
let {
  converterDateToEpoch
} = require('../services/converterOfDate/converterDateToEpoch');
let {
  fillDateInOptionParameter
} = require('../services/fillDateinOptionParameter/fillDateInOptionParameter');
let {
  mainFunctionToPerformTask
} = require('../services/mainFunctionToPerformTask/mainFunctionToPerformTask')

let getDataFromPoloniex = async (startdate_input, enddate_input) => {
  let returnobject = await converterDateToEpoch(startdate_input, enddate_input);
  let m_startdate = returnobject.start_date;
  let m_enddate = returnobject.end_date;
  mainFunctionToPerformTask(m_startdate, m_enddate);
}

getDataFromPoloniex(startdate_input, enddate_input)
