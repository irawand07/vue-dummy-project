<script>
import FooterBar from "@/components/FooterBar";

export default {
  components: {
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar />

    <div class="container">
      <slot />
    </div>

    <footer-bar />
  </div>
</template>
