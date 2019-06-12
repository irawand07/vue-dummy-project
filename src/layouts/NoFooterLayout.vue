<template>
  <div>
    <nav-bar />

    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <side-bar />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import NavBar from "@/components/NavBar";
  import SideBar from "@/components/SideBar";

  export default {
    name: 'Default',
    components: {
      NavBar,
      SideBar
    }
  }

</script>
