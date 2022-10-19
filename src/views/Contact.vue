<template>
  <main class="contacts">
    <ContactList @remove-contact="onRemoveContact" v-if="contacts" :contacts="contacts" />
  </main>
</template>

<script>
import ContactList from '../components/contact/ContactList.vue';

export default {
  data() {
    return {
    };
  },
  async created() {
    this.$store.dispatch({ type: 'loadContacts' })
  },
  methods: {
    onRemoveContact(contactId) {
      this.$store.dispatch({ type: 'removeContact', contactId })
    },
  },
  computed: {
    contacts() { return this.$store.getters.contacts }
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