<template>
  <div id="app" class="dark:bg-dark-blue">
    <Navbar class="mb-20" />
    <router-view class="container mx-auto px-4" />
    <Footer class="mt-20" />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import { mapGetters } from "vuex";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
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
  methods: {
    // alertDisplay() {
    //   this.$swal({
    //     title: "آیا مطمئن هستید؟",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#ff0000",
    //     confirmButtonText: "بله!",
    //   });
    // },
  },
};
</script>

<style>
body {
  background-color: rgb(250, 246, 241);
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background-color: rgb(94, 255, 134);
}
::-webkit-scrollbar-thumb {
  background-color: rgb(221, 255, 27);
  border-radius: 15px;
}
:root {
  scrollbar-color: rgb(255, 255, 255) rgb(94, 255, 134) !important ;
  scrollbar-width: thin !important;
}
</style>
