const express = require("express"); 
const app = express();
const callApi = require("./controller/binance");
const {variables} = require('./config/config.json');

app.get("/", (req, res) => {
  callApi.fetchingConvertedDates(variables.startDate, variables.endDate);
  res.send("data has been fetched successfully ");
})
app.listen(3000);
