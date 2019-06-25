var options = {
  method: 'GET',
  url: 'https://poloniex.com/public',
  qs: {
    command: 'returnChartData',
    currencyPair: 'BTC_ETH',
    start: "",
    end: "",
    period: '300'
  }
};
exports.options = options
