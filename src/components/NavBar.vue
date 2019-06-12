<template>
  <nav class="navbar is-light">
    <router-link class="" to="/" aria-label="Home" title="Home">
      <span class="menu-label">Home</span>
    </router-link>
    &nbsp;&nbsp;
    <router-link class="" to="/about" aria-label="About" title="About">
      <span class="menu-label">About</span>
    </router-link>
    <hr/>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  }
};
</script>
