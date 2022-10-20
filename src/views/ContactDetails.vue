<template>
  <main class="contact-details" v-if="contact">
    <button class="go-back">
      <RouterLink to="/contact">Back</RouterLink>
    </button>
    <img :src="`https://robohash.org/${contact.name}`" alt="User profile">
    <h1 class="name">{{contact.name}}</h1>
    <h3 class="email">Email: <span>{{contact.email}}</span></h3>
    <h3 class="phone">Phone: <span>{{contact.phone}}</span></h3>
  </main>
  <div class="loading" v-else>Loading...</div>
</template>

<script>

export default {
  async created() {
    const contactId = this.$route.params._id
    this.$store.dispatch({ type: 'loadContact', contactId })
  },
  unmounted() {
    this.$store.commit({ type: 'setContact', contact: null })
  },
  computed: {
    contact() { return this.$store.getters.contact }
  }
}
</script>

<style lang="scss">
.contact-details {
  display: flex;
  flex-direction: column;
  width: fit-content;
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