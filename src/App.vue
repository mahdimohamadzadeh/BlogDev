<template>
  <Navbar />
  <router-view class="container" />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>

<style lang="scss"></style>
