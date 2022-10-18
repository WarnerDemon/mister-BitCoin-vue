<template>
  <div class="contact-preview" v-if="contact">
    <h1>{{contact.name}}</h1>
  </div>
  <div class="loading" v-else>Loading...</div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style>

</style>