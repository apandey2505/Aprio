const convertEpochToDate = epoch => {
  let localtime = new Date(Date.parse(epoch));
  return localtime;
};
const convertDateToEpoch = (startDate, endDate) => {
  let startTime = new Date(startDate).getTime();
  let endTime = new Date(endDate).getTime();
  let timeObj = {
    startTime,endTime
  }
  return timeObj;
};

module.exports = {
  convertEpochToDate,
  convertDateToEpoch
}
