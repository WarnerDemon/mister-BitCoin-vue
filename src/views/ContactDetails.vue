<template>
  <main class="contact-details" v-if="contact">
    <h1>{{contact.name}}</h1>
  </main>
  <div class="loading" v-else>Loading...</div>
</template>

<script>
import { contactService } from '../services/contact.service';

export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const _id = this.$route.params._id
    this.contact = await contactService.getContactById(_id)
  }
}
</script>

<style>

</style>