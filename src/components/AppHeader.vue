<template>
  <header class="app-header">
    <h1>BitCoin</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/statistics">Statistics</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #18181a;
  height: 5vh;
  padding-inline: 10px;
  margin-block-end: 2em;

  nav {
    &>* {
      margin-inline-end: 20px;
    }
  }
}
</style>
