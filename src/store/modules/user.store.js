import { userService } from "../../services/user.service"


export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user
    }
  },
  actions: {
    async loadUser({ commit }) {
      const user = await userService.getUser()
      commit({ type: 'setUser', user })
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  }
}