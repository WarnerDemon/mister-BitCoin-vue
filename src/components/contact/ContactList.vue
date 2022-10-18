<template>
  <section class="contact-list">
    <div @click="$router.push(`contact/${contact._id}`)" v-for="contact in contacts" :key="contact._id">
      <ContactPreview @remove-contact="$emit('remove-contact', contact._id)" :contact="contact" />
    </div>
  </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue';
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    }
  },
  methods: {
  },
  components: { ContactPreview }
}
</script>

<style lang="scss">
.contact-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>