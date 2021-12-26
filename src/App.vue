<template>
  <Navbar />
  <router-view class="container mx-auto px-4" />
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
};
</script>

<style>
body {
  background-color: rgb(250, 246, 241);
}
</style>
