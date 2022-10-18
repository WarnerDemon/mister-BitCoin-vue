
export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

function getRate(coin) {
  return console.log('getting coin:', coin)
}

function getMarketPriceHistory(coin) {
  return console.log('getting coin history:', coin)
}

function getAvgBlockSize(coin) {
  return console.log('getting block size:', coin)
}