<template>
  <main class="contact-details" v-if="contact">
    <RouterLink to="/contact">
      <button class="go-back">Back</button>
    </RouterLink>
    <img :src="`https://robohash.org/${contact._id}`" alt="User profile">
    <h1 class="name">{{contact.name}}</h1>
    <h3 class="email">Email: <span>{{contact.email}}</span></h3>
    <h3 class="phone">Phone: <span>{{contact.phone}}</span></h3>
    <form v-if="loggedinUser">
      <span>{{transferAmount}}</span>
      <input v-model="transferAmount" type="range">
      <button @click="onTransferFunds">Transfer</button>
      <!-- <button>Transfer</button> -->
    </form>
    <TransactionList :hideName="true" :contactId="contact._id" />
  </main>
  <div class="loading" v-else>Loading...</div>
</template>

<script>
import TransactionList from '../components/transaction/TransactionList.vue'

export default {
  data() {
    return {
      transferAmount: 0,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.$store.dispatch({ type: "loadContact", contactId });
  },
  unmounted() {
    this.$store.commit({ type: "setContact", contact: null });
  },
  methods: {
    onTransferFunds() {
      if (this.$store.getters.user.balance < this.transferAmount) return
      this.$store.dispatch({ type: "transferFunds", contact: this.contact, amount: this.transferAmount });
    }
  },
  computed: {
    loggedinUser() { return this.$store.getters.user },
    contact() { return this.$store.getters.contact },
  },
  components: { TransactionList }
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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