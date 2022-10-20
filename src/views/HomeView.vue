<template>
  <main v-if="user">
    <h1>Hi, {{user.name}}, Nice to see you again.</h1>
    <h3>Balance: {{user.balance}}$</h3>
    <h3 v-if="bitcoinRate">BTC: {{bitcoinRate}}$</h3>
  </main>
  <h1 v-else>Loading...</h1>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  async created() {
    this.$store.dispatch({ type: 'loadUser' })
    this.$store.dispatch({ type: 'loadBitcoinRate' })
  },
  computed: {
    user() { return this.$store.getters.user },
    bitcoinRate() { return this.$store.getters.bitcoinRate },
  }
}
</script>
  
<style lang="sass">

</style>