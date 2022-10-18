<template>
  <section class="contact-list">
    <RouterLink v-for="contact in contacts" :key="contact._id" :to="`contact/${contact._id}`">
      <ContactPreview :contact="contact" />
    </RouterLink>
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
  components: { ContactPreview }
}
</script>

<style>

</style>