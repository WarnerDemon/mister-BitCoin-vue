<script>
import { userService } from '../services/user.service';

export default {
  data() {
    return {
      user: null,
    }
  },
  created() {
    this.user = userService.getUser()
  }
}
</script>

<template>
  <main v-if="this.user">
    <h1>{{ user.name }}</h1>
  </main>
    <h1 v-else>Loading...</h1>
</template>

<style lang="sass">

</style>