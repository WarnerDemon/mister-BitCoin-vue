import axios from "axios"


export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
}

async function getRate(coin) {
  console.log('getting coin:', coin)
  const res = await axios.get(`https://blockchain.info/ticker`)
  return res.data[coin].last
}

async function getMarketPriceHistory(coin) {
  const res = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
  const vals = res.data.values.filter((val, idx) => ((idx / 30 % 1) === 0))
  return vals
}

function getAvgBlockSize(coin) {
  return console.log('getting block size:', coin)
}