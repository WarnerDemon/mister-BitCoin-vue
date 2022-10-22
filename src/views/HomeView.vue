<template>
  <main v-if="user">
    <h1>Hi, {{user.username}}, Nice to see you again.</h1>
    <h3>Balance: {{user.balance}}₿</h3>
    <h3 v-if="bitcoinRate">BTC: {{bitcoinRate}}$</h3>
    <TransactionList />
  </main>
  <Login v-else @on-login="onLogin" />
</template>

<script>
import Login from "../components/auth/Login.vue";
import TransactionList from "../components/transaction/TransactionList.vue";
export default {
  data() {
    return {};
  },
  async created() {
    this.$store.dispatch({ type: "loadBitcoinRate" })
  },
  methods: {
    onLogin(username) {
      this.$store.dispatch({ type: 'login', username })
    },
  },
  computed: {
    user() { return this.$store.getters.user; },
    bitcoinRate() { return this.$store.getters.bitcoinRate; },
  },
  components: { Login, TransactionList }
}
</script>
  
<style lang="sass">

</style>