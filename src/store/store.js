import { createStore } from 'vuex'
import statistic from './modules/statistic.store'
import contact from './modules/contact.store'
import user from './modules/user.store'

const storeOptions = {
  strict: true,
  state() {
    return {
      count: 10,
    }
  },
  mutations: {
    increment(state, payload) {
      console.log(payload);
      state.count++
    },
  },
  getters: {
    count(state) { return state.count }
  },
  modules: {
    statistic,
    contact,
    user,
  }
}
// Create a new store instance.
const store = createStore(storeOptions)
export default store