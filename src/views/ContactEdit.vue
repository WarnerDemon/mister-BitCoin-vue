<template>
  <main class="contact-details" v-if="contact">
    <RouterLink to="/contact">
      <button class="go-back">Back</button>
    </RouterLink>
    <img :src="`https://robohash.org/${contact._id}`" alt="User profile">
    <input class="name" v-model="contact.name" type="text">
    <input class="email" v-model="contact.email" type="email">
    <input class="phone" v-model="contact.phone" type="tel">
    <button @click="onSaveContact">Save</button>
  </main>
  <div class="loading" v-else>Loading...</div>
</template>

<script>
import { contactService } from '../services/contact.service'

export default {
  data() {
    return {
      contact: null
    }
  },
  async created() {
    const contactId = this.$route.params._id
    this.contact = (contactId) ?
      await contactService.getContactById(contactId)
      : await contactService.getEmptyContact()
  },
  unmounted() {
    this.$store.commit({ type: 'setContact', contact: null })
  },
  methods: {
    onSaveContact() {
      this.$store.dispatch({type: 'saveContact', contactToSave: this.contact})
      this.$router.push('/contact')
    }
  },
  computed: {
    // contact() { return this.$store.getters.contact }
  }
}
</script>

<style lang="scss">
.contact-details {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  gap: 10px;

  .go-back {
    position: absolute;
    left: 0;
    margin-inline: 10px;
    background-color: white;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: bold;

    * {
      color: black;
    }
  }

  span {
    padding-inline: 5px;
    font-size: 16px;
    font-weight: normal;
  }

  .name {
    font-size: 46px;
    align-self: center;
    margin-bottom: 20px;
  }
}
</style>