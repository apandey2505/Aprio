let converterEpochToDate = (epoch) => {
  let localtime = new Date(parseInt(epoch * 1000))
  // let localtime = new Date(Date.parse(epoch * 1000));
  var date_string = localtime.toLocaleString('en-GB');
  return (date_string);
}


// let convertEpochToDate = epoch => {
//   let localtime = new Date(Date.parse(epoch));
//   return localtime;
//   };


exports.converterEpochToDate = converterEpochToDate;
