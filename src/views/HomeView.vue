<template>
  <main v-if="user">
    <h1>{{user.name}}, Nice to see you again.</h1>
    <h3>Balance: {{user.balance}}$</h3>
    <h3 v-if="bitcoinRate">BTC: {{bitcoinRate}}$</h3>
  </main>
  <h1 v-else>Loading...</h1>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service';
import { userService } from '../services/user.service';

export default {
  data() {
    return {
      user: null,
      bitcoinRate: null,
    }
  },
  async created() {
    this.user = userService.getUser()
    this.bitcoinRate = await bitcoinService.getRate('USD')
  }
}
</script>
  
<style lang="sass">

</style>