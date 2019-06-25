let converterDateToEpoch = (starting_date, ending_date) => {
  let sd_epoch = new Date(starting_date).getTime() / 1000;
  let ed_epoch = new Date(ending_date).getTime() / 1000;
  let myEpochObj = {
    "start_date": sd_epoch,
    "end_date": ed_epoch
  }
  return (myEpochObj);
}
exports.converterDateToEpoch = converterDateToEpoch;
