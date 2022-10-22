<template>
  <section class="transaction-list">
    <h1>Transactions:</h1>
    <div @click="onGotoContact(transaction.toId)" v-for="(transaction, idx) in getTransactions" :key="idx">
      <TransactionPreview :transaction="transaction" :hideName="hideName" />
    </div>
  </section>
</template>

<script>
import TransactionPreview from './TransactionPreview.vue';
export default {
  props: {
    hideName: {
      type: Boolean,
      required: false,
    },
    contactId: {
      type: String,
      required: false,
    },
  },
  methods: {
    onGotoContact(contactId) {
      if (this.hideName) return
      this.$router.push(`contact/${contactId}`)
    },
  },
  computed: {
    transactions() { return this.$store.getters.transactions },
    getTransactions() {
      return (this.contactId) ?
        this.transactions.filter(transaction => transaction.toId === this.contactId) :
        this.transactions
    },
  },
  components: { TransactionPreview }
}
</script>

<style lang="scss">
.transaction-list {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>