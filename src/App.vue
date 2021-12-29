<template>
  <div id="app" class="dark:bg-purple-800">
    <Navbar />
    <router-view class="container mx-auto px-4" />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import { mapGetters } from "vuex";
export default {
  components: { Navbar },
  name: "App",
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
};
</script>

<style>
body {
  background-color: rgb(250, 246, 241);
}
</style>
