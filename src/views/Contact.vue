<template>
  <main class="contacts">
    <ContactList @remove-contact="onRemoveContact" v-if="contacts" :contacts="contacts" />
  </main>
</template>

<script>
import { contactService } from '../services/contact.service';
import ContactList from '../components/contact/ContactList.vue';

export default {
  data() {
    return {
      contacts: null
    };
  },
  async created() {
    this.contacts = await contactService.getContacts();
  },
  methods: {
    onRemoveContact(contactId) {
      console.log('contactId:', contactId)
      contactService.deleteContact(contactId)

      const contactIdx = this.contacts.findIndex(contact => contact._id === contactId)
      this.contacts.splice(contactIdx, 1)
    },
  },
  components: { ContactList }
}
</script>

<style lang="scss">
.contacts {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;
  margin-block-end: 50px;
}
</style>