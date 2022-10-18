<template>
  <main class="contacts">
    <ContactList v-if="contacts" :contacts="contacts" />
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
  components: { ContactList }
}
</script>

<style>

</style>