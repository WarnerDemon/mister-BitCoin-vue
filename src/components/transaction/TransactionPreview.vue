<template>
  <div class="transaction-preview" v-if="transaction">
    <h3 v-if="!hideName">{{transaction.to}}</h3>
    <h4>{{transaction.amount}}₿</h4>
    <span>{{transactionDate}}</span>
  </div>
  <div class="loading" v-else>Loading...</div>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      required: true,
    },
    hideName: {
      type: Boolean,
      required: false,
    }
  },
  created() {
    console.log('this.transaction:', this.transaction)
  },
  computed: {
    transactionDate() {
      const dateOptions = { hour: 'numeric', minute: 'numeric' }
      return new Intl.DateTimeFormat('en-US', dateOptions).format(this.transaction.at)
    }
  }
}
</script>

<style lang="scss">
.transaction-preview {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  .remove {
    color: white;
  }
}
</style>