let {
  options
} = require('../../poloniexOptions/options')


let fillDateInOptionParameter = (fillStartDate, fillEndDate) => {
  options.qs.start = fillStartDate;
  options.qs.end = fillEndDate;
  return options;
}
exports.fillDateInOptionParameter = fillDateInOptionParameter;
