import { contactService } from "../../services/contact.service"


export default {
  state: {
    contacts: [],
    contact: null,
  },
  mutations: {
    setContacts(state, { contacts }) {
      state.contacts = contacts
    },
    setContact(state, { contact }) {
      state.contact = contact
    },
    removeContact(state, { contactId }) {
      const contactIdx = state.contacts.findIndex(contact => contact._id === contactId)
      state.contacts.splice(contactIdx, 1)
    },
  },
  actions: {
    async loadContacts({ commit }) {
      const contacts = await contactService.getContacts()
      commit({ type: 'setContacts', contacts })
    },
    async loadContact({ commit }, { contactId }) {
      const contact = await contactService.getContactById(contactId)
      commit({ type: 'setContact', contact })
    },
    async removeContact({ commit }, { contactId }) {
      await contactService.deleteContact(contactId)
      commit({ type: 'removeContact', contactId })
    },
  },
  getters: {
    contacts(state) { return state.contacts },
    contact(state) { return state.contact },
  }
}