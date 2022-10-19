<template>
  <div class="contact-preview" v-if="contact">
    <img :src="`https://robohash.org/${contact._id}`" alt="User profile">
    <h1>{{contact.name}}</h1>
    <button class="remove" @click.stop="$emit('remove-contact', contact._id)">X</button>
    <RouterLink @click.stop :to="`/contact/edit/${contact._id}/`">Edit</RouterLink>
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
  },
}
</script>

<style lang="scss">
.contact-preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  .remove {
    color: white;
  }
}
</style>