<template>
  <div class="login" @mouseenter="mouseEnter" @mousemove="mouseMove" @mouseleave="mouseLeave">
    <h1>Login</h1>
    <form class="login-form">
      <input v-model="username" type="text" placeholder="Username">
      <button @click="$emit('on-login', username)">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    mouseMove(event) {
      const x = event.clientX - this.$el.offsetLeft
      const y = event.clientY - this.$el.offsetTop
      this.$el.style.setProperty("--mouse-x", `${x}px`);
      this.$el.style.setProperty("--mouse-y", `${y}px`);
    },
  }
}
</script>

<style lang="scss">
.login {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 15px 20px;
  width: fit-content;
  height: fit-content;
  border: 1px solid rgba(255, 255, 255, 0.253);
  border-radius: 8px;

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    button {
      background-color: white;
      padding: 8px 12px;
      border-radius: 8px;
      font-weight: bold;
    }
  }

  &:hover::before {
    opacity: 1;
  }

  &::before {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
    background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.11),
        transparent 40%);
    z-index: -10;
  }
}
</style>