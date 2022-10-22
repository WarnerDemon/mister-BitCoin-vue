import { userService } from "../../services/user.service"


export default {
  state: {
    user: null,
    contactTransactions: null,
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user
    }
  },
  actions: {
    loadUser({ commit }) {
      const user = userService.getUser()
      commit({ type: 'setUser', user })
    },
    login({ commit }, { username }) {
      const user = userService.login(username)
      commit({ type: 'setUser', user })
    },
    transferFunds({ commit }, { contact, amount }) {
      const user = userService.transferFunds(contact, amount)
      commit({ type: 'setUser', user })
    },
  },
  getters: {
    user(state) {
      return state.user
    },
    transactions(state) {
      return state.user?.transactions
    },
  }
}