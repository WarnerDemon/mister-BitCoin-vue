import { bitcoinService } from "../../services/bitcoin.service"


export default {
  state: {
    bitcoinRate: null,
  },
  mutations: {
    setBitcoinRate(state, { coinRate }) {
      state.bitcoinRate = coinRate
    }
  },
  actions: {
    async loadBitcoinRate({ commit }) {
      const coinRate = await bitcoinService.getRate('USD')
      commit({ type: 'setBitcoinRate', coinRate })
    }
  },
  getters: {
    bitcoinRate(state) { return state.bitcoinRate }
  }
}